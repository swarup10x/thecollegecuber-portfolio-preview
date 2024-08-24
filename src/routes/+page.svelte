<script>
  import PortfolioHeader from "../lib/components/PortfolioHeader.svelte";
  import Canvas from "../lib/sections/Canvas.svelte";
  import CreativeProcessSection from "../lib/sections/CreativeProcessSection.svelte";
  import FooterSection from "../lib/sections/FooterSection.svelte";
  import HeroText from "../lib/sections/HeroText.svelte";
  import InfoSection from "../lib/sections/InfoSection.svelte";
  import PortfolioSection from "../lib/sections/PortfolioSection.svelte";
  import TestimonialsSection from "../lib/sections/TestimonialsSection.svelte";
  import TopbarSection from "../lib/sections/TopbarSection.svelte";

  export let data;
  console.log("pageData from +page.svelte",data)
</script>

<div class="wrapper">
  <section class="topbar-wrapper">
    <TopbarSection />
  </section>
  <main>
    <HeroText {data}/>
  </main>

  <section class="canvasWrapper">
    <Canvas />
  </section>
  <section class="others">
    <PortfolioHeader />


    <PortfolioSection {data}/>
    <PortfolioHeader title="Info" />
    <InfoSection {data}/>
    <PortfolioHeader title="Creative Process" />
    <CreativeProcessSection {data}/>
    <PortfolioHeader title="Testimonials" />
    <TestimonialsSection {data}/>
    <FooterSection {data}/>
  </section>
</div>

<style>
  :global(body) {
    background-color: #0a100d;
  }
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: #0a100d;
  }
  .topbar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
  }
  main {
    position: absolute;
    top: 100px;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  .others {
    z-index: 100;
    position: absolute;
    top: 100vh;
    left: 0;
    height: 100vh;
    width: 100%;
  }


  .canvasWrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }



  @media screen and (max-width: 600px) {
    main{
      padding-left: 12px;
      width: calc(100% - 12px);
    }
  }
</style>
