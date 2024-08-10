<script>
  import CreativeNarrativeBlock from "../components/CreativeNarrativeBlock.svelte";
  import CreativeProcessSnippet from "../components/CreativeProcessSnippet.svelte";
</script>

<div class="content-container">
  <div class="creative-process-container1">
    <div class="creative-process-container">
      <img src="images/Rectangle-16.jpg" class="image-container" />
      <CreativeNarrativeBlock />
    </div>
    <div class="creative-process-container">
      <CreativeProcessSnippet />
      <img src="images/Rectangle-16-1.jpg" class="image-container" />
    </div>
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
