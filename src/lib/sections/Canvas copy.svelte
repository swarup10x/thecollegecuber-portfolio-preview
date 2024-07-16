<script>
    import { onMount } from "svelte";

    let canvas;
    let ctx;
    let drawing = false;
    let maxBrush = 35;
    let minBrush = 1;
    let brushSizeDiff = maxBrush - minBrush;

    let brushSize = maxBrush;
    let brushTimer;

    let canvasWidth;
    let canvasHeight;

    function startDrawing(event) {
        drawing = true;
        // brushSize = 5; // Start with brush size 5
        draw(event);
        startBrushSizeChange();
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath();
        clearInterval(brushTimer); // Stop changing brush size
    }

    function draw(event) {
        if (!drawing) return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = "black";

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function startBrushSizeChange() {
        let startTime = Date.now();

        brushTimer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const cycleDuration = 1000; // Total cycle duration (1000ms = 1s)
            const fastPhase = .35; // Fast phase duration (0.4 * 1000ms = 400ms)
            const slowPhase = 0.3; // Slow phase duration (0.2 * 1000ms = 200ms)

            // Determine the progress within the cycle (0 to 1)
            const progress = (elapsed % cycleDuration) / cycleDuration;

            if (progress <= fastPhase) {
                // Fast increase during the first 400ms
                brushSize = minBrush + brushSizeDiff * (progress / fastPhase);
            } else if (
                progress > fastPhase+slowPhase
            ) {
                const fastDecreaseProgress =
                    (progress - (fastPhase + slowPhase)) / fastPhase;
                brushSize = maxBrush - brushSizeDiff * fastDecreaseProgress;
                // Slow down the increase during the next 200ms
                
            } else {
                if (progress <= fastPhase+slowPhase/2) {
        
                brushSize = minBrush + brushSizeDiff * (progress / fastPhase);
            } else {
                const fastDecreaseProgress =
                    (progress - (fastPhase + slowPhase)) / fastPhase;
                brushSize = maxBrush - brushSizeDiff * fastDecreaseProgress;
          
                
            }
            } 
        }, 16); // Adjust brush size every 16ms (~60fps)
    }
    function updateCanvasSize() {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
    }
    onMount(() => {
        updateCanvasSize();
        ctx = canvas.getContext("2d");
        window.addEventListener("resize", updateCanvasSize);
    });
</script>

<canvas
    bind:this={canvas}
    width={canvasWidth}
    height={canvasHeight}
    on:mousedown={startDrawing}
    on:mousemove={draw}
/>

<style>
    canvas {
        border: 1px solid black;
    }
</style>
