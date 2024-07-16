<script>

    import ReviewerProfile from "./ReviewerProfile.svelte";
    import ReviewerQuote from "./ReviewerQuote.svelte";

</script>
<div class="card-container">
    <ReviewerProfile />
    <ReviewerQuote />
</div>

<style>
    .card-container {
        box-sizing: border-box;
        flex: 1 1 0;
        background: white;
        border-radius: 6px;
    }
</style>
