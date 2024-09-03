<script>
  export let portfolio;
  let shouldShowDescription = false;

</script>

<div
  class="work-item-wrapper w-inline-block"

>
  <div class="overflow-none full">
    <img src={portfolio.src} loading="eager" alt="" class="work-item-image" />
    <div class="image-cover"></div>

  </div>
  <div class="item-title">{portfolio.title}</div>
  <div class="item-description">{portfolio.description}</div>
</div>

<style>
  

  .item-title {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    margin-top: 7px;
    font:
      400 18px Inter,
      sans-serif;
    color: white;
    width: 100%;
    text-align: center;
  }

  .work-item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #edf2f4;
    text-decoration: none;
    overflow: hidden; /* Ensure the image doesn't overflow */
    width: 100%;
    max-width: 100%;
    height: 100%;
  }

  .work-item-image {
    width: 100%;
    height: 31.25rem;
    object-fit: cover;
    transition: transform 0.75s ease; /* Smooth transition for the transform property */
  }

  .work-item-wrapper:hover .work-item-image {
    transform: scale(1.1); /* Scale the image on hover */
  }

  .overflow-none.full {
    position: relative;
    width: 100%;
    border-radius: 4px;
  }

  .overflow-none {
    overflow: hidden;
  }

  .image-cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: auto;
    z-index: 1;
    width: 100%;
    height: 100%;
    /* background-color: #0a100d;
    mix-blend-mode: color-burn; */
  }


</style>
