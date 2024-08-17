<script>
    export let selected=false

    export let onClick
</script>
<div class:selected class="circular-selector" on:click={onClick}></div>

<style>
    .circular-selector {
        width: 8px;
        height: 8px;


        background: #757575;
        border-radius: 50%;
    }
    .selected{
        background: #d9d9d9;
    }
</style>
