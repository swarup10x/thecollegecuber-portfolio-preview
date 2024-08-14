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
</script>

<div class="wrapper">
    <TopbarSection />

    <div class="main-wrapper">
        <div class="canvas-wrapper">
            <!-- <CubeCanvasAnimation /> -->
            <SplineLegoAnimation/>
        </div>
        <div class="front-view-wrapper">
            <FrontView />
        </div>
    </div>

    <HowItWorks />

    <div class="mid-section">
        <FaqSection />
        <WorkInfo />
        <SlicedImages />
    </div>

    <OurPackages />

    <OurStory />

    <FooterSection />
</div>

<style>
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
