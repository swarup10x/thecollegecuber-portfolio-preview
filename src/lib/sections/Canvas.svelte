<script>
    import { onMount } from "svelte";

    let canvas;
    let ctx;
    let drawing = false;
    let maxBrush = 45;
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
        ctx.strokeStyle = "#EF233C";

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }


    function startBrushSizeChange() {
    let startTime = Date.now();

    brushTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const cycleDuration = 1000; // Total cycle duration (1000ms = 1s)
        const holdDuration = 200; // Hold at maxBrush duration (500ms)
        const transitionDuration = 400; // Transition duration (250ms each for increase and decrease)

        // Determine the progress within the cycle (0 to 1)
        const progress = (elapsed % cycleDuration) / cycleDuration;

        if (progress <= holdDuration / cycleDuration) {
            // Hold at maxBrush for 500ms
            brushSize = maxBrush;
        } else if (progress <= (holdDuration + transitionDuration) / cycleDuration) {
            // Decrease quickly in the next 250ms
            const decreaseProgress = (progress - holdDuration / cycleDuration) / (transitionDuration / cycleDuration);
            brushSize = maxBrush - brushSizeDiff * decreaseProgress;
        } else {
            // Increase quickly in the last 250ms
            const increaseProgress = (progress - (holdDuration + transitionDuration) / cycleDuration) / (transitionDuration / cycleDuration);
            brushSize = minBrush + brushSizeDiff * increaseProgress;
        }
    }, 16);
}

    function updateCanvasSize() {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
    }

    function scaleCanvasOnScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScale = 1.3; // Maximum scale factor
        const minScale = 1; // Minimum scale factor
        const scaleFactor = minScale + (maxScale - minScale) * (scrollTop / (document.body.scrollHeight - window.innerHeight));
        canvas.style.transform = `scale(${scaleFactor})`;
    }

    onMount(() => {
        updateCanvasSize();
        ctx = canvas.getContext("2d");
        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("scroll", scaleCanvasOnScroll);
        
    });
</script>

<canvas
    bind:this={canvas}
    width={canvasWidth}
    height={canvasHeight}
    on:mouseenter={startDrawing}
    on:mousedown={clearCanvas}
    on:mousemove={draw}
    on:mouseleave={stopDrawing}
/>

<style>
    canvas {
        /* border: 1px solid black; */
        width: 100%;
    }
</style>
