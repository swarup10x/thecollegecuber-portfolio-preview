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
                body: JSON.stringify({page:portfolioPage}),
            });
            data=JSON.parse(JSON.stringify(portfolioPage));
        } catch (error) {
            
        }
    }

    $: isUpdate = !isEqual(portfolioPage, data);

    $: console.log(isUpdate, "isUpdate");



    function addService(section) {
        portfolioPage[section].services = [...portfolioPage[section].services, {
            type: "",
            title: "",
            bulletPoints: []
        }];
    }

    function removeService(section, index) {
        portfolioPage[section].services = portfolioPage[section].services.filter((_, i) => i !== index);
    }

    function addBulletPoint(section, serviceIndex) {
        portfolioPage[section].services[serviceIndex].bulletPoints = [
            ...portfolioPage[section].services[serviceIndex].bulletPoints,
            ""
        ];
    }

    function removeBulletPoint(section, serviceIndex, bulletIndex) {
        portfolioPage[section].services[serviceIndex].bulletPoints = 
            portfolioPage[section].services[serviceIndex].bulletPoints.filter((_, i) => i !== bulletIndex);
    }
</script>

<div class="page-wrapper">
    <CmsSidebar />

<div class="submit-wrapper">
    <button
        class="action-button cancel"
        disabled={!isUpdate}
        on:click={() => (portfolioPage = data.page)}>cancel</button
    >
    <button on:click={submit} class="action-button submit" disabled={!isUpdate}>submit</button>
    <div></div>
</div>
<div class="edit-wrapper">
<div class="wrapper">
    <div class="portfolio-cms">


        

        <h2>LEGO Art</h2>
        <div class="section">
            <h3>Landing Text</h3>
            {#each Object.entries(portfolioPage.legoArt.landingText) as [key, value]}
                <div>
                    <label for={`lego-${key}`}>{key}</label>
                    <input id={`lego-${key}`} bind:value={portfolioPage.legoArt.landingText[key]} type="text" />
                </div>
            {/each}

            <h3>Video Source</h3>
            <input bind:value={portfolioPage.legoArt.videoSrc} type="text" />

            <h3>How It Works</h3>
            <textarea bind:value={portfolioPage.legoArt.howItWorks} rows="4" cols="50"></textarea>

            <h3>FAQs</h3>
            {#each portfolioPage.legoArt.faqs as faq, index}
                <div class="faq-item">
                    <input bind:value={faq.q} placeholder="Question" />
                    <textarea bind:value={faq.a} placeholder="Answer" rows="3"></textarea>
                    
                </div>
            {/each}

            <h3>Work Info</h3>
            <input bind:value={portfolioPage.legoArt.workInfoTitle} placeholder="Title" />
            <textarea bind:value={portfolioPage.legoArt.workInfoDescription} placeholder="Description" rows="3"></textarea>

            <h3>Grid Image Source<span style="font-size: 70%;"> (300x300)</span></h3>
            <input bind:value={portfolioPage.legoArt.gridImageSrc} type="text" />

            <h3>What I Do</h3>
            <textarea bind:value={portfolioPage.legoArt.whatIDO} rows="4" cols="50"></textarea>

            <h3>Services</h3>
            {#each portfolioPage.legoArt.services as service, serviceIndex}
                <div class="service-item">
                    <input bind:value={service.type} placeholder="Service Type" />
                    <input bind:value={service.title} placeholder="Service Title" />
                    <h4>Bullet Points</h4>
                    {#each service.bulletPoints as point, bulletIndex}
                        <div>
                            <input class="bullet-point-item" bind:value={service.bulletPoints[bulletIndex]} placeholder="Bullet point" />
                            <button on:click={() => removeBulletPoint('legoArt', serviceIndex, bulletIndex)}>Remove Point</button>
                        </div>
                    {/each}
                    <button on:click={() => addBulletPoint('legoArt', serviceIndex)}>Add Bullet Point</button>
                    <button on:click={() => removeService('legoArt', serviceIndex)}>Remove Service</button>
                </div>
            {/each}
            <button on:click={() => addService('legoArt')}>Add Service</button>

            <h3>Our Story</h3>
            <textarea bind:value={portfolioPage.legoArt.ourStory} rows="4" cols="50"></textarea>

            <h3>Our Story Image</h3>
            <input bind:value={portfolioPage.legoArt.ourStoryImage} type="text" />
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

    .faq-item, .service-item {
        border: 1px solid #ddd;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
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

    .bullet-point-item{
        width: 85%;
    }
</style>
