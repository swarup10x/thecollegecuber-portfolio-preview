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

    let videoSrc="https://thecollegecuber.com/wp-content/uploads/2024/05/US-Open-LEGO.mp4"
    let howItWorks="My ultimate goal as an artist is to craft an insanely interactive and thrilling journey for everyone involved. As soon as guests step in, they&apos;ll be met with the mesmerizing sight of an art piece in progress. Each attendee will be handed their very own unique design card and tasked with bringing it to life on their baseplate, using any colors they need! Once they&apos;ve nailed it, they get to proudly add their creation to the evolving masterpiece! And guess what? They&apos;re not just participants, they&apos;re official artists, complete with the honor of signing the art frame! By the end of the event, we&apos;ll have bonded, laughed, and collaborated to create something truly extraordinary. Hundreds of new friendships formed, all in the name of art! Let&apos;s make memories and masterpieces together!"
    let artType="Brick"
</script>

<div class="wrapper">
    <TopbarSection />

    <div class="main-wrapper">
        <div class="canvas-wrapper">
            <!-- <LegoCanvasAnimation /> -->
             <SplineLegoAnimation/>
        </div>
        <div class="front-view-wrapper">
            <FrontView type="LEGO"/>
        </div>
    </div>

    <HowItWorks {videoSrc} {howItWorks} {artType}/>

    <div class="mid-section">
        <FaqSection />
        <WorkInfo />
        <SlicedImages />
    </div>
    
    <div class="events-list">
        <PerfectForEventSection/>
    </div>

    <OurPackages />

    <OurStory />

    <FooterSection />
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
