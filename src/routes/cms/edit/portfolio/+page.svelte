<script>
    import isEqual from "lodash.isequal";
    import { isLoggedIn } from "../../../../stores/authStore.js";

    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
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

    function addPortfolio() {
        portfolioPage.portfolios = [
            ...portfolioPage.portfolios,
            {
                title: "",
                description: "",
                src: "",
            },
        ];
    }

    function removePortfolio(index) {
        portfolioPage.portfolios = portfolioPage.portfolios.filter(
            (_, i) => i !== index,
        );
    }

    function addReview() {
        portfolioPage.testimonial.reviews = [
            ...portfolioPage.testimonial.reviews,
            {
                fullName: "",
                shortName: "",
                logoSrc: "",
                quote: "",
            },
        ];
    }

    function removeReview(index) {
        portfolioPage.testimonial.reviews =
            portfolioPage.testimonial.reviews.filter((_, i) => i !== index);
    }

    onMount(() => {
        console.log("islogged in", $isLoggedIn);
        if (!$isLoggedIn) goto("/cms");
    });
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
                <h2>Letter Animation</h2>
                {#each Object.entries(portfolioPage.letterAnimation) as [key, value]}
                    <div>
                        <label for={key}>{key}</label>
                        <input
                            id={key}
                            bind:value={portfolioPage.letterAnimation[key]}
                            type="text"
                        />
                    </div>
                {/each}

                <h2>Portfolios</h2>
                <div class="section portfolios">
                    {#each portfolioPage.portfolios as portfolio, index}
                        <div class="portfolio-item">
                            <h3>Portfolio Item {index + 1}</h3>
                            <div>
                                <label for={`portfolio-title-${index}`}
                                    >Title</label
                                >
                                <input
                                    id={`portfolio-title-${index}`}
                                    bind:value={portfolio.title}
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for={`portfolio-description-${index}`}
                                    >Description</label
                                >
                                <textarea
                                    id={`portfolio-description-${index}`}
                                    bind:value={portfolio.description}
                                    rows="4"
                                    cols="50"
                                ></textarea>
                            </div>
                            <div>
                                <label for={`portfolio-src-${index}`}
                                    >Image Source</label
                                >
                                <input
                                    id={`portfolio-src-${index}`}
                                    bind:value={portfolio.src}
                                    type="text"
                                />
                            </div>
                            <button on:click={() => removePortfolio(index)}
                                >Remove Portfolio Item</button
                            >
                        </div>
                    {/each}
                    <button class="portfolio-btn" on:click={addPortfolio}>Add Portfolio Item</button>
                </div>

                <h2>Info</h2>
                <textarea bind:value={portfolioPage.info} rows="4" cols="50"
                ></textarea>

                <h2>Creative Process</h2>
                {#each Object.entries(portfolioPage.creativeProcess) as [key, value]}
                    <div>
                        <label for={key}>{key}</label>
                        {#if key.startsWith("image")}
                            <input
                                id={key}
                                bind:value={portfolioPage.creativeProcess[key]}
                                type="text"
                            />
                        {:else}
                            <textarea
                                id={key}
                                bind:value={portfolioPage.creativeProcess[key]}
                                rows="10"
                                cols="50"
                            ></textarea>
                        {/if}
                    </div>
                {/each}

                <h2>Testimonial</h2>

                <div>
                    <label for={"heading"}>{"heading"}</label>
                    <input
                        id={"heading"}
                        bind:value={portfolioPage.testimonial["heading"]}
                        type="text"
                    />
                </div>
                <div>
                    <label for={"overview"}>{"overview"}</label>
                    <input
                        id={"overview"}
                        bind:value={portfolioPage.testimonial["overview"]}
                        type="text"
                    />
                </div>

                <h3>Reviews</h3>
                <div class="reviews-container">
                    {#each portfolioPage.testimonial.reviews as review, index}
                        <div class="review-item">
                            <div>
                                <label for={`fullName-${index}`}
                                    >Full Name</label
                                >
                                <input
                                    id={`fullName-${index}`}
                                    bind:value={review.fullName}
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for={`shortName-${index}`}
                                    >Short Name</label
                                >
                                <input
                                    id={`shortName-${index}`}
                                    bind:value={review.shortName}
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for={`logoSrc-${index}`}
                                    >Logo Source</label
                                >
                                <input
                                    id={`logoSrc-${index}`}
                                    bind:value={review.logoSrc}
                                    type="text"
                                />
                            </div>
                            <div>
                                <label for={`quote-${index}`}>Quote</label>
                                <textarea
                                    id={`quote-${index}`}
                                    bind:value={review.quote}
                                    rows="3"
                                    cols="30"
                                ></textarea>
                            </div>
                            <button
                                on:click={() => {
                                    removeReview(index);
                                }}
                                class="remove-review">Remove</button
                            >
                        </div>
                    {/each}
                    <button on:click={addReview} class="add-review review-btn"
                        >Add Review</button
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<style>
        :global(body) {
        font-family: Inter;
    }

    .reviews-container {
        display: flex;

        gap: 1rem;
        max-width: 1000px;
        overflow-x: scroll;
        padding: 16px;
        border: 1px solid grey;
        border-radius: 4px;
    }
    .edit-wrapper {
        margin-left: 100px;  
      margin-bottom: 10px;

    }

    .review-item {
        /* flex: 0 0 calc(33.33% - 1rem); */
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 4px;
        width: 250px;
    }

    .review-item input,
    .review-item textarea {
        width: 232px;
        min-width: unset;
    }

    .add-review,
    .remove-review {
        margin-top: 0.5rem;
        padding: 0.25rem 0.5rem;
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
        max-width: 1000px;
        padding: 0.5rem;
    }

    .section {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .faq-item,
    .service-item {
        border: 1px solid #ddd;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
    }

    button {
        margin-top: 0.5rem;
    }

    .portfolios {
        display: flex;
        gap: 10px;
        max-width: 1000px;
        overflow-x: scroll;
    }

    .portfolio-item {
        width: 300px;
        border: 1px solid #ccc;
        padding: 1rem;
        background-color: #f9f9f9;
    }

    .portfolio-item input,
    .portfolio-item textarea {
        width: 280px !important;
        margin-bottom: 0.5rem;
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

    .portfolio-btn{
        min-width: 300px !important;
    }
    .review-btn{
        min-width: 250px !important;
    }
</style>
