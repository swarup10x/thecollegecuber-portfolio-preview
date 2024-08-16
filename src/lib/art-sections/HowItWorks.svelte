<script>
   export let videoSrc
   export let howItWorks
   export let artType
</script>

<div class="div-style-7c40600a">
    <div class="div-style-2ef23751">
      <div class="div-style-f77e6334">
        <p class="p-style-a2858846">How It Works</p>
        <p class="p-style-81519ffb">Live {artType} Art</p>
      </div>
      <p class="p-style-ff3ed754">{howItWorks}</p>
      <!-- Button Component is detected here -->
      <button class="button-style-8ad96753">Book a Call</button>
    </div>
    <video class="img-style-8062128" src={videoSrc} autoplay="true" loop="true" controls muted="muted" playsinline="" controlslist="nodownload"></video>
  </div>

  
  <style>
    .div-style-7c40600a {
   box-sizing: border-box;
   display: flex;
   flex: 0 0 auto;
   flex-direction: row;
   gap: 8px;
   align-items: flex-start;
   justify-content: space-between;
   padding: 148px 144px 106px;
   background: #151414;
}
.div-style-2ef23751 {
   box-sizing: border-box;
   flex: 0 0 auto;
   max-width: 582px;
   padding-bottom: 16px;
}
.div-style-f77e6334 {
   box-sizing: border-box;
   width: 100%;
}
.p-style-a2858846 {
   padding: 0;
   margin: 0;
   font: 600 28px Inter, sans-serif;
   color: #707070;
}
.p-style-81519ffb {
   padding: 0;
   margin: 0;
   margin-top: 21px;
   font: 700 32px Inter, sans-serif;
   color: #b71234;
}
.p-style-ff3ed754 {
   box-sizing: border-box;
   width: 100%;
   padding: 0;
   margin: 0;
   margin-top: 48px;
   font: 500 18px/28px Inter, sans-serif;
   color: #d0d0d0;
   text-align: left;
   letter-spacing: 0.54px;
}
.button-style-8ad96753 {
   box-sizing: border-box;
   display: block;
   width: 160px;
   min-width: 160px;
   height: 46px;
   margin-top: 48px;
   font: 500 18px Inter, sans-serif;
   color: white;
   cursor: pointer;
   background: #b71234;
   border: none;
   border-radius: 6px;
}
.img-style-8062128 {
   box-sizing: border-box;
   display: block;
   width: 336px;
   max-width: initial;
   height: 600px;
   border: none;
   border-radius: 12px 12px 0px 0px;
   object-fit: cover;
}


@media screen and (max-width: 1280px) {
      .div-style-7c40600a {
         padding: 148px 40px 106px;
      }

   }

   @media screen and (max-width: 1000px) {
      .div-style-2ef23751{
         max-width: 440px;
      }
   }
   @media screen and (max-width: 720px) {
      .div-style-2ef23751{
         max-width: 100%;
      }
      .div-style-7c40600a{
         flex-direction: column;
      }
      .p-style-ff3ed754{
         font-size: 16px;
      }
   }
   @media screen and (max-width: 520px) {
      .div-style-2ef23751{
         max-width: 100%;
      }
      .div-style-7c40600a{
         padding: 148px 12px 106px;
      }
   }

  </style>