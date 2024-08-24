<script>
    import { onMount } from "svelte";
    import LetterAnimation from "../components/LetterAnimation.svelte";

    export let data;
    let letterAnimation1 = data.page.letterAnimation.letter1
    let letterAnimation2 = data.page.letterAnimation.letter2
    let letterAnimation3 = data.page.letterAnimation.letter3
    let visible = false;

    function toggleVisibility() {
        visible = !visible;
    }

    onMount(() => {
        toggleVisibility();
    });
</script>

<div>
    {#if visible}
        <div class="text-box">
            <LetterAnimation text={letterAnimation1} />
        </div>

        <div class="text-box">
            <LetterAnimation text={letterAnimation2} duration="1200" />
        </div>

        <div class="text-box">
            <LetterAnimation text={letterAnimation3} duration="1400" />
        </div>
    {/if}
</div>

<style>
    .text-box {
        /* height: 90px; */
        overflow: hidden; /* Ensures that overflowing content is hidden */
        display: flex;
        color: white;
    }
</style>
