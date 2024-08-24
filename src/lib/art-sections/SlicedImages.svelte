<script>
    import { onMount, onDestroy } from "svelte";

    let mainImage;
    const gridSize = 3;
    let isVisible = false;
    let imageBox;
    let imgGrid;
    let scrollY = 0;
    let startPosition = 0;
    let endPosition = 0;
    const scrollRange = 500; // Total scroll amount for the animation
    const iterations = 30; // Number of steps in the animation

    export let gridImageSrc

    onMount(() => {
        imgGrid = document.querySelectorAll(".imgGrid img");
        imageBox = document.getElementById("image-box");

        if (mainImage.complete) {
            sliceImage();
        } else {
            mainImage.onload = sliceImage;
        }

        calculatePositions();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", calculatePositions);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", calculatePositions);
        };
    });

    function calculatePositions() {
        const rect = imageBox.getBoundingClientRect();
        startPosition = rect.top + window.scrollY - window.innerHeight;
        endPosition = startPosition + scrollRange;
    }

    function handleScroll() {
        scrollY = window.scrollY;
        updateImageTransforms();
    }

    function updateImageTransforms() {
        if (scrollY < startPosition || scrollY > endPosition) return;

        const progress = (scrollY - startPosition) / scrollRange;

        imgGrid.forEach((imgElement, index) => {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;

            const initialTranslateX = (col - 1) * 60;
            const initialTranslateY = (row - 1) * 60;
            let initialRotateZ =
                index % 3 === 0 ? 30 : index % 3 === 1 ? -45 : 15;

            const currentTranslateX = initialTranslateX * (1 - progress);
            const currentTranslateY = initialTranslateY * (1 - progress);
            const currentRotateZ = initialRotateZ * (1 - progress);

            imgElement.style.transform = `
                translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0)
                rotateZ(${currentRotateZ}deg)
                scale3d(1, 1, 1)
            `;
        });
    }

    function sliceImage() {
        const imgWidth = mainImage.naturalWidth / gridSize;
        const imgHeight = mainImage.naturalHeight / gridSize;

        imgGrid.forEach((imgElement, index) => {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;

            // Create canvas element
            const canvas = document.createElement("canvas");
            canvas.width = imgWidth;
            canvas.height = imgHeight;

            const ctx = canvas.getContext("2d");

            // Draw sliced part of the image onto the canvas
            ctx.drawImage(
                mainImage,
                col * imgWidth,
                row * imgHeight,
                imgWidth,
                imgHeight,
                0,
                0,
                imgWidth,
                imgHeight,
            );

            // Set the image source of each grid cell
            imgElement.src = canvas.toDataURL("image/jpeg");

            // Dynamically add initial transform properties to the image elements
            const translateX = (col - 1) * 60; // Increased translation along X-axis
            const translateY = (row - 1) * 60; // Increased translation along Y-axis
            let rotateZ = index % 3 === 0 ? 30 : index % 3 === 1 ? -45 : 15;
            imgElement.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotateZ}deg) scale3d(1, 1, 1)`;
        });
    }
</script>

<img bind:this={mainImage} src={gridImageSrc} class="main-image"  crossOrigin="anonymous"/>

<div class="box">
    <div bind:this={imageBox} class="imgGrid" id="image-box">
        <img src="#" class="img1" />
        <img src="#" class="img2" />
        <img src="#" class="img3" />
        <img src="#" class="img4" />
        <img src="#" class="img5" />
        <img src="#" class="img6" />
        <img src="#" class="img7" />
        <img src="#" class="img8" />
        <img src="#" class="img9" />
    </div>
</div>

<style>
    .box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e4e4e4;
        overflow: hidden;
    }
    .imgGrid {
        margin: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 2px;
        width: 300px;
        height: 300px;
    }

    .main-image {
        display: none; /* Hide the original image */
    }

    .imgGrid img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
