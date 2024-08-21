<script>
    import { onMount } from "svelte";
    import { fly, scale } from "svelte/transition";
    import {
        quintOut,
        linear,
        cubicInOut,
        circOut,
        cubicOut,
        cubicIn,
        bounceIn,
        bounceInOut,
        sineInOut,
        elasticInOut,
    } from "svelte/easing";
    import EventTextAnimation from "./EventTextAnimation.svelte";

    let eventImagesSrc = [
        "channels4_profile-photoaidcom-cropped-qmv69c10lawzf6ywzqmymdsm9rxnspddteci2m0wyw.png",
        "download-1-photoaidcom-cropped-qmv6yx6umxxzh1svkstchxccfdtdc2yc01ocds33l4.png",
        "download-2-photoaidcom-cropped-qmv71k4jt7jy1nyz6funzrdwfatfxif813kduq6c4o.png",
        "download-3-photoaidcom-cropped-qmv6yy4otrz9snrifb7z2f3t0roqjs22c6btv21pew.png",
        "download-4-photoaidcom-cropped-qmv7086s4nqbljwlyd4oylhe4ndq0y4wuiamdm5ey0.png",
        "download-photoaidcom-cropped-qmv6omufu7v0eoqtncqc7isqdkir3c4394n1arc7oo.png",
        "jbPuTCHf_400x400-photoaidcom-cropped-qmv6onsa11waqapghv4ys0k6yye4b17tl9ais1atig.png",
        "mlb-world-baseball-classic-favicon-photoaidcom-cropped-qmv6onsa11waqapghv4ys0k6yye4b17tl9ais1atig.png",
        "premierleague-1024x1024-photoaidcom-cropped-qmv6opnyepyvdimq6vy7x0345q4uqffa9ilhql8160.png",
        "Screenshot_2024-04-17_at_73628_PM-removebg-preview-photoaidcom-cropped-qmv6otfb6240nyh9kxkq6z4yj9mbl7u7m17fnp2gh4.png",
        "Screenshot_2024-04-17_at_73652_PM-removebg-preview-photoaidcom-cropped-qmv6oud5cw5azkfwffzcrgwf4nhoswxxy5ux4z12aw.png",
        "square-photoaidcom-cropped-qmv6orjmse1g0qjzvwrh1zm1chvl5tmqxrwgp558tk.png",
    ];

    let scrollContainer;
    let lastMouseX;
    function handleMouseMove(e) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;

        if (lastMouseX) {
            if (mouseX > lastMouseX) {
                scrollContainer.scrollLeft -= mouseX - lastMouseX;
            } else {
                scrollContainer.scrollLeft += lastMouseX - mouseX;
            }
        }

        lastMouseX = mouseX;
    }

    function handleMouseEnter(e) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        lastMouseX = mouseX;
    }

    const eventNames = [
        "Sporting Events",
        "Influencer Marketing",
        "Product Marketing",
        "Corporate Events",
        "College Events",
        "Weddings",
        "Bar Mitzvahs",
        "Music Festivals",
        "Art Festivals",
        "Food Festivals",
        "Any Event!",
    ];

    var currentIndex = 0;
    var currentEvent = eventNames[currentIndex];
    var uniqueKey = crypto.randomUUID();

    function updateEvent() {
        console.log("updating event");

        currentIndex++;
        if (currentIndex >= eventNames.length) currentIndex = 0;
        currentEvent = eventNames[currentIndex];
        console.log("currentEvent", currentEvent, currentIndex);
        uniqueKey = crypto.randomUUID();
    }

    onMount(() => {
        setInterval(updateEvent, 3000);
    });
</script>

<div class="event-card-container">
    <div class="event-card-container1">
        <div class="event-description-container">
            <div class="event-card">
                <p class="event-title-text-style">Perfect for<br /></p>
                <!-- <EventTextAnimation /> -->
                <div class="animated-text-wrapper">
                    {#key uniqueKey}
                        <p
                            in:fly={{
                                delay: 200,
                                duration: 700,

                                // start: 0.7,
                                y:40,
                                opacity: 0,

                                easing: elasticInOut,
                            }}
                            out:fly={{
                                delay: 0,
                                duration: 400,

                                // start: 0.4,
                                y:-25,
                                opacity: 0,

                                easing: cubicOut,
                            }}
                            class="event-title-text-style1"
                        >
                            {currentEvent}
                        </p>
                    {/key}
                </div>
            </div>
        </div>
        <div class="vertical-image-gallery">
            <div
                class="horizontal-image-gallery"
                bind:this={scrollContainer}
                on:mousemove={handleMouseMove}
                on:touchmove={handleMouseMove}
                on:mouseenter={handleMouseEnter}
                on:touchstart={handleMouseEnter}
            >
                {#each eventImagesSrc as imgSrc}
                    <img
                        src={"/events-logo/" + imgSrc}
                        class="image-container-grid"
                    />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .animated-text-wrapper {
        height: 50px;
        display: grid;
        place-items: center;
        margin: 30px 0;
    }
    .event-card-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        /* max-width: 90vw; */
        background: white;
        /* min-width: 340px; */
    }
    .event-card-container1 {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
    }
    .event-description-container {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .event-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-width: 360px;
    }
    .event-title-text-style {
        box-sizing: border-box;
        flex: 0 0 auto;
        max-width: 118px;
        padding: 0;
        margin: 0;
        font:
            700 22px/22px Inter,
            sans-serif;
        color: #444444;
        text-align: left;
    }
    .event-title-text-style1 {
        padding: 0;
        margin: 0;

        font:
            600 36px Inter,
            sans-serif;
        color: #b71234;
    }
    .vertical-image-gallery {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20px;
    }
    .horizontal-image-gallery {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        gap: 90px;
        align-items: center;
        justify-content: space-between;
        max-width: 1050px;
        width: 100%;
        overflow-x: scroll;
    }

    .horizontal-image-gallery::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    .image-container-grid {
        box-sizing: border-box;
        display: block;
        width: 100px;
        max-width: initial;
        height: 100px;
        border: none;
        object-fit: cover;
    }
    @media screen and (max-width: 1100px) {
        .horizontal-image-gallery {
            max-width: 90vw;
        }
    }

    @media screen and (max-width: 500px) {
        .horizontal-image-gallery {
            max-width: 100vw;
        }
        .image-container-grid {
            width: 80px;

            height: 80px;
        }
        .horizontal-image-gallery {
            gap: 60px;
        }
        .event-title-text-style {
            font-size: 24px;
            min-width: 360px;
            text-align: center;
        }
        .event-title-text-style1 {
            font-size: 30px;
            min-width: 360px;
            text-align: center;
        }
    }
</style>
