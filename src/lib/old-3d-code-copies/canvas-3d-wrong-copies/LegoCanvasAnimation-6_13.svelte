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
        let isUserInteracting = false;

        const canvas = document.querySelector("#c");
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: false,
            alpha: true,
        });

        const Z_AXIS_LIMIT = 5;
        const VELOCITY_THRESHOLD = 0.01;

        const fov = 60;
        const aspect = 2;
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 30;

        const scene = new THREE.Scene();

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1, 2, 4);
        camera.add(light);
        scene.add(camera);

        const world = new CANNON.World();
        world.gravity.set(0, 0, 0);
        world.defaultContactMaterial.friction = 0.5;
        world.defaultContactMaterial.restitution = 0.3;

        const fixedTimeStep = 1.0 / 60.0;
        const maxSubSteps = 3;

        const objects = [];

        const loader = new FBXLoader();
        const legos = [
            "Cube-1x1-hollow",
            "Cube-1x1-round-tall",
            "Cube-1x1-round",
            // "Cube-1x1-tall-hollow",
            // "Cube-1x1-tall",
            // "Cube-1x1",
            // "Cube-1x2-hollow",
            // "Cube-1x2",
            // "Cube-2x2-hollow",
            // "Cube-2x2",
            // "Cube-3x1-hollow",
            // "Cube-3x1",
        ];
        const legoSrc = "/lego-models";
        legos.forEach((lego) => {
            loader.load(
                `${legoSrc}/${lego}.fbx`,
                (fbx) => {
                    fbx.scale.set(0.01, 0.01, 0.01);

                    fbx.traverse((child) => {
                        if (child.isMesh) {
                            if (child.material) {
                                child.material.transparent = false;
                                child.material.opacity = 1;
                                child.material.side = THREE.DoubleSide;
                                child.material.color.setHex(
                                    Math.random() * 0xffffff,
                                );
                            } else {
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

                    const boundingBox = new THREE.Box3().setFromObject(
                        legoModel,
                    );
                    const size = new THREE.Vector3();
                    boundingBox.getSize(size);

                    const halfExtents = new CANNON.Vec3(
                        size.x / 2,
                        size.y / 2,
                        size.z / 2,
                    );
                    const boxShape = new CANNON.Box(halfExtents);
                    const boxBody = new CANNON.Body({
                        mass: 1,
                        position: new CANNON.Vec3(
                            rand(-20, 20),
                            rand(-20, 20),
                            rand(-Z_AXIS_LIMIT, Z_AXIS_LIMIT),
                        ),
                        shape: boxShape,
                        material: new CANNON.Material(),
                        linearDamping: 0.95, // Increased damping
                        angularDamping: 0.95, // Increased damping
                    });

                    // Set initial velocity to zero
                    boxBody.velocity.set(0, 0, 0);
                    boxBody.angularVelocity.set(0, 0, 0);

                    const volume = size.x * size.y * size.z;
                    const density = 1 / (volume * 0.001);
                    boxBody.updateMassProperties();

                    world.addBody(boxBody);

                    const zConstraint = new CANNON.PointToPointConstraint(
                        boxBody,
                        new CANNON.Vec3(0, 0, 0),
                        world.bodies[0],
                        new CANNON.Vec3(
                            boxBody.position.x,
                            boxBody.position.y,
                            0,
                        ),
                    );
                    world.addConstraint(zConstraint);

                    legoModel.position.copy(boxBody.position);
                    scene.add(legoModel);

                    objects.push({
                        body: boxBody,
                        mesh: legoModel,
                        moveDistance: 0,
                        mouseSpeed: 0,
                        mouseAngle: 0,
                        isInteracted: false,
                    });
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
            isUserInteracting = true;
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);

            // Reset all objects' isInteracted flag
            objects.forEach((obj) => {
                obj.isInteracted = false;
            });

            if (intersects.length > 0) {
                const intersectedObject = intersects[0].object;
                const obj = objects.find(
                    (o) =>
                        o.mesh === intersectedObject ||
                        o.mesh.getObjectById(intersectedObject.id),
                );
                if (obj) {
                    obj.isInteracted = true;
                    obj.moveDistance = Math.round(mouseSpeed * 1000) / 10;
                    obj.mouseSpeed = mouseSpeed;
                    obj.mouseAngle = mouseAngle;
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
                if (obj.isInteracted) {
                    const speedMultiplier = 50;
                    const velocity = new CANNON.Vec3(
                        obj.mouseSpeed *
                            speedMultiplier *
                            Math.cos(obj.mouseAngle),
                        obj.mouseSpeed *
                            speedMultiplier *
                            Math.sin(-obj.mouseAngle),
                        0,
                    );
                    obj.body.velocity.copy(velocity);
                    obj.body.velocity.z = 0; // Ensure no movement along z-axis

                    // Optionally, apply some damping or stop moving after a while
                    if (obj.body.velocity.length() < VELOCITY_THRESHOLD) {
                        obj.body.velocity.set(0, 0, 0);
                        obj.body.angularVelocity.set(0, 0, 0);
                        obj.isInteracted = false; // Stop interaction after motion ends
                    }
                } else {
                    // Explicitly set velocity and angular velocity to zero
                    obj.body.velocity.set(0, 0, 0);
                    obj.body.angularVelocity.set(0, 0, 0);
                }

                // Constrain z-position
                if (Math.abs(obj.body.position.z) > Z_AXIS_LIMIT) {
                    obj.body.position.z =
                        Math.sign(obj.body.position.z) * Z_AXIS_LIMIT;
                    obj.body.velocity.z = 0;
                }
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
            isUserInteracting = true;
            const currentMousePosition = { x: event.clientX, y: event.clientY };
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
