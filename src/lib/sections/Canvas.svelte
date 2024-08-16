<script>
    import { onDestroy, onMount } from "svelte";

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

    let filterApplied=false

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
            } else if (
                progress <=
                (holdDuration + transitionDuration) / cycleDuration
            ) {
                // Decrease quickly in the next 250ms
                const decreaseProgress =
                    (progress - holdDuration / cycleDuration) /
                    (transitionDuration / cycleDuration);
                brushSize = maxBrush - brushSizeDiff * decreaseProgress;
            } else {
                // Increase quickly in the last 250ms
                const increaseProgress =
                    (progress -
                        (holdDuration + transitionDuration) / cycleDuration) /
                    (transitionDuration / cycleDuration);
                brushSize = minBrush + brushSizeDiff * increaseProgress;
            }
        }, 16);
    }

    function updateCanvasSize() {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
    }

    function updateCanvasOnScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScale = 1.3; // Maximum scale factor
        const minScale = 1; // Minimum scale factor
        const scaleFactor =
            minScale +
            (maxScale - minScale) *
                (scrollTop / (document.body.scrollHeight - window.innerHeight));
        canvas.style.transform = `scale(${scaleFactor})`;

        if(window.scrollY > window.innerHeight){
            // console.log('scaleFactor',scaleFactor)
            if(scaleFactor< 1.05){
                applyFilter({r: 0,g: 0,b: 255})
            }else if(scaleFactor<1.1){
                applyFilter({r: 0,g: 255,b: 0})
            }else if(scaleFactor<1.15){
                applyFilter({r: 0,g: 255,b: 255})
            }else if(scaleFactor<1.2){
                applyFilter({r: 255,g: 255,b: 0})
            }else if(scaleFactor<1.25){
                applyFilter({r: 255,g: 0,b: 255})
            }else if(scaleFactor<1.3){
                applyFilter({r: 55,g: 155,b: 255})
            }
        }else{
            if(filterApplied){
                revertFilter()
            }
        }
    }

    onMount(() => {
 
        updateCanvasSize();
        ctx = canvas.getContext("2d");
        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("scroll", updateCanvasOnScroll);

        return  () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("scroll", updateCanvasOnScroll);
        };
    });



    function applyFilter(color) {
        // Get the image data from the canvas
        const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        const data = imageData.data;

        // Define the new color (e.g., blue)
        const newColor = color;

        // Iterate through the pixel data
        for (let i = 0; i < data.length; i += 4) {
            // Check if the pixel is part of a drawn line (non-transparent)
            if (data[i + 3] > 0) {
                // Change the color of the pixel
                data[i] = newColor.r; // Red
                data[i + 1] = newColor.g; // Green
                data[i + 2] = newColor.b; // Blue
                // Alpha channel (i + 3) remains unchanged
            }
        }

        // Put the modified image data back on the canvas
        ctx.putImageData(imageData, 0, 0);
        filterApplied=true
    }

    function revertFilter() {
        // Get the image data from the canvas
        const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        const data = imageData.data;

        // Define the original color (#EF233C)
        const originalColor = {
            r: 239, // Red component
            g: 35, // Green component
            b: 60, // Blue component
        };

        // Iterate through the pixel data
        for (let i = 0; i < data.length; i += 4) {
            // Check if the pixel is part of a drawn line (non-transparent)
            if (data[i + 3] > 0) {
                // Change the color of the pixel back to the original color
                data[i] = originalColor.r; // Red
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

<style>
    canvas {
        /* border: 1px solid black; */
        width: 100%;
    }
</style>
