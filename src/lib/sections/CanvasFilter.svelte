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

    // function draw(event) {
    //     if (!drawing) return;

    //     ctx.lineWidth = brushSize;
    //     ctx.lineCap = "round";
    //     ctx.strokeStyle = "#EF233C";

    //     const rect = canvas.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     const y = event.clientY - rect.top;

    //     ctx.lineTo(x, y);
    //     ctx.stroke();
    //     ctx.beginPath();
    //     ctx.moveTo(x, y);
    // }

    function draw(event) {
        if (!drawing) return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#EF233C";

        const rect = canvas.getBoundingClientRect();
        let x, y;

        if (event.touches) {
            // Handle touch events
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        } else {
            // Handle mouse events
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        }

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

    function applyFilter() {
    // Get the image data from the canvas
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;

    // Define the new color (e.g., blue)
    const newColor = {
        r: 0,    // Red component
        g: 0,    // Green component
        b: 255   // Blue component
    };

    // Iterate through the pixel data
    for (let i = 0; i < data.length; i += 4) {
        // Check if the pixel is part of a drawn line (non-transparent)
        if (data[i + 3] > 0) {
            // Change the color of the pixel
            data[i] = newColor.r;     // Red
            data[i + 1] = newColor.g; // Green
            data[i + 2] = newColor.b; // Blue
            // Alpha channel (i + 3) remains unchanged
        }
    }

    // Put the modified image data back on the canvas
    ctx.putImageData(imageData, 0, 0);
}

function revertFilter() {
    // Get the image data from the canvas
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;

    // Define the original color (#EF233C)
    const originalColor = {
        r: 239,  // Red component
        g: 35,   // Green component
        b: 60    // Blue component
    };

    // Iterate through the pixel data
    for (let i = 0; i < data.length; i += 4) {
        // Check if the pixel is part of a drawn line (non-transparent)
        if (data[i + 3] > 0) {
            // Change the color of the pixel back to the original color
            data[i] = originalColor.r;     // Red
            data[i + 1] = originalColor.g; // Green
            data[i + 2] = originalColor.b; // Blue
            // Alpha channel (i + 3) remains unchanged
        }
    }

    // Put the modified image data back on the canvas
    ctx.putImageData(imageData, 0, 0);
}
</script>



<canvas
    bind:this={canvas}
    width={canvasWidth}
    height={canvasHeight}
    on:mouseenter={startDrawing}
    on:mousedown={clearCanvas}
    on:mousemove={draw}
    on:mouseleave={stopDrawing}
    on:touchstart={startDrawing}
    on:touchmove={draw}
    on:touchend={stopDrawing}
/>

<button class="filter-button" on:click={applyFilter}>Apply Filter</button>
<button class="revert-button" on:click={revertFilter}>revert Filter</button>

<style>
    canvas {
        /* border: 1px solid black; */
        width: 100%;
    }

    .filter-button {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .revert-button {
        position: fixed;
        top: 50px;
        right: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .filter-button:hover {
        background-color: #0056b3;
    }
</style>



