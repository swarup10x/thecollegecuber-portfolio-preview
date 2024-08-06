<script>
    import PortfolioItem from "../components/PortfolioItem.svelte";

</script>
<div id="work" class="work-grid">
    <PortfolioItem src="images/Rectangle-15.jpg"/>
    <PortfolioItem src="images/Rectangle-15-1.jpg"/>
    <PortfolioItem src="images/Rectangle-15-2.jpg"/>
    <PortfolioItem src="images/Rectangle-15-3.jpg"/>
    
</div>

<style>
    @media screen and (max-width: 479px) {
        .work-grid {
            padding-right: 5%;
            padding-left: 5%;
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
        }
    }
    .work-grid {
        display: -ms-grid;
        display: grid;
        padding-top: 1%;
        padding-right: 2%;
        padding-left: 2%;
        grid-auto-columns: 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        -ms-grid-rows: auto auto;
        grid-template-rows: auto auto;
        padding-bottom: 100px;
    }

</style>
