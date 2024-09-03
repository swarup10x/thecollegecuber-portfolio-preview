<script>
    import FaqSection from "../../lib/art-sections/FAQSection.svelte";
    import FrontView from "../../lib/art-sections/FrontView.svelte";
    import HowItWorks from "../../lib/art-sections/HowItWorks.svelte";
    import OurPackages from "../../lib/art-sections/OurPackages.svelte";
    import OurStory from "../../lib/art-sections/OurStory.svelte";
    import SlicedImages from "../../lib/art-sections/SlicedImages.svelte";
    import WorkInfo from "../../lib/art-sections/WorkInfo.svelte";
    import TopbarSection from "../../lib/sections/TopbarSection.svelte";
    import FooterSection from "../../lib/sections/FooterSection.svelte";
    import SplineLegoAnimation from "../../lib/animations-3d/SplineLegoAnimation.svelte";
    import PerfectForEventSection from "../../lib/art-sections/PerfectForEventSection.svelte";

   
    let artType="Brick"

    export let data;
    console.log(data)
</script>

<div class="wrapper">
    <TopbarSection />

    <div class="main-wrapper">
        <div class="canvas-wrapper">
            <!-- <LegoCanvasAnimation /> -->
             <SplineLegoAnimation/>
        </div>
        <div class="front-view-wrapper">
            <FrontView landingText={data.page.legoArt.landingText}/>
        </div>
    </div>
    
    <HowItWorks data={data} videoSrc={data.page.legoArt.videoSrc} howItWorks={data.page.legoArt.howItWorks} {artType}/>
    <!-- <SlicedImages gridImageSrc={data.page.legoArt.gridImageSrc}/> -->

    <div class="mid-section">
        <FaqSection faqs={data.page.legoArt.faqs}/>
        <WorkInfo title={data.page.legoArt.workInfoTitle} description={data.page.legoArt.workInfoDescription} {data}/>
        <!-- <SlicedImages gridImageSrc={data.page.legoArt.gridImageSrc}/> -->
    </div>
    
    <div class="events-list">
        <PerfectForEventSection/>
    </div>

    <OurPackages whatIDO={data.page.legoArt.whatIDO} services={data.page.legoArt.services}/>

    <OurStory ourStoryImage={data.page.legoArt.ourStoryImage} story={data.page.legoArt.ourStory}/>

    <FooterSection {data}/>
</div>

<style>
    .events-list{
        margin-bottom: 140px;
        margin-top: 60px;
    }
    .main-wrapper {
        height: 100vh;
    }

    .canvas-wrapper {
        z-index: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0%;
    }

    .wrapper {
        background-color: white;
    }

    .mid-section {
        padding: 100px;
        display: grid;
        gap: 100px;
        place-items: center;
    }

    @media screen and (max-width: 1280px) {
        .mid-section {
            padding: 100px 40px;
        }
    }

    @media screen and (max-width: 500px) {
        .mid-section {
            padding: 100px 12px;
        }
    }
</style>
