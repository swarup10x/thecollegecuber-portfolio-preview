<script>
    import isEqual from "lodash.isequal";
    import CmsSidebar from "../../../../lib/components/CmsSidebar.svelte";

    export let data;

    console.log("data", data);

    let portfolioPage = JSON.parse(JSON.stringify(data.page));

    console.log("portfolioPage", portfolioPage);

    async function submit() {
        try {
            const response = await fetch("https://thecollegecuber.devconsort.com:3099/api/page", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ page: portfolioPage }),
            });
            data = JSON.parse(JSON.stringify(portfolioPage));
        } catch (error) {}
    }

    $: isUpdate = !isEqual(portfolioPage, data);

    $: console.log(isUpdate, "isUpdate");
</script>

<div class="page-wrapper">
    <CmsSidebar />
    <div class="submit-wrapper">
        <button
            class="action-button cancel"
            disabled={!isUpdate}
            on:click={() => (portfolioPage = data.page)}>cancel</button
        >
        <button
            on:click={submit}
            class="action-button submit"
            disabled={!isUpdate}>submit</button
        >
        <div></div>
    </div>
    <div class="edit-wrapper">
        <div class="wrapper">
            <div class="portfolio-cms">
                <h2>Others</h2>
                <div class="section">
                    <div>
                        <label for="footerHeader">Footer Header</label>
                        <input
                            id="footerHeader"
                            bind:value={portfolioPage.others.footerHeader}
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        font-family: Inter;
    }
    .edit-wrapper {
        margin-left: 100px;  
      margin-bottom: 10px;
    }
    .page-wrapper {
        display: flex;
    }

    .action-button {
        padding: 6px 12px;
        margin: 4px;
    }
    .submit-wrapper {
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        justify-content: end;
        max-width: 1120px;
        gap: 8px;
    }
    .wrapper {
        display: grid;
        place-items: center;
    }
    .portfolio-cms {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left: 20px;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    .section {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
        width: 500px;

    }
    .section{
        width: 1000px;
    }

    button {
        margin-top: 0.5rem;
    }

    button {
        margin-top: 0.5rem;
        padding: 0.5rem;
        color: white;
        border: none;
        cursor: pointer;
        max-width: 200px;
        background-color: #447dbb;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
