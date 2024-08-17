<script>
  export let src;
  let shouldShowDescription = false;

  function handleEnter() {
    shouldShowDescription = true;
  }

  function handleLeave() {
    shouldShowDescription = false;
  }

  function handleTouchStart(event) {
    // Prevent default to stop scrolling on touch devices
    // event.preventDefault();
    handleEnter();
  }

  function handleTouchEnd() {
    handleLeave();
  }
</script>

<a
  href="#"
  class="work-item-wrapper w-inline-block"
  on:mouseenter={handleEnter}
  on:mouseleave={handleLeave}
  on:touchstart={handleTouchStart}
  on:touchend={handleLeave}
  on:touchcancel={handleLeave}
>
  <div class="overflow-none full">
    <img {src} loading="eager" alt="" class="work-item-image" />
    <div class="image-cover"></div>
    {#if shouldShowDescription}
      <div class="card-hover">
        <div class="track">
          <marquee
            id={src}
            scrollamount="5"
            direction="up"
            class="works-description med-size"
            ><div class="top-title">Kings College of Art</div>
            <div class="top-description"
              >I feel incredibly fortunate to have had the opportunity to collaborate with Bleacher Report on Kobe Day, where we honored and celebrated the extraordinary life and career of Kobe Bryant in Los Angeles, CA!</div
            >
          </marquee>
        </div>
      </div>
    {/if}
  </div>
  <div class="item-title">Kings College of Art</div>
</a>

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

  .card-hover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 6;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    transition: opacity 0.75s ease; /* Smooth transition for the opacity */
    opacity: 1;
  }

  .works-description {
    position: relative;
    z-index: 90;
    /* margin-top: 1vh;
    margin-bottom: 1vh; */

    /* line-height: 1; */
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    text-wrap: wrap;
    /* white-space: nowrap; */
    /* width: 200px; */
  }
  .top-description{
    font-size: 18px;
  }
  .top-title{
    font-size: 28px;
    margin-bottom: 6px;
  }

  .divider {
    display: flex;
    overflow: hidden;
    min-height: 5vh;
    flex-direction: column;
    justify-content: flex-end;
  }

  .divider.works {
    width: 2.8125rem;
    height: 0.25rem;
    margin-right: 1.5vw;
    margin-left: 1.5vw;
    background-color: #fff;
  }
</style>
