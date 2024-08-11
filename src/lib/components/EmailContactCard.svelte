<script>
    import SvgEmail from "../icons/SvgEmail.svelte";
    import SvgLocation from "../icons/SvgLocation.svelte";
</script>

<div class="vertical-center-column-with-svg-and-text">
    <div class="art-college-grid1">
        <div class="svg-container">
            <SvgEmail />
        </div>

        <p class="email-text-display-style">dylan@thecollegecuber.com</p>
    </div>
    <div class="contact-info-container">
        <div class="svg-container">
            <SvgLocation />
        </div>
        <p class="email-text-display-style1">NEW JERSEY, USA</p>
    </div>
</div>

<style>
    .vertical-center-column-with-svg-and-text {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        margin-top: 16px;
    }
    .art-college-grid1 {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .svg-container {
        display: flex;
        flex: 0 0 auto;
        width: 24px;
        height: 24px;
        color: #ffffff;
    }
    .email-text-display-style {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        margin-left: 11px;
        font:
            500 16px Inter,
            sans-serif;
        color: white;
    }
    .contact-info-container {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: 25px;
    }
    .email-text-display-style1 {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        margin-left: 8px;
        font:
            500 16px Inter,
            sans-serif;
        color: white;
    }
</style>
