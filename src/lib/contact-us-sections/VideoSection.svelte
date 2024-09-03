<script>

    import CalendarIcon from "./CalendarIcon.svelte";

</script>
<div class="hero-section">
    <div class="featured-content-container">
        <div class="calendar-title-wrapper">
            <CalendarIcon/>
            <p class="artist-call-button">BOOK A CALL</p>
         </div>
        <iframe
            src="https://calendly.com/thecollegecuber/30min?embed_domain=thecollegecuber.com&amp;hide_gdpr_banner=1&amp;primary_color=d13425"
            frameborder="0"
            title="Select a Date &amp; Time - Calendly"
        >
            <!-- <video
            class="featured-content-box"
            src="https://thecollegecuber.com/wp-content/uploads/2024/04/TODAY-Show.mp4"
            controls
            controlslist="nodownload"
        ></video> -->
        </iframe>
    </div>
</div>

<style>
       .calendar-title-wrapper {
      width: 96%;
      margin: 0;
      border-bottom: none;
      padding: 10px 0;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
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
    iframe {
        width: 100%;
        aspect-ratio: 1.5;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #a5a5a5 #f1f1f1;
        border-radius: 4px;
    }
    .hero-section {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        background: #fbfcfd;
        border-radius: 24px 24px 0px 0px;
        margin-top: 148px;
    }
    .featured-content-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
        padding-left: 12px;
        padding-right: 12px;
    }
    .central-heading {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        padding: 0;
        margin: 0;
        text-align: center;
        font:
            600 20px Inter,
            sans-serif;
        color: #29368d;
    }

    @media screen and (max-width: 1044px) {

        iframe {
            width: 100%;
            aspect-ratio: 0.75;
        }
    }
    @media screen and (max-width: 900px) {

        iframe {
            width: 100%;
            aspect-ratio: 0.6;
        }
    }
    @media screen and (max-width: 780px) {

        iframe {
            width: 100%;
            aspect-ratio: 0.5;
        }
    }
    @media screen and (max-width: 560px) {

        .featured-content-container {
            padding-top: 32px;
        }
        .hero-section {
            border-radius: 16px 16px 0px 0px;
        }
        iframe {
            width: 100%;
            aspect-ratio: 0.45;
        }
    }
    @media screen and (max-width: 480px) {

        .featured-content-container {
            padding-top: 32px;
        }
        .hero-section {
            border-radius: 16px 16px 0px 0px;
        }
        iframe {
            width: 100%;
            aspect-ratio: 0.4;
        }
    }

    @media screen and (max-width: 400px) {
        iframe {
            width: 100%;
            aspect-ratio: 0.28;
        }
    }
</style>
