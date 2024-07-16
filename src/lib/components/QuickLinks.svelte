<script>
    import LinkDisplay from "./LinkDisplay.svelte";

    let sectionTitlesArray = [
        { sectionTitle: "Portfolio" },
        { sectionTitle: "Cube Art" },
        { sectionTitle: "Brick Art" },
        { sectionTitle: "Contact Us" },
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
