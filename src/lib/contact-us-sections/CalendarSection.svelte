<script>
    import CalendarIcon from "./CalendarIcon.svelte";

    export let data;
    console.log(data)

</script>
<div class="artist-call-section2">
   <div class="artist-call-section">
      <p class="artist-title-style styled-font">MEET THE ARTIST</p>
   </div>
   <div class="call-wrapper">
      <div class="calendar-title-wrapper">
         <CalendarIcon/>
         <p class="artist-call-button">BOOK A CALL</p>
      </div>
      <div class="box">
         <iframe
            src="https://calendly.com/thecollegecuber/30min?embed_domain=thecollegecuber.com&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;primary_color=d13425"
            frameborder="0"
            title="Select a Date &amp; Time - Calendly"
         >
         <style>

         </style>
      </iframe>
      </div>
   </div>
</div>

<style>
   @import url("https://fonts.googleapis.com/css2?family=Jersey+10&display=swap");

   .calendar-title-wrapper {
      width: 96%;
      margin: 0;
      border: 2px solid #29368d;

      border-radius: 20px 20px 0 0;
      border-bottom: none;
      padding: 10px 0;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
   }

   .styled-font {
      font-family: "Jersey 10", sans-serif;
      font-weight: 400;
      font-style: normal;
   }
   iframe {
      width: 480px;
      aspect-ratio: 1;
      overflow-y: scroll;
      scrollbar-width: thin;
      scrollbar-color: #a5a5a5 #f1f1f1;
      border-radius: 4px;
   }


   .call-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .box {
      border: 2px solid #29368d;
      border-radius: 8px;
      padding: 0 8px;
   }
   .artist-call-section2 {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      justify-content: space-evenly;
      padding-right: 184px;
      padding-left: 184px;
      margin-top: 100px;
   }
   .artist-call-section {
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      padding-top: 20px;
   }
   .artist-title-style {
      flex: 0 0 auto;
      padding: 0;
      margin: 0;
      font-size: 40px;
      color: transparent;
      background-image: linear-gradient(to right, #ff6b6b, #ffa500);
      -webkit-background-clip: text;
      background-clip: text;
   }

   .artist-call-button {
      padding: 0;
      margin: 0;

      text-align: center;
      font:
         600 20px Inter,
         sans-serif;
      color: #29368d;
   }
   .artist-call-section1 {
      box-sizing: border-box;
      flex: 0 0 auto;
      width: 480px;
      height: 560px;
      background: #d9d9d9;
   }

   @media screen and (max-width: 1180px) {
      .artist-call-section2 {
         padding-right: 60px;
         padding-left: 60px;
      }
   }
   @media screen and (max-width: 740px) {
      .artist-call-section2 {
         flex-direction: column;
         align-items: center;
      }
      .artist-call-section {
         align-items: center;
      }
   }
   @media screen and (max-width: 560px) {
      iframe {
         width: 85vw;
         aspect-ratio: .75;
      }
      .artist-call-section2 {
         padding-right: 12px;
         padding-left: 12px;
      }
   }

   @media screen and (max-width: 400px) {
      iframe {
         width: 90vw;
         aspect-ratio: .64;
      }
   }
</style>
