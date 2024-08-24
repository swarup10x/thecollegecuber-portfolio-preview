<script>
     export let story
     export let ourStoryImage
</script>

<div class="div-style-8697dd27">
   <div class="div-style-a14762a7">
      <div class="div-style-f77e6334">
         <p class="p-style-4f19822c">Why Collegecuber?</p>
         <p class="p-style-774b7cbf">Our story</p>
      </div>
      <p class="p-style-b321f26f">
         {story}
      </p>
      <!-- Button Component is detected here -->
      <button class="button-style-bdd38397">Read more</button>
   </div>
   <img src={ourStoryImage} class="img-style-7a1ad65e" />
</div>

<style>
   .div-style-8697dd27 {
      box-sizing: border-box;
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      padding: 184px 180px 94px;
      background: #f4f0e3;
   }
   .div-style-a14762a7 {
      box-sizing: border-box;
      flex: 0 0 auto;
      max-width: 448px;
      padding-top: 35px;
   }
   .div-style-f77e6334 {
      box-sizing: border-box;
      width: 100%;
   }
   .p-style-4f19822c {
      padding: 0;
      margin: 0;
      font:
         400 14px Inter,
         sans-serif;
      color: #373737;
   }
   .p-style-774b7cbf {
      padding: 0;
      margin: 0;
      margin-top: 9px;
      font:
         500 40px Inter,
         sans-serif;
      color: black;
   }
   .p-style-b321f26f {
      box-sizing: border-box;
      width: 100%;
      padding: 0;
      margin: 0;
      margin-top: 26px;
      font:
         400 15px Inter,
         sans-serif;
      color: #373737;
      text-align: left;
   }
   .button-style-bdd38397 {
      box-sizing: border-box;
      display: block;
      width: 146px;
      min-width: 146px;
      height: 43px;
      margin-top: 26px;
      font:
         500 16px Inter,
         sans-serif;
      color: #323232;
      cursor: pointer;
      background: white;
      border: 1px solid #2d2d2d;
      border-radius: 33px;
   }
   .img-style-7a1ad65e {
      box-sizing: border-box;
      display: block;
      width: 378px;
      max-width: initial;
      height: 400px;
      border: none;
      border-radius: 100px 0px 100px 0px;
      object-fit: cover;
   }

   @media screen and (max-width: 1280px) {
      .div-style-8697dd27 {
         padding: 184px 40px 94px;
      }
   }
   @media screen and (max-width: 740px) {
      .div-style-8697dd27{
         flex-direction: column-reverse;
      }
   }
   @media screen and (max-width: 540px) {
      .img-style-7a1ad65e {

      width: 320px;

      height: 320px;

   }

   .div-style-8697dd27 {
         padding: 184px 12px 94px;
      }
}
</style>
