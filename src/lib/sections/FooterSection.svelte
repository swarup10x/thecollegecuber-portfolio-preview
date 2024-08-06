<script>
    import EmailContactCard from "../components/EmailContactCard.svelte";


    import QuickLinks from "../components/QuickLinks.svelte";

</script>
<div class="cube-art-world">
    <div class="cube-art-description-block">
      <img src="images/image_8b4378be.png" class="cube-art-image" />
      <p class="creative-engineering-text-style">
        <span>Welcome to my world of cube art, where</span>
        <span class="vertical-spacing-divider">
          <br />
        </span>
        <span>engineering and creativity unite</span>
      </p>
    </div>
    <div class="cube-art-section-title-block">
      <p class="title-text-block">Quick Link</p>
      <QuickLinks />
    </div>
    <div class="contact-info-container1">
      <p class="title-text-block">Contact Us</p>
      <EmailContactCard />
    </div>
  </div>


  <style>
  .cube-art-world {
    background-color: #0a100d;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    padding: 94px 120px;
    border-top: 1px solid #444444;
  }
  .cube-art-description-block {
    box-sizing: border-box;
    flex: 0 0 auto;
    width: 41.89%;
  }
  .cube-art-image {
    box-sizing: border-box;
    display: block;
    width: 136px;
    max-width: initial;
    height: 136px;
    border: none;
    object-fit: cover;
  }
  .creative-engineering-text-style {
    padding: 0;
    margin: 0;
    margin-top: 6px;
    font: 400 16px Inter, sans-serif;
    color: white;
    text-align: left;
  }
  .vertical-spacing-divider {
    display: block;
    line-height: 4px;
  }
  .cube-art-section-title-block {
    box-sizing: border-box;
    flex: 0 0 auto;
    width: 29.47%;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
  }
  .title-text-block {
    padding: 0;
    margin: 0;
    font: 500 26px Inter, sans-serif;
    color: white;
  }
  .contact-info-container1 {
    box-sizing: border-box;
    flex: 0 0 auto;
    width: 28.63%;
    padding-right: 15px;
    padding-bottom: 64px;
    padding-left: 15px;
  }


  @media screen and (max-width: 1000px) {
    .cube-art-world{
      padding:100px 20px ;
      flex-direction: column;
      gap: 28px;
    }
  }
  </style>