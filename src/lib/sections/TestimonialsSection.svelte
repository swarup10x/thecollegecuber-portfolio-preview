<script>
    import { fly } from "svelte/transition";
    import { quintOut,linear } from "svelte/easing";
    import { onMount } from "svelte";
    import { inview } from "svelte-inview";

    import CircularSelector from "../components/CircularSelector.svelte";
    import ReviewItem from "../components/ReviewItem.svelte";

    export let data;
    console.log("pageData from testimonial",data)
    let testimonialHeading=data.page.testimonial.heading
    let testimonialOverview=data.page.testimonial.overview
    


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



    let reviews=data.page.testimonial.reviews

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
            <p class="testimonial-heading">{testimonialHeading}</p>
            <p class="artist-quote">
                {testimonialOverview}
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
        background-color: #0a100d;
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
