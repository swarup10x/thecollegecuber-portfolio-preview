<div class="flex-container-with-text-content">
    <p class="college-cuber-title">The College Cuber</p>
    <div class="horizontal-menu-container">
        <a href="/" class="unique-header-style">Portfolio</a>
        <a href="/cube-art" class="unique-header-style">Cube Art</a>
        <a href="/lego-art" class="unique-header-style">Lego Art</a>
        <a href="/contact-us" class="unique-header-style">Contact Us</a>
    </div>
</div>

<style>
    .flex-container-with-text-content {
        position: relative;
        z-index: 100;
        
        background-color: #0a100d;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        /* width: calc(100% - 40px); */
        width: 100%;
    }
    .college-cuber-title {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:
            700 18px Inter,
            sans-serif;
        color: white;
    }
    .horizontal-menu-container {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        gap: 30px;
        align-items: center;
        justify-content: flex-start;
    }
    .unique-header-style {
        all: unset;
        cursor: pointer;
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:
            600 15px Inter,
            sans-serif;
        color: white;
    }

    @media screen and (max-width: 600px) {
        .college-cuber-title {
            display: none;
        }

        .unique-header-style {
            font-size: 13px;
        }

        .horizontal-menu-container {
            width: 100%;
            gap: 20px;
            justify-content: space-between;
        }
    }
</style>
