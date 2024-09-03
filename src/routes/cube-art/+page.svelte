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
    import SplineRubiksCubeAnimation from "../../lib/animations-3d/SplineRubiksCubeAnimation.svelte";
    import PerfectForEventSection from "../../lib/art-sections/PerfectForEventSection.svelte";

    let videoSrc =
        "https://thecollegecuber.com/wp-content/uploads/2024/04/cb2da6c2-d51a-4355-85ae-57d4d750d773.mp4";
    let howItWorks =
        "My main aim as an artist is to create a super interactive and enjoyable art experience for everyone present. When guests arrive, they will be greeted with a piece of art that’s still being made. Their job is to help add the next cubes to the artwork. Once they do it successfully, they become official artists. All artists need to sign their artwork, so I collect signatures from all my new artists on the frame of the artwork. By the end of the event, I’ve made hundreds of new friends that helped me create a one-of-a-kind piece of art!";
    let artType = "Cube";

    export let data;
    console.log(data)
</script>


<div class="wrapper">
    <TopbarSection />

    <div class="main-wrapper">
        <div class="canvas-wrapper">
            <!-- <LegoCanvasAnimation /> -->
            <SplineRubiksCubeAnimation />
        </div>
        <div class="front-view-wrapper">
            <FrontView landingText={data.page.cubeArt.landingText}/>
        </div>
    </div>

     <HowItWorks data={data} videoSrc={data.page.cubeArt.videoSrc} howItWorks={data.page.cubeArt.howItWorks} {artType}/>


    <div class="mid-section">
        <FaqSection faqs={data.page.cubeArt.faqs}/>
        <WorkInfo title={data.page.cubeArt.workInfoTitle} description={data.page.cubeArt.workInfoDescription} {data}/>
    </div>

    <div class="events-list">
        <PerfectForEventSection />
    </div>

    <OurPackages whatIDO={data.page.cubeArt.whatIDO} services={data.page.cubeArt.services}/>

    <OurStory ourStoryImage={data.page.cubeArt.ourStoryImage} story={data.page.cubeArt.ourStory}/>

    <FooterSection {data}/>
</div>

<style>
    .events-list {
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
