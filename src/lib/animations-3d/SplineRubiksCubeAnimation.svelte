<script>
    import { Application } from "@splinetool/runtime";
    import { onMount } from "svelte";

    let canvas;
    onMount(() => {
        canvas = document.getElementById("c-lego");

        // start the application and load the scene
        const spline = new Application(canvas);

        let splineUrl =
            "https://prod.spline.design/oiFqC7SjhMJIGICa/scene.splinecode";
        // let splineUrl =
        //     "/spline-3d/lego-scene.splinecode";
        spline.load(splineUrl);
    });

    // make sure you have a canvas in the body
</script>

<canvas id="c-lego"></canvas>

<style>
    #c-lego {
        width: 100%;
        height: 100vh;
        display: block;
    }
</style>
