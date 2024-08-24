<script>
    import CmsSidebar from "../../../../lib/components/CmsSidebar.svelte";
    import ImageUpload from "../../../../lib/components/ImageUpload.svelte";

    var imageList;
    let serverUrl="https://thecollegecuber.devconsort.com:3099/"
    async function loadImages() {
        try {
            const response = await fetch("https://thecollegecuber.devconsort.com:3099//api/images");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let imageJson = await response.json();
            imageList=imageJson.images
            console.log('images',imageList)
        } catch (error) {
            console.error("There was a problem fetching the images:", error);
            return [];
        }
    }

    loadImages();

    async function copyUrl(url) {
        await navigator.clipboard.writeText(url);
    }
    async function delteImage(url) {
        let splits=url.split("/")

        let imgName=splits[splits.length-1]
        console.log('imgName',imgName)
        try {
            const response = await fetch("https://thecollegecuber.devconsort.com:3099//api/images/delete?image="+imgName);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            await loadImages()
        } catch (error) {
            console.error("There was a problem fetching the images:", error);
            return [];
        }
    }

    
</script>
<div class="page-wrapper">
    <CmsSidebar />

<div class="upload-wrapper">

    <ImageUpload {loadImages}/>
</div>
{#if imageList}
<div class="list-wrapper">
    {#each imageList as img}
        <div class="img-wrapper">
            <img class="uploaded-image" src={serverUrl+img} alt="">
            <div class="icon-bar" >
                
                <svg on:click={()=>copyUrl(serverUrl+img)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m5.5 10.5l5-5M3.73 6.61L2.67 7.67a4 4 0 1 0 5.66 5.66l1.06-1.06m2.88-2.88l1.06-1.06a4 4 0 1 0-5.66-5.66L6.61 3.73"/></svg>
                <svg on:click={()=>delteImage(img)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ff0000" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
                <div></div>
            </div>
        </div>
    {/each}
</div>
{/if}
</div>

<style>
        :global(body) {
        font-family: Inter;
    }
    .edit-wrapper {
        margin-left: 100px;  
      margin-bottom: 10px;
    }
    .upload-wrapper{
        width: 100%;
        display: grid;
        place-items: center;
        margin-bottom: 16px;
    }
    .list-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
    }
    .img-wrapper{
        position: relative;
        width: 160px;
        height: 150px;


    }

    .uploaded-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .icon-bar{
        position: absolute;
        top: 0;
        width: 100%;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        align-items: center;
    }
</style>