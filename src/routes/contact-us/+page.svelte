<script>
    import CalendarSection from "../../lib/contact-us-sections/CalendarSection.svelte";
import FrontContactUs from "../../lib/contact-us-sections/FrontContactUs.svelte";
    import VideoSection from "../../lib/contact-us-sections/VideoSection.svelte";
    import FooterSection from "../../lib/sections/FooterSection.svelte";
    import TopbarSection from "../../lib/sections/TopbarSection.svelte";

    export let data
    console.log('data from contact-us',data)
</script>

<div class="wrapper">

<TopbarSection/>
<FrontContactUs {data}/>

<CalendarSection/>


<VideoSection/>


<FooterSection {data}/>

</div>


<style>
    .wrapper{
        background-color: white;
    }
</style>