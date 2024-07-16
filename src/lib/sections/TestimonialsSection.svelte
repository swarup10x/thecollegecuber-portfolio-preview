<script>
    import CircularSelector from "../components/CircularSelector.svelte";
import ReviewItem from "../components/ReviewItem.svelte";
</script>

<div class="content-wrapper">
    <div class="testimonial-container">
        <p class="testimonial-heading">What they have to say</p>
        <p class="artist-quote">
            An artist inherently appreciates their own creations, but the most
            remarkable experience is when others wholeheartedly endorse their
            work.
        </p>

        <button class="primary-button">Contact Us</button>
    </div>
    <div class="testimonial-container1">
        <div class="team-tweet-card">
            <ReviewItem />
            <ReviewItem />
        </div>
        <div class="center-image-container">
            <CircularSelector selected={true}/>
            <CircularSelector/>
            <CircularSelector/>
            <CircularSelector/>
        </div>
    </div>
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
        align-items: stretch;
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
</style>
