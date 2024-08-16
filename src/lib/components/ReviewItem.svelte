<script>

    export let review
</script>

<div class="card-container">
    <div class="team-profile-card">
        <img src={review.logoSrc} class="profile-image-container" />
        <div class="team-info-container">
            <p class="team-info-display-style">{review.fullName}</p>
            <p class="brand-text-styles">{review.shortName}</p>
        </div>
    </div>
    <div class="college-cuber-quote">
        <p class="college-cuber-quote-style">
            “{review.quote} 🤯&quot;
        </p>
    </div>
</div>

<style>
    .card-container {
        box-sizing: border-box;
        flex: 1 1 0;
        background: white;
        border-radius: 6px;
    }

    .team-profile-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding: 15px 16.5px 12.5px;
        border-bottom: 1px solid #ebf6e5;
    }
    .profile-image-container {
        box-sizing: border-box;
        display: block;
        width: 36px;
        max-width: initial;
        height: 36px;
        border: none;
        border-radius: 50%;
        object-fit: cover;
    }
    .team-info-container {
        flex: 0 0 auto;
        margin-left: 7px;
    }
    .team-info-display-style {
        padding: 0;
        margin: 0;
        font:
            400 20px Inter,
            sans-serif;
        color: black;
    }
    .brand-text-styles {
        padding: 0;
        margin: 0;
        margin-top: 4px;
        font:
            400 15px Inter,
            sans-serif;
        color: #bd2646;
    }

    .college-cuber-quote {
        box-sizing: border-box;
        width: 100%;
        height: 82px;
        padding-top: 5.5px;
        padding-right: 15.5px;
        padding-left: 15.5px;
    }
    .college-cuber-quote-style {
        box-sizing: border-box;
        max-width: 206px;
        padding: 0;
        margin: 0;
        font:
            400 14px/20px Inter,
            sans-serif;
        color: black;
        text-align: left;
    }

    @media screen and (max-width: 580px) {
        .college-cuber-quote-style {
            font:
                400 13px Inter,
                sans-serif;
        }
        .college-cuber-quote {
            height: 56px;
            padding-top: 5.5px;
            padding-right: 10px;
            padding-left: 10px;
        }
    }

    @media screen and (max-width: 580px) {
        .profile-image-container {
            width: 28px;

            height: 28px;
        }

        .team-info-display-style {
            font:
                400 14px Inter,
                sans-serif;
        }

        .brand-text-styles {
            font:
                400 12px Inter,
                sans-serif;
        }

        .team-profile-card {
            padding: 10px;
        }
    }

    @media screen and (max-width: 580px) {
        .card-container {
            width: 168px;
        }
    }
</style>
