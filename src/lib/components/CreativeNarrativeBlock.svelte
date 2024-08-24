<script>
  export let narrative1
  
  let formattedNarrative1  = narrative1.replace(/\n/g, '<br>');
</script>

<div class="intense-artwork-container">
  <p class="intense-content-block">
    {@html formattedNarrative1}
  </p>
</div>

<style>
  .intense-artwork-container {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding: 20.5px 24px 21.5px;
    background: #0a100d;
    border: 1px solid #2f3130;
  }
  .intense-content-block {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    margin: 0;
    font:
      400 20px Inter,
      sans-serif;
    color: white;
    text-align: left;
  }

  @media screen and (max-width: 480px) {
    .intense-content-block {
      font:
        400 16px Inter,
        sans-serif;
    }
  }
</style>
