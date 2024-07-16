<script>
    import { onMount } from "svelte";
    import LetterAnimation from "../components/LetterAnimation.svelte";



    let visible = false;

    function toggleVisibility() {
        visible = !visible;
    }

    onMount(()=>{
        toggleVisibility()
    })
</script>

<style>
    .text-box {
        /* height: 90px; */
        overflow: hidden; /* Ensures that overflowing content is hidden */
        display: flex;
        color: white;
        
    }


</style>

<div>
    {#if visible}
    <div class="text-box">

            <LetterAnimation text="Live Performance Artist" />
   
    </div>

	    <div class="text-box">

            <LetterAnimation text="Based in Us" duration=1200/>

    </div>

		    <div class="text-box">
   
            <LetterAnimation text="Mosaic & Cube Art" duration=1400/>

    </div>
    {/if}
</div>
