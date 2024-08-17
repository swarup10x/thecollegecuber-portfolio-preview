<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let titleChars = writable([]);

    const colors = [
        "titleGreen",
        "titleRed",
        "titleOrange",
        "titleYellow",
        "titleWhite",
    ];

    function setTitle() {
        const title = "CollegeCuber";
        titleChars.set(
            title.split("").map((char) => ({
                char,
                color: colors[Math.floor(Math.random() * colors.length)],
            })),
        );
    }

    onMount(() => {
        setTitle(); // Set initial title
        const interval = setInterval(setTitle, 500);

        return () => clearInterval(interval); // Clean up on component unmount
    });
</script>

<a id="aLogo" class="navbar-brand" href="/">
    {#each $titleChars as { char, color }}
        <span class={color}>{char}</span>
    {/each}
</a>

<style>
    a.navbar-brand {
        white-space: normal;
        text-align: center;
        word-break: break-all;
    }

    span{
        font-size: 18px;;
    }

    a {

        all: unset;
        color: #0366d6;
    }

    .titleGreen {
        background-color: #08a139;
        color: white;
    }
    .titleRed {
        background-color: #e20613;
        color: white;
    }
    .titleOrange {
        background-color: #ee7d05;
        color: white;
    }
    .titleYellow {
        background-color: #ffe004;
        color: black;
    }
    .titleWhite {
        background-color: #ffffff;
        color: black;
    }
</style>
