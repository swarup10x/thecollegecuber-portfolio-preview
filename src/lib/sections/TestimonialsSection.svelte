<script>
    import { fly } from "svelte/transition";
    import { quintOut,linear } from "svelte/easing";
    import { onMount } from "svelte";
    import { inview } from "svelte-inview";

    import CircularSelector from "../components/CircularSelector.svelte";
    import ReviewItem from "../components/ReviewItem.svelte";

    onMount(() => {
        console.log("review mounted");
    });

    let isInView;
    const options = {};

    function changeInview(event) {
        const { inView, entry, scrollDirection, observer, node } = event.detail;
        isInView = inView;
        console.log("let isInView: boolean;", isInView);
    }

    let reviews = [
        {
            fullName: "New York Jets",
            shortName: "@nyjets",
            logoSrc: "images/reviews/image_2d2546ce.png",
            quote: "The College Cuber is CRAZY! 🤯",
        },
        {
            fullName: "Detroit Tigers",
            shortName: "@tigers",
            logoSrc:
                "images/reviews/800px-Detroit_Tigers_Insigniasvg-photoaidcom-cropped.png",
            quote: "This Miggy portrait is awesome! 🤯",
        },
        {
            fullName: "New York Knicks",
            shortName: "@nyknicks",
            logoSrc:
                "images/reviews/New_York_Knicks_logosvg-photoaidcom-cropped.png",
            quote: "Hometown kid put a masterpiece together! 🤯",
        },
        {
            fullName: "Detroit Red Wings",
            shortName: "@detroitredwings",
            logoSrc:
                "images/reviews/detroit-red-wings-logo-photoaidcom-cropped.png",
            quote: "Well this is certainly the coolest thing you’ll see today. 🔥🔥🔥",
        },
        {
            fullName: "FC Barcelona",
            shortName: "@fcbarcelona",
            logoSrc: "images/reviews/802_fcbarcelona.jpg",
            quote: "😳 Insanely talented!\n💙❤️ Quin talent! | ¡Qué talento!\n🔝",
        },
        {
            fullName: "US Open",
            shortName: "@usopen",
            logoSrc: "images/reviews/channels4_profile-photoaidcom-cropped.png",
            quote: "The fun NEVER stops with The College Cuber! 🔥",
        },
    ];

    let selectorCount = parseInt(Math.ceil(reviews.length / 2));
    let selectorCountArray = Array.from(
        { length: selectorCount },
        (_, index) => index + 1,
    );

    console.log(selectorCountArray);

    let activeSelector = 1;
    $: activeReviews = reviews.slice(
        (activeSelector - 1) * 2,
        activeSelector * 2,
    );
</script>

<div
    class="content-wrapper"
    use:inview={options}
    on:inview_change={changeInview}
>
    {#if isInView}
        <div
            transition:fly={{
                delay: 250,
                duration: 600,
                x: -100,
                opacity: 0.5,
                easing: quintOut,
            }}
            class="testimonial-container"
        >
            <p class="testimonial-heading">What they have to say</p>
            <p class="artist-quote">
                An artist inherently appreciates their own creations, but the
                most remarkable experience is when others wholeheartedly endorse
                their work.
            </p>

            <button class="primary-button">Contact Us</button>
        </div>
        <div class="testimonial-container1">
            <div
                transition:fly={{
                    delay: 250,
                    duration: 600,
                    x: 100,
                    opacity: 0.5,
                    easing: quintOut,
                }}
                class="team-tweet-card"
            >
                {#each activeReviews as activeReview (activeReview.shortName)}
                    <div
                    in:fly={{
                        delay: 0,
                        duration: 750,
                        x: 150,
                        opacity: 0.1,
                        easing: linear,
                    }}

                    >
                        <ReviewItem review={activeReview} />
                    </div>
                {/each}
            </div>
            <div class="center-image-container">
                {#each selectorCountArray as selector}
                    <CircularSelector
                        selected={selector === activeSelector}
                        onClick={() => (activeSelector = selector)}
                    />
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .primary-button {
        all: unset;

        padding: 12px 28px;

        width: 153px;
        height: 46px;

        background: #b71234;
    }
    .content-wrapper {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 159px 119px 235px;
    }
    .testimonial-container {
        box-sizing: border-box;
        flex: 0 0 auto;
        width: 52.44%;
    }
    .testimonial-heading {
        padding: 0;
        margin: 0;
        font:
            500 32px Inter,
            sans-serif;
        color: #ebebeb;
    }
    .artist-quote {
        box-sizing: border-box;
        max-width: 472px;
        padding: 0;
        margin: 0;
        margin-top: 30px;
        font:
            400 18px Inter,
            sans-serif;
        color: #cacaca;
        text-align: left;
    }
    .primary-button {
        box-sizing: border-box;
        display: block;
        width: 153px;
        min-width: 153px;
        height: 46px;
        margin-top: 30px;
        font:
            500 18px Inter,
            sans-serif;
        color: white;
        cursor: pointer;
        background: #b71234;
        border: none;
    }
    .testimonial-container1 {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 47.56%;
        padding-top: 19.5px;
        padding-bottom: 19.5px;
        padding-left: 15px;
    }
    .team-tweet-card {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
    }
    .center-image-container {
        flex: 0 0 auto;
        align-self: center;
        margin-top: 16px;
        display: flex;
        gap: 18px;
    }
    .text-container {
        box-sizing: border-box;
        display: block;
        width: 104px;
        max-width: initial;
        height: 8px;
    }

    @media screen and (max-width: 1120px) {
        .content-wrapper {
            flex-direction: column;
        }
        .testimonial-container1 {
            width: auto;
        }
        .testimonial-container {
            width: auto;
        }
    }

    @media screen and (max-width: 740px) {
        .content-wrapper {
            padding: 60px 24px 235px;
        }
    }

    @media screen and (max-width: 580px) {
        .content-wrapper {
            padding: 60px 24px 235px;
        }

        .team-tweet-card {
            gap: 8px;
        }

        .testimonial-container1 {
            padding-left: 0;
        }
    }
</style>
