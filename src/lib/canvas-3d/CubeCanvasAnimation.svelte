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
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true,alpha:true });

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
        loader.load('/fbx/rubiks-cube.fbx', (fbx) => {
            fbx.scale.set(0.08, 0.08, 0.08); // Adjust scale as needed

            for (let i = 0; i < numObjects; i++) {
                const rubiksCube = fbx.clone();

                const size = 2; // Adjust this based on the actual size of your Rubik's cube model
                const boxShape = new CANNON.Box(new CANNON.Vec3(size/2, size/2, size/2));
                const boxBody = new CANNON.Body({
                    mass: 1,
                    position: new CANNON.Vec3(rand(-20, 20), rand(-20, 20), rand(-20, 20)),
                    shape: boxShape,
                    material: new CANNON.Material(),
                    linearDamping: 0.1,
                    angularDamping: 0.5
                });

                // Set proper inertia for a cube
                boxBody.inertia.set(
                    size * size / 6,
                    size * size / 6,
                    size * size / 6
                );
                boxBody.updateMassProperties();

                world.addBody(boxBody);

                rubiksCube.position.copy(boxBody.position);
                scene.add(rubiksCube);

                objects.push({
                    body: boxBody,
                    mesh: rubiksCube,
                    moveDistance: 0,
                    mouseSpeed: 0,
                    mouseAngle: 0,
                });
            }
        }, undefined, (error) => {
            console.error('An error happened', error);
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
