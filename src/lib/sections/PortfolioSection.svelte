<script>
    import { fly } from "svelte/transition";
    import { quintOut, linear } from "svelte/easing";
    import PortfolioItem from "../components/PortfolioItem.svelte";

    let allPortfolios = [
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15.jpg",
        },
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15-1.jpg",
        },
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15-2.jpg",
        },
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15-3.jpg",
        },
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15-1.jpg",
        },
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15-2.jpg",
        },
        {
            title: "Kings College of Art",
            description:
                "I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!",
            src: "images/Rectangle-15-3.jpg",
        },
        // Add more items if needed...
    ];

    let pagination = 1;
    let canLoadMore = true;
    const itemsPerPage = 4;
    let maxPagination = Math.ceil(allPortfolios.length / itemsPerPage);

    // Initialize with the first four portfolios
    let calculatedPortfolios = [allPortfolios.slice(0, itemsPerPage)];

    console.log("calculatedPortfolios", calculatedPortfolios);

    function loadPortfolio() {
        const start = pagination * itemsPerPage;
        const end = start + itemsPerPage;
        const nextPortfolios = allPortfolios.slice(start, end);
        pagination += 1;

        calculatedPortfolios = [...calculatedPortfolios, [...nextPortfolios]];

        if (pagination >= maxPagination) {
            canLoadMore = false;
        }
    }
</script>

<div class="portfolio-pagination">
    {#each calculatedPortfolios as portfolios}
        <div
            id="work"
            class="work-grid"
            transition:fly={{
                delay: 100,
                duration: 500,
                y: 200,
                opacity: 0.5,
                easing: quintOut,
            }}
        >
            {#each portfolios as portfolio}
                <PortfolioItem {portfolio} />
            {/each}
        </div>
    {/each}

    <!-- HTML !-->
    {#if canLoadMore}
        <div class="button-wrapper">
            <button on:click={loadPortfolio} class="button-load-more"
                >Watch More</button
            >
        </div>
    {/if}
</div>

<style>
    .button-wrapper {
        display: grid;
        place-items: center;
        /* padding: 36px; */
        padding-top: 72px;
    }
    .button-load-more {
        appearance: button;
        background-color: #16181d;
        border: 1px solid #343948;
        border-radius: 4px;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        font-family:
            Graphik,
            -apple-system,
            system-ui,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            sans-serif;
        font-size: 14px;
        line-height: 1.15;
        overflow: visible;
        padding: 12px 16px;
        position: relative;
        text-align: center;
        text-transform: none;
        transition: all 80ms ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: fit-content;
    }

    .button-load-more:disabled {
        opacity: 0.5;
    }

    .button-load-more:focus {
        outline: 0;
    }

    .button-load-more:hover {
        background-color: #000000;
        border-color: #434343;
    }

    .button-load-more:active {
        background-color: #000000;
        border-color: #434343;
    }
    .portfolio-pagination {
        display: grid;
        padding-bottom: 100px;
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
        /* padding-bottom: 100px; */
    }
    @media screen and (max-width: 640px) {
        .work-grid {
            padding-right: 5%;
            padding-left: 5%;
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            grid-gap: 1.25rem;
        }
    }
</style>
