<div class="hero-section">
    <div class="featured-content-container">
        <p class="central-heading">You May Have Seen Me</p>

        <video
            class="featured-content-box"
            src="https://thecollegecuber.com/wp-content/uploads/2024/04/TODAY-Show.mp4"
            controls
            controlslist="nodownload"
        ></video>
    </div>
</div>

<style>
    .hero-section {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        background: black;
        border-radius: 24px 24px 0px 0px;
        margin-top: 100px;
    }
    .featured-content-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .central-heading {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:
            600 24px Inter,
            sans-serif;
        color: white;
        text-align: center;
    }
    .featured-content-box {
        box-sizing: border-box;
        flex: 0 0 auto;
        margin-top: 48px;
        background: #d9d9d9;
    }

    @media screen and (max-width: 560px) {
        .central-heading {
            font-size: 18px;
        }
        .featured-content-container{
            padding-top: 32px;
        }
        .hero-section{
            border-radius: 16px 16px 0px 0px;
        }
        .featured-content-box{
            margin-top: 32px;
        }
    }
</style>
