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
                <h2>Contact Us</h2>
                <div class="section">
                    {#each Object.entries(portfolioPage.contactUs) as [key, value]}
                        <div>
                            <label for={`contact-${key}`}>{key}</label>
                            {#if key === "about"}
                                <textarea
                                    id={`contact-${key}`}
                                    bind:value={portfolioPage.contactUs[key]}
                                    rows="3"
                                    cols="50"
                                ></textarea>
                            {:else}
                                <input
                                    id={`contact-${key}`}
                                    bind:value={portfolioPage.contactUs[key]}
                                    type="text"
                                />
                            {/if}
                        </div>
                    {/each}
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
    textarea {
        width: 90vw;
        min-width: 200px;
        max-width: 960px;
        padding: 0.5rem;
    }

    .section {

        margin-bottom: 1rem;
        width: 1000px;
    }

    button {
        margin-top: 0.5rem;
    }

    button {
        margin-top: 0.5rem;
        padding: 0.5rem;
        background-color: #447dbb;
        color: white;
        border: none;
        cursor: pointer;
        max-width: 200px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
