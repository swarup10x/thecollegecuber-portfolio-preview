<script>
    export let src
</script>

<a href="#" class="work-item-wrapper w-inline-block">
    <div class="overflow-none full">
        <img
            src={src}
            loading="eager"

            
            alt=""
            class="work-item-image"
        />
        <div class="image-cover"></div>
        <div class="card-hover">
            <div class="track">
                <marquee id={src} scrollamount="3" direction="up" class="works-description med-size">This is the description of the work of this portfolio item</marquee>

            </div>
        </div>
    </div>
    <div class="item-title">Kings College of Art</div>
</a>

<style>
  .item-title {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    margin-top: 7px;
    font: 400 18px Inter, sans-serif;
    color: white;
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
    opacity: 0;
  }

  .work-item-wrapper:hover .card-hover {
    opacity: 1; /* Show the hover content on hover */
  }

  .works-description {
    position: relative;
    z-index: 90;
    /* margin-top: 1vh;
    margin-bottom: 1vh; */
    font-size: 36px;
    /* line-height: 1; */
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    text-wrap: wrap;
    /* white-space: nowrap; */
    /* width: 200px; */
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
