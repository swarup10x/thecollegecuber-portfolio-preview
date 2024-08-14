<script>
    import { onDestroy, onMount } from "svelte";
    import * as THREE from "three";
    import * as CANNON from "cannon";
    import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

    let onMouseMove, onTouchMove, getMouseSpeed, getTouchSpeed;

    function rand(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return min + (max - min) * Math.random();
    }

    function main() {
        var mouseSpeed = 0;
        var mouseAngle = 0;

        const canvas = document.querySelector("#c");
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: false,
            alpha: true,
        });

        let isModelsLoaded = false;
        let isVelocityDampened = false;

        const fov = 60;
        const aspect = 2;
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 30;

        const scene = new THREE.Scene();
        // scene.background = new THREE.Color("white");

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1, 2, 4);
        camera.add(light);
        scene.add(camera);

        // Cannon.js world setup
        const world = new CANNON.World();
        world.gravity.set(0, 0, 0); // No gravity
        world.defaultContactMaterial.friction = 0.5;
        world.defaultContactMaterial.restitution = 0.3;

        const fixedTimeStep = 1.0 / 60.0; // 60 Hz
        const maxSubSteps = 3;

        const objects = [];
        const numObjects = 24;

        const loader = new FBXLoader();
        const legos = [
            { title: "Cube-1x1-hollow", mass: 1 },
            { title: "Cube-1x1-round-tall", mass: 1 },
            { title: "Cube-1x1-round", mass: 1 },
            { title: "Cube-1x1-tall-hollow", mass: 1.5 },
            { title: "Cube-1x1-tall", mass: 1.5 },
            { title: "Cube-1x1", mass: 1 },
            { title: "Cube-1x2-hollow", mass: 2 },
            { title: "Cube-1x2", mass: 2 },
            { title: "Cube-2x2-hollow", mass: 4 },
            { title: "Cube-2x2", mass: 4 },
            { title: "Cube-3x1-hollow", mass: 3 },
            { title: "Cube-3x1", mass: 3 },
            { title: "Cube-3x2-hollow", mass: 5 },
            { title: "Cube-3x2", mass: 6 },
            { title: "Cube-4x1", mass: 4 },
            { title: "Cube-4x2-hollow", mass: 8 },
            { title: "Cube-4x2", mass: 8 },
            { title: "Cube-5x2-hollow", mass: 10 },
            { title: "Cube-5x2", mass: 10 },
        ];
        const legoSrc = "/lego-models";
        legos.forEach((lego) => {
            loader.load(
                `${legoSrc}/${lego.title}.fbx`,
                (fbx) => {
                    fbx.scale.set(0.015, 0.015, 0.015); // Adjust scale as needed

                    // Traverse the loaded model to adjust materials
                    fbx.traverse((child) => {
                        if (child.isMesh) {
                            // Ensure the loaded material is not transparent
                            if (child.material) {
                                child.material.transparent = false;
                                child.material.opacity = 1;
                                child.material.side = THREE.DoubleSide;
                                child.material.color.setHex(
                                    Math.random() * 0xffffff,
                                );
                            } else {
                                // If no material, create a new one
                                child.material = new THREE.MeshPhongMaterial({
                                    color: Math.random() * 0xffffff,
                                    opacity: 1,
                                    transparent: false,
                                    side: THREE.DoubleSide,
                                });
                            }
                        }
                    });

                    const legoModel = fbx.clone();

                    // Calculate bounding box to get dimensions
                    const boundingBox = new THREE.Box3().setFromObject(
                        legoModel,
                    );
                    const size = new THREE.Vector3();
                    boundingBox.getSize(size);

                    // Create a Cannon.js body based on the bounding box
                    const halfExtents = new CANNON.Vec3(
                        size.x / 2,
                        size.y / 2,
                        size.z / 2,
                    );
                    const boxShape = new CANNON.Box(halfExtents);
                    // Set proper inertia
                    const volume = size.x * size.y * size.z;
                    const density = 1 / (volume * 0.001); // Adjust density as needed
                    const mass = lego.mass;
                    const boxBody = new CANNON.Body({
                        mass: mass,
                        position: new CANNON.Vec3(
                            rand(-15, 15),
                            rand(-15, 15),
                            rand(-5, 0),
                        ),
                        shape: boxShape,
                        material: new CANNON.Material(),
                        linearDamping: 0.1,
                        angularDamping: 0.5,
                    });

                    boxBody.updateMassProperties();

                    world.addBody(boxBody);

                    legoModel.position.copy(boxBody.position);
                    scene.add(legoModel);

                    objects.push({
                        body: boxBody,
                        mesh: legoModel,
                        moveDistance: 0,
                        mouseSpeed: 0,
                        mouseAngle: 0,
                    });
                    if (objects.length >= legos.length) {
                        isModelsLoaded = true;
                    }
                },
                undefined,
                (error) => {
                    console.error(`Error loading model ${lego}:`, error);
                },
            );
        });

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize =
                canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);

            for (let intersect of intersects) {
                const obj = objects.find(
                    (o) =>
                        o.mesh === intersect.object ||
                        o.mesh.getObjectById(intersect.object.id),
                );
                if (obj) {
                    obj.moveDistance = Math.round(mouseSpeed * 1000) / 10;
                    obj.mouseSpeed = mouseSpeed;
                    obj.mouseAngle = mouseAngle;
                    break;
                }
            }
        };

        onTouchMove = (event) => {
            if (event.touches.length === 1) {
                const touch = event.touches[0];
                onMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);

        function updateObjects() {
            for (let obj of objects) {
                if (obj.moveDistance > 0) {
                    obj.body.velocity.z = 0;
                    const speedMultiplier = 50; // Reduced from 50
                    let velocity = new CANNON.Vec3(
                        obj.mouseSpeed *
                            speedMultiplier *
                            Math.cos(obj.mouseAngle)/obj.body.mass,
                        obj.mouseSpeed *
                            speedMultiplier *
                            Math.sin(-obj.mouseAngle)/obj.body.mass,
                        0,
                    );
    
                    obj.body.velocity.copy(velocity);
                    obj.body.angularVelocity.set(0, 0, 0); // Reset angular velocity
                    obj.moveDistance -= 1;

                    if (obj.moveDistance <= 0) {
                        obj.body.velocity.set(0, 0, 0);
                        obj.body.angularVelocity.set(0, 0, 0);
                        obj.moveDistance = 0;
                        obj.mesh.traverse((child) => {
                            if (child.isMesh && child.material) {
                                child.material.emissive = new THREE.Color(
                                    0x000000,
                                );
                            }
                        });
                    }
                }

                
            }
            if (isModelsLoaded && !isVelocityDampened) {
                isVelocityDampened = true;
                function delay(ms) {
                    return new Promise((resolve) => setTimeout(resolve, ms));
                }
                delay(100).then(() => {
                    console.log("Executed after 2 seconds");
                    console.log("updating isModelsLoaded && !isVelocityDampened");

                    for (let obj of objects) {
                        obj.body.velocity.set(0, 0, 0);
                        obj.body.angularVelocity.set(0, 0, 0);
                    }
                });
            }
        }

        let lastTime;
        function render(time) {
            time *= 0.001;

            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }

            if (lastTime !== undefined) {
                const dt = time - lastTime;
                updateObjects();
                world.step(fixedTimeStep, dt, maxSubSteps);

                for (let obj of objects) {
                    obj.mesh.position.copy(obj.body.position);
                    obj.mesh.quaternion.copy(obj.body.quaternion);
                }
            }
            lastTime = time;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        let lastMousePosition = { x: 0, y: 0 };
        let lastTimestamp = 0;

        getMouseSpeed = (event) => {
            const currentMousePosition = { x: event.clientX, y: event.clientY };
            // console.log(currentMousePosition);
            const currentTimestamp = performance.now();

            if (lastTimestamp) {
                const dx = currentMousePosition.x - lastMousePosition.x;
                const dy = currentMousePosition.y - lastMousePosition.y;
                const dt = currentTimestamp - lastTimestamp;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const speed = distance / dt;
                mouseSpeed = speed;
                const angle = Math.atan2(dy, dx);
                mouseAngle = angle;
            }

            lastMousePosition = currentMousePosition;
            lastTimestamp = currentTimestamp;
        };

        getTouchSpeed = (event) => {
            if (event.touches.length === 1) {
                const touch = event.touches[0];
                getMouseSpeed({
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
            }
        };

        window.addEventListener("mousemove", getMouseSpeed);
        window.addEventListener("touchmove", getTouchSpeed);
    }

    onMount(() => {
        main();
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mousemove", getMouseSpeed);
            window.removeEventListener("touchmove", getTouchSpeed);
        };
    });
</script>

<canvas id="c"></canvas>

<style>
    #c {
        width: 100%;
        height: 100vh;
        display: block;
    }
</style>
