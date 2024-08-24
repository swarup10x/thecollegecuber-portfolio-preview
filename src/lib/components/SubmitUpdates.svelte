<script>
    export let oldData;
    export let newData;

    let isUpdate=JSON.stringify(oldData)===JSON.stringify(newData)

    $: console.log(isUpdate, "isupdate")
</script>




<style>

</style>