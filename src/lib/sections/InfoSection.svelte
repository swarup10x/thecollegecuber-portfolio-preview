<script>
    export let data;

    let info=data.page.info
    // let info =
    //     "My artwork explores the limitless possibilities of cubes by creating custom mosaics featuring [athletes, celebrities, logos] and more. Each piece is a [labor-intensive endeavor,]  exuding a sense of sophistication.";

    let brokenInfo = info.includes("[") ? info.split("[") : [info]; //.map((e)=>e.split("]")).flat()
    console.log("brokenInfo", brokenInfo);
</script>

<div class="mosaic-artwork-description">
    <p class="sophisticated-text-styles">
        {#each brokenInfo as infoBlock}
            {#if infoBlock.includes("]")}
                {infoBlock.split("]")[0]} <span>{infoBlock.split("]")[1]}</span>
            {:else}
                {infoBlock}
            {/if}
        {/each}
    </p>
</div>

<style>
    @media screen and (max-width: 1300px) {
        .sophisticated-text-styles {
            font-size: 60px;
        }
    }

    .mosaic-artwork-description {
        box-sizing: border-box;
        flex: 0uto;
        padding: 108px 40px 166px;
    }
    .sophisticated-text-styles {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font:
            400 4.8vw Inter,
            sans-serif;
        color: #edf2f4;
        text-align: left;
    }

    span {
        color: #acacac;
    }
</style>
