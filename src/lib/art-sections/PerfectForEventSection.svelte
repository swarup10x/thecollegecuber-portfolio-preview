<script>
    let eventImagesSrc=[
        "channels4_profile-photoaidcom-cropped-qmv69c10lawzf6ywzqmymdsm9rxnspddteci2m0wyw.png",
"download-1-photoaidcom-cropped-qmv6yx6umxxzh1svkstchxccfdtdc2yc01ocds33l4.png",
"download-2-photoaidcom-cropped-qmv71k4jt7jy1nyz6funzrdwfatfxif813kduq6c4o.png",
"download-3-photoaidcom-cropped-qmv6yy4otrz9snrifb7z2f3t0roqjs22c6btv21pew.png",
"download-4-photoaidcom-cropped-qmv7086s4nqbljwlyd4oylhe4ndq0y4wuiamdm5ey0.png",
"download-photoaidcom-cropped-qmv6omufu7v0eoqtncqc7isqdkir3c4394n1arc7oo.png",
"jbPuTCHf_400x400-photoaidcom-cropped-qmv6onsa11waqapghv4ys0k6yye4b17tl9ais1atig.png",
"mlb-world-baseball-classic-favicon-photoaidcom-cropped-qmv6onsa11waqapghv4ys0k6yye4b17tl9ais1atig.png",
"premierleague-1024x1024-photoaidcom-cropped-qmv6opnyepyvdimq6vy7x0345q4uqffa9ilhql8160.png",
"Screenshot_2024-04-17_at_73628_PM-removebg-preview-photoaidcom-cropped-qmv6otfb6240nyh9kxkq6z4yj9mbl7u7m17fnp2gh4.png",
"Screenshot_2024-04-17_at_73652_PM-removebg-preview-photoaidcom-cropped-qmv6oud5cw5azkfwffzcrgwf4nhoswxxy5ux4z12aw.png",
"square-photoaidcom-cropped-qmv6orjmse1g0qjzvwrh1zm1chvl5tmqxrwgp558tk.png"
    ]
</script>

<div class="event-card-container">
    <div class="event-card-container1">
        <div class="event-description-container">
            <div class="event-card">
                <p class="event-title-text-style">Perfect for<br /></p>
                <p class="event-title-text-style1">Sporting Events</p>
            </div>
        </div>
        <div class="vertical-image-gallery">
            <div class="horizontal-image-gallery">
                {#each eventImagesSrc as imgSrc}
                    
                <img
                    src={"/events-logo/"+imgSrc}
                    class="image-container-grid"
                />
                {/each}
                
            </div>
        </div>
    </div>
</div>

<style>
    .event-card-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        /* max-width: 90vw; */
        background: white;
        min-width: 340px;
    }
    .event-card-container1 {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
    }
    .event-description-container {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .event-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .event-title-text-style {
        box-sizing: border-box;
        flex: 0 0 auto;
        max-width: 118px;
        padding: 0;
        margin: 0;
        font:
            700 22px/22px Inter,
            sans-serif;
        color: #444444;
        text-align: left;
    }
    .event-title-text-style1 {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        margin-top: 28px;
        font:
            600 36px/22px Inter,
            sans-serif;
        color: #b71234;
    }
    .vertical-image-gallery {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 92px;
   
    }
    .horizontal-image-gallery {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        gap: 90px;
        align-items: center;
        justify-content: space-between;
        max-width: 1050px;
        overflow-x: scroll;
    }
    .image-container-grid {
        box-sizing: border-box;
        display: block;
        width: 100px;
        max-width: initial;
        height: 100px;
        border: none;
        object-fit: cover;
    }
    .vertical-spacer {
        flex: 0 0 auto;
        margin-top: 56px;
    }
    .image-container {
        box-sizing: border-box;
        display: block;
        width: 1159px;
        max-width: initial;
        height: 134px;
        border: none;
        object-fit: cover;
    }
</style>
