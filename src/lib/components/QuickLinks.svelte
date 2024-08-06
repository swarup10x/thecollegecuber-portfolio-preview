<script>
    import LinkDisplay from "./LinkDisplay.svelte";

    let sectionTitlesArray = [
        { sectionTitle: "Portfolio", href:"/" },
        { sectionTitle: "Cube Art", href:"/cube-art"},
        { sectionTitle: "Lego Art", href:"/lego-art" },
        { sectionTitle: "Contact Us", href:"/contact-us" },
    ];
</script>

<div class="vertical-centered-section-list">
    {#each sectionTitlesArray as linkData}
        <LinkDisplay {linkData} />
    {/each}
</div>

<style>
    .vertical-centered-section-list {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        margin-top: 19px;
    }
</style>
