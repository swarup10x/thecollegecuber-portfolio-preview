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

    @media screen and (max-width: 580px) {
        .card-container {
            width: 168px;
        }
    }

    
</style>
