<div class="artist-call-section2">
    <div class="artist-call-section">
      <p class="artist-title-style">MEET THE ARTIST</p>
    </div>
    <div class="call-wrapper">

       <p class="artist-call-button">Book A Call</p>
       <div class="box">
           <iframe src="https://calendly.com/thecollegecuber/30min?embed_domain=thecollegecuber.com&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;primary_color=d13425"  frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>
       </div>
    </div>
  </div>

  <style>
   iframe{
      width:480px; height:560px
   }
   .call-wrapper{
      display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
   }
    .box{
        border: 1px solid #b71234;
        border-radius: 8px;
        padding: 8px;

    }
    .artist-call-section2 {
   box-sizing: border-box;
   display: flex;
   flex-direction: row;
   gap: 20px;
   align-items: center;
   justify-content: space-between;
   padding-right: 184px;
   padding-left: 184px;
   margin-top: 140px;
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
   font: 700 28px Inter, sans-serif;
   color: black;
}
.artist-call-button {
   flex: 0 0 auto;
   padding: 0;
   margin: 0;
   margin-top: 28px;
   font: 700 26px Inter, sans-serif;
   color: #b71234;
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
      .artist-call-section{
         align-items: center;
      }
   }
@media screen and (max-width: 560px) {
   iframe{
      width:84vw; height:480px
   }
   .artist-call-section2 {
         padding-right: 12px;
         padding-left: 12px;
      }
   }

  </style>