<script>
  import CreativeNarrativeBlock from "../components/CreativeNarrativeBlock.svelte";
  import CreativeProcessSnippet from "../components/CreativeProcessSnippet.svelte";

  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { inview } from "svelte-inview";

  export let data;
  
    let image1=data.page.creativeProcess.image1
    let image2=data.page.creativeProcess.image2
    let narrative1=data.page.creativeProcess.narrative1
    let narrative2=data.page.creativeProcess.narrative2

  let isInView;
  const options = {};

  function changeInview(event) {
    const { inView } = event.detail;
    isInView = inView;
    console.log("let isInView: boolean;", isInView);
  }
</script>

<div
  use:inview={options}
  on:inview_change={changeInview}
  class="content-container"
>
  <div class="creative-process-container1">
    {#if isInView}
      <div
        transition:fly={{
          delay: 350,
          duration: 650,
          y: 100,
          opacity: 0.5,
          easing: quintOut,
        }}
        class="creative-process-container"
      >
        <img src={image1} class="image-container" />
        <CreativeNarrativeBlock {narrative1}/>
      </div>
      <div class="creative-process-container">
        <CreativeProcessSnippet {narrative2}/>
        <img src={image2} class="image-container" />
      </div>
    {/if}
  </div>
</div>

<style>
  .content-container {
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
  }
  .creative-process-container1 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 1144px;
    padding-top: 171px;
    padding-bottom: 171px;
  }
  .creative-process-container {
    box-sizing: border-box;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    max-width: 572px;
  }
  .image-container {
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    max-width: initial;
    height: 426px;
    border: none;
    object-fit: cover;
  }

  @media screen and (max-width: 1120px) {
    .creative-process-container1 {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 640px) {
    .image-container {
      height: 326px;
    }

    .creative-process-container1 {
      padding-top: 72px;
    }
  }

  @media screen and (max-width: 480px) {
    .image-container {
      height: 200px;
    }

    .content-container {
      padding-left: 0;
    }
  }
</style>
