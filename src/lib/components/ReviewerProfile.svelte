<script>
  export let fullName="New York Jets"
  export let shortName="@nyjets"
  export let logoSrc="images/image_2d2546ce.png"
  
</script>

<div class="team-profile-card">
  <img src={logoSrc} class="profile-image-container" />
  <div class="team-info-container">
    <p class="team-info-display-style">{fullName}</p>
    <p class="brand-text-styles">{shortName}</p>
  </div>
</div>

<style>
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
</style>
