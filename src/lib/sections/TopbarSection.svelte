<div class="flex-container-with-text-content">
    <p class="college-cuber-title">The College Cuber</p>
    <div class="horizontal-menu-container">
        <p class="unique-header-style">Portfolio</p>
        <p class="unique-header-style">Cube Art</p>
        <p class="unique-header-style">Brick Art</p>
        <p class="unique-header-style">Contact Us</p>
    </div>
</div>

<style>
    .flex-container-with-text-content {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        width: calc(100% - 40px);
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
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:
            600 15px Inter,
            sans-serif;
        color: white;
    }
</style>
