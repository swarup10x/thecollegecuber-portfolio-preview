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
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: false,alpha:true });

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
            "lego-1x1-009946",
            "lego-1x1-009947",
            "lego-1x1-3188C8",
            "lego-1x1-769F27",
            "lego-1x1-CEB028",
            "lego-1x2-3188C8",
            "lego-1x2-5916D1",
            "lego-1x2-C21A2D",
            "lego-1x2-slope-5916D1",
            "lego-1x2-slope-C21A2D",
            "lego-1x2-slope-CB6F2A",
            "lego-1x4-9C9C9B",
            "lego-1x4-CB6F2A",
            "lego-2x2-round-5916D1",
            "lego-2x2-round-CB3E49",
            "lego-2x2-round-CB6F2A",
            "lego-3x2-769F27",
            "lego-3x2-CB6F2A",
            "lego-5x2-009947",
            "lego-5x2-3188C8",
            "lego-5x2-C21A2D",
            "lego-5x2-C75089",
            "lego-5x2-CB6F2A",
            "lego-brick-8x1",
            "lego-brick-8x2",
            "lego-round-1x1-006EC8",
            "lego-round-1x1-C75089",
            "lego-round-1x1",
        ];
        const legoSrc = "/stls";
        legos.forEach((lego) => {
    loader.load(`/stls/${lego}.fbx`, (fbx) => {
        fbx.scale.set(0.02, 0.02, 0.02); // Adjust scale as needed

        // Traverse the loaded model to adjust materials
        fbx.traverse((child) => {
            if (child.isMesh) {
                // Ensure the loaded material is not transparent
                if (child.material) {
                    child.material.transparent = false;
                    child.material.opacity = 1;
                    child.material.side = THREE.DoubleSide;
                } else {
                    // If no material, create a new one
                    child.material = new THREE.MeshPhongMaterial({
                        color: Math.random() * 0xffffff,
                        opacity: 1,
                        transparent: false,
                        side: THREE.DoubleSide
                    });
                }
            }
        });

        const legoModel = fbx.clone();

        // Calculate bounding box to get dimensions
        const boundingBox = new THREE.Box3().setFromObject(legoModel);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);

        // Create a Cannon.js body based on the bounding box
        const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2);
        const boxShape = new CANNON.Box(halfExtents);
        const boxBody = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(rand(-20, 20), rand(-20, 20), rand(-20, 20)),
            shape: boxShape,
            material: new CANNON.Material(),
            linearDamping: 0.1,
            angularDamping: 0.5
        });

        // Set proper inertia
        const volume = size.x * size.y * size.z;
        const density = 1 / (volume * 0.001); // Adjust density as needed
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
    }, undefined, (error) => {
        console.error(`Error loading model ${lego}:`, error);
    });
});

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        onMouseMove=(event) =>{
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);

            for (let intersect of intersects) {
                const obj = objects.find((o) => o.mesh === intersect.object || o.mesh.getObjectById(intersect.object.id));
                if (obj) {
                    obj.moveDistance = Math.round(mouseSpeed * 1000) / 10;
                    obj.mouseSpeed = mouseSpeed;
                    obj.mouseAngle = mouseAngle;
                    break;
                }
            }
        }

         onTouchMove=(event) =>{
            if (event.touches.length === 1) {
                const touch = event.touches[0];
                onMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
            }
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);

        function updateObjects() {
            for (let obj of objects) {
                if (obj.moveDistance > 0) {
                    const speedMultiplier = 30; // Reduced from 50
                    const velocity = new CANNON.Vec3(
                        obj.mouseSpeed * speedMultiplier * Math.cos(obj.mouseAngle),
                        obj.mouseSpeed * speedMultiplier * Math.sin(-obj.mouseAngle),
                        0
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
                                child.material.emissive = new THREE.Color(0x000000);
                            }
                        });
                    }
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

         getMouseSpeed=(event)=> {
            const currentMousePosition = { x: event.clientX, y: event.clientY };
            console.log(currentMousePosition)
            const currentTimestamp = performance.now();

            if (lastTimestamp) {
                const dx = currentMousePosition.x - lastMousePosition.x;
                const dy = currentMousePosition.y - lastMousePosition.y;
                const dt = currentTimestamp - lastTimestamp;

                const distance = Math.sqrt(dx * dx + dy *dy);
                const speed = distance / dt;
                mouseSpeed = speed;
                const angle = Math.atan2(dy, dx);
                mouseAngle = angle;
            }

            lastMousePosition = currentMousePosition;
            lastTimestamp = currentTimestamp;
        }

         getTouchSpeed=(event)=> {
            if (event.touches.length === 1) {
                const touch = event.touches[0];
                getMouseSpeed({ clientX: touch.clientX, clientY: touch.clientY });
            }
        }

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
