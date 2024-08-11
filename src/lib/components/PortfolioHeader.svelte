<script>
    export let title = "Portfolio";
</script>

<div class="portfolio-container">
    <div class="portfolio-section">
        <p class="portfolio-title">{title}</p>
    </div>
</div>

<style>
    .portfolio-container {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border-top: 1px solid #656b6a;
        border-bottom: 1px solid #656b6a;
    }
    .portfolio-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .portfolio-title {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:400 6vw Inter,sans-serif;
        color: white;
    }


</style>
