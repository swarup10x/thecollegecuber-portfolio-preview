<!-- src/LetterAnimation.svelte -->
<script>
    import { cubicOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    export let text = "";

    let letters = [];
    export let duration = 1000;

    onMount(() => {
        letters = text.split(/(?!$)/u);
        console.log(duration);
    });
</script>

<div>
    {#each letters as letter, index (index)}
        <span
            class="letter"
            in:fly={{
                y: 50,
                duration: duration,
                delay: (letters.length - index) * 20,
                easing: cubicOut,
            }}
        >
            {letter !== " " ? letter : "\u00A0"}
        </span>
    {/each}
</div>

<style>
    .letter {
        display: inline-block;
        font:
            400 80px Inter,
            sans-serif;
    }

    @media screen and (max-width: 1120px) {
        .letter {
            font-size: 56px;
        }
    }

    @media screen and (max-width: 720px) {
        .letter {
            font-size: 40px;
        }
    }

    @media screen and (max-width: 480px) {
        .letter {
            font-size: 24px;
        }
    }
</style>
