<script>
   import { fly } from "svelte/transition";
   import { quintOut } from "svelte/easing";
   import { onMount } from "svelte";

   export let data;

   let twitter = data.page.socialLinks.twitter;
   let facebook = data.page.socialLinks.twitter;
   let linkedin = data.page.socialLinks.linkedin;
   let instagram = data.page.socialLinks.instagram;
   let youtube = data.page.socialLinks.youtube;
   let tiktok = data.page.socialLinks.tiktok;

   let showProfile = false;

   // Set showProfile to true after the component is mounted
   onMount(() => {
      showProfile = true;
   });
</script>

<div class="artist-profile-container2">
   <div class="artist-profile-container">
      <img
         src="/contact-us-images/doing-cube-by-artist.jpg"
         class="bottom-image"
      />
      <div class="semi-transparent-holder">
         {#if showProfile}
            <div
               class="artist-profile-card1"
               transition:fly={{
                  delay: 200,
                  duration: 500,
                  x: 400,
                  opacity: 0.5,
                  easing: quintOut,
               }}
            >
               <div class="artist-profile-card">
                  <p class="artist-bio-container">
                     <span
                        class="artist-name-text-style vertical-spacing-divider inter-sans-artist red-text"
                        >Dylan Sadiq</span
                     ><span
                        class="artist-name-text-style artist-name-text-style vertical-spacing-divider inter-sans-artist"
                        ><br /></span
                     ><span
                        class="artist-name-text-style artist-name-text-style vertical-spacing-divider inter-sans-artist black-text"
                        >A talented artist who creates stunning artwork out of
                        thousands of cubes</span
                     >
                  </p>
                  <div class="contact-info-container1">
                     <div class="contact-info-container">
                        <div class="svg-container">
                           <svg
                              viewBox="0 0 24 24"
                              x="0"
                              y="0"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g
                                 id="material-symbols:mail-outline-rounded"
                                 data-node-id="107:183"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    id="Vector"
                                    data-node-id="107:184"
                                    d="M4,20c-0.55,0 -1.02,-0.196 -1.41,-0.587c-0.39,-0.391 -0.59,-0.862 -0.59,-1.413v-12c0,-0.55 0.2,-1.021 0.59,-1.412c0.39,-0.391 0.86,-0.587 1.41,-0.588h16c0.55,0 1.02,0.196 1.41,0.588c0.4,0.392 0.59,0.863 0.59,1.412v12c0,0.55 -0.2,1.021 -0.59,1.413c-0.39,0.392 -0.86,0.588 -1.41,0.587zM20,8l-7.48,4.675c-0.08,0.05 -0.17,0.088 -0.26,0.113c-0.09,0.025 -0.18,0.038 -0.26,0.037c-0.08,-0.001 -0.17,-0.013 -0.26,-0.037c-0.09,-0.024 -0.18,-0.062 -0.26,-0.113l-7.48,-4.675v10h16zM12,11l8,-5h-16zM4,8.25v-1.475v0.025v-0.012z"
                                    fill="black"
                                 />
                              </g>
                           </svg>
                        </div>
                        <p class="email-text-display-style">
                           dylan@thecollegecuber.com
                        </p>
                     </div>
                     <div class="location-info-container">
                        <div class="svg-container">
                           <svg
                              viewBox="0 0 24 24"
                              x="0"
                              y="0"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g
                                 id="mdi:location"
                                 data-node-id="107:187"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    id="Vector_2"
                                    data-node-id="107:188"
                                    d="M12,11.5c-0.66,0 -1.3,-0.263 -1.77,-0.732c-0.47,-0.469 -0.73,-1.105 -0.73,-1.768c0,-0.663 0.26,-1.299 0.73,-1.768c0.47,-0.469 1.11,-0.732 1.77,-0.732c0.66,0 1.3,0.263 1.77,0.732c0.47,0.469 0.73,1.105 0.73,1.768c0,0.328 -0.06,0.653 -0.19,0.957c-0.13,0.303 -0.31,0.579 -0.54,0.811c-0.23,0.232 -0.51,0.416 -0.81,0.542c-0.31,0.125 -0.63,0.19 -0.96,0.19zM12,2c-1.86,0 -3.64,0.737 -4.95,2.05c-1.31,1.313 -2.05,3.093 -2.05,4.95c0,5.25 7,13 7,13c0,0 7,-7.75 7,-13c0,-1.857 -0.74,-3.637 -2.05,-4.95c-1.31,-1.313 -3.09,-2.05 -4.95,-2.05z"
                                    fill="black"
                                 />
                              </g>
                           </svg>
                        </div>
                        <p class="location-label">NEW JERSEY, USA</p>
                     </div>
                  </div>
               </div>
               <div class="gallery-container">
                  <a href={twitter}>
                     <img
                        src="/contact-us-images/image_9c4e1876.png"
                        class="hierarchical-image-container"
                     />
                  </a>
                  <a href={facebook}>
                     <img
                        src="/contact-us-images/image_a02c3648.png"
                        class="hierarchical-image-container"
                     />
                  </a>
                  <a href={linkedin}>
                     <img
                        src="/contact-us-images/image_8427112a.png"
                        class="hierarchical-image-container"
                     />
                  </a>
                  <a href={instagram}>
                     <img
                        src="/contact-us-images/image_7896fe92.png"
                        class="hierarchical-image-container"
                     />
                  </a>
                  <a href={youtube}>
                     <img
                        src="/contact-us-images/image_be50ad04.png"
                        class="hierarchical-image-container"
                     />
                  </a>
                  <a href={tiktok}>
                     <img
                        src="/contact-us-images/image_ff0deeba.png"
                        class="hierarchical-image-container"
                     />
                  </a>
               </div>
            </div>
         {/if}
      </div>
   </div>
</div>

<style>
   .bottom-image {
      box-sizing: border-box;
      display: block;
      width: 100%;
      max-width: 1100px;
      height: 100%;
      position: absolute;
      top: 0;
      border: none;
      object-fit: cover;
   }
   .semi-transparent-holder {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);

      position: absolute;
      top: 0;
      z-index: 2;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
   }

   .black-text {
      color: black;
   }

   .artist-profile-container2 {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      position: relative;
      height: 340px;
      /* background-color: #073c4f; */
      /* background-image: linear-gradient(to right, #073c4f, #ffa500); */
      background-image: linear-gradient(
            135deg,
            #2c2424 0%,
            #251b25 25%,
            #0466ae 50%,
            #00070c 75%,
            #ffffff 100%
         ),
         linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.05) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.05) 75%,
            transparent 75%,
            transparent 100%
         );
      background-size:
         100% 100%,
         40px 40px;
   }
   .artist-profile-container {
      box-sizing: border-box;
      flex: 0 0 auto;
      height: 100%;
      display: grid;
      place-items: center;
      width: 100%;
   }
   .image-container {
      box-sizing: border-box;
      display: block;
      width: 100%;
      max-width: initial;
      height: 297px;
      border: none;
      object-fit: cover;
   }

   .artist-profile-card1 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding: 16px 20px;
      background-color: white;
      max-width: fit-content;
      border-radius: 10px;
      margin-right: 5vw;
   }
   .artist-profile-card {
      box-sizing: border-box;
      width: 100%;
   }
   .artist-bio-container {
      box-sizing: border-box;
      max-width: 364px;
      padding: 0;
      margin: 0;
      color: black;
      text-align: left;
   }
   .artist-name-text-style {
      font:
         600 16px/22px Inter,
         sans-serif;

      text-align: left;
      letter-spacing: 0.8px;
   }
   .vertical-spacing-divider {
      display: block;
      line-height: 5px;
   }
   .inter-sans-artist {
      font:
         500 16px/22px Inter,
         sans-serif;
      text-align: left;
   }
   .contact-info-container1 {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      width: 100%;
      margin-top: 28px;
   }
   .contact-info-container {
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
   }
   .svg-container {
      display: flex;
      flex: 0 0 auto;
      width: 24px;
      height: 24px;
   }
   .email-text-display-style {
      flex: 0 0 auto;
      padding: 0;
      margin: 0;
      margin-left: 11px;
      font:
         500 16px Inter,
         sans-serif;
      color: black;
   }
   .location-info-container {
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-top: 25px;
   }
   .location-label {
      flex: 0 0 auto;
      padding: 0;
      margin: 0;
      margin-left: 8px;
      font:
         500 16px Inter,
         sans-serif;
      color: black;
   }
   .gallery-container {
      display: flex;
      flex-direction: row;
      gap: 24px;
      align-items: center;
      justify-content: flex-start;
      margin-top: 40px;
   }
   .hierarchical-image-container {
      box-sizing: border-box;
      display: block;
      width: 40px;
      max-width: initial;
      height: 40px;
   }

   .red-text {
      color: #b71234;
      font-weight: 700;
      font-size: 110%;
   }

   @media screen and (max-width: 1180px) {
      .artist-profile-card1 {
         width: auto;
      }
   }
   @media screen and (max-width: 800px) {
      .gallery-container {
         gap: 16px;
      }
      .hierarchical-image-container {
         width: 30px;

         height: 30px;
      }
   }
   @media screen and (max-width: 710px) {
      .bottom-image {
         object-fit: cover;
      }
   }
   @media screen and (max-width: 520px) {
      .artist-profile-container {
         width: 100%;
      }
      .image-container {
         height: 35vw;
      }
      .artist-profile-container2 {
         flex-direction: column;
      }
      .artist-profile-card1 {
         width: 100%;
      }

      .artist-profile-card1 {
         margin-right: 0;
         margin: 16px;
      }
      .semi-transparent-holder {
         justify-content: center;
      }
   }
</style>
