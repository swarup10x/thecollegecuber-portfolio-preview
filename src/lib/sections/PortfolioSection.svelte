<script>
    import { onMount, onDestroy } from "svelte";
    import { linear, quintOut } from "svelte/easing";
    import { blur, crossfade, fade, fly, scale } from "svelte/transition";

    export let data;
    let allPortfolios = data.page.portfolios;
    let src = allPortfolios[0].src;
    let currentIndex = 0;

    let observer;

    onMount(() => {
        console.log("Component mounted");
        console.log("Initial portfolios:", allPortfolios);

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index, 10);
                    console.log("Item intersecting:", index);
                    if (index !== currentIndex) {
                        currentIndex = index;
                        src = allPortfolios[index].src;
                        console.log("Updated src:", src);
                    }
                }
            });
        }, options);

        const elements = document.querySelectorAll(".work-item-wrapper");
        elements.forEach((el, index) => {
            el.dataset.index = index;
            observer.observe(el);
            console.log("Observing element:", index);
        });
    });

    onDestroy(() => {
        if (observer) {
            observer.disconnect();
        }
    });
</script>

<div class="portfolio-pagination">
    <div class="image-box-wrapper">
        <div class="image-wrapper">
            {#key src}
                <img
                    class="portfolio-image"
                    {src}
                    alt=""
                />
                <!-- <img
                    transition:scale={{
                        duration: 500,
                        easing: linear,
                    }}
                    class="portfolio-image"
                    {src}
                    alt=""
                /> -->
            {/key}
        </div>
    </div>
    <div class="description-wrapper">
        {#each allPortfolios as portfolio, index}
            <div class="work-item-wrapper w-inline-block" data-index={index}>
                <div class="item-title">{portfolio.title}</div>
                <div class="item-description">{portfolio.description}</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .description-wrapper {
        display: flex;
        flex-direction: column;
        gap: calc(100vh - 150px);
    }
    .portfolio-image {
        object-fit: contain;
        width: 280px;
        height: 280px;
    }
    .image-wrapper {
        width: 300px;
        height: 300px;
        display: grid;
        place-items: center;
        background-color: black;
        border-radius: 4px;
    }
    .image-box-wrapper {
        position: sticky;
        top: calc(50vh - 150px);

        height: 300px;
    }
    .item-title {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        margin-top: 7px;
        font:
            400 18px Inter,
            sans-serif;
        color: white;
        width: 100%;
    }
    .item-description {
        font:
            400 14px Inter,
            sans-serif;
        color: rgb(209, 209, 209);
    }

    .work-item-wrapper {
        margin-top: 50px;
        /* height: 100vh; */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #edf2f4;
        text-decoration: none;
        overflow: hidden; /* Ensure the image doesn't overflow */
        width: 300px;
        display: flex;
        gap: 20px;
    }

    .portfolio-pagination {
        display: flex;
        padding-bottom: 100px;
        position: relative;
        background-color: #0a100d;
        justify-content: center;
        flex-direction: row-reverse;
        gap: 40px;
    }

    @media screen and (max-width: 720px) {
        .image-box-wrapper {
            top: 0;
        }

        .portfolio-pagination {
            flex-direction: column;
            align-items: center;
        }
        .description-wrapper {
            display: flex;
            flex-direction: column;
            gap: calc(100vh - 400px);
        }
    }
</style>
