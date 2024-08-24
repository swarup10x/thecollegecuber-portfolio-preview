<script>


  export let services
  export let whatIDO
</script>

<div class="div-style-a36f431">
  <div class="div-style-c76d0442">
    <div class="div-style-3f4bbe8d">
      <div class="div-style-f77e6334">
        <p class="p-style-5f9e7af">Services</p>
        <p class="p-style-c562f7c8">What I do</p>
      </div>
      <p class="p-style-741a4d3d">
        {whatIDO}
      </p>
    </div>
    <div class="div-style-da0b6752">
      <!-- Repeated elements detected. These are rendered using loops & conditions in the React tab -->
       {#each services as service}
        
       <div class="div-style-4facab78 div-style-6761ebad">
         <div class="div-style-bda1af86">
           <p class="p-style-97a8ac3b">{service.type}</p>
           <div class="div-style-e8bdc7ee">
             <div class="div-style-f85a8a66">
               <p class="p-style-1ab7de87">{service.title}</p>
             </div>
             <div class="div-style-19c67a0c">
              {#each service.bulletPoints as point}
              <div class="div-style-ee63aa6 div-style-482a8635">
                <ul class="ul-style-d4d2cf5d">
                  <li>{point}</li>
                </ul>
              </div>
              {/each}
              
               
             </div>
           </div>
         </div>
         <a href="/contact-us" class="p-style-1493270f">Contact Us</a>
       </div>
       {/each}
      
      
    </div>
  </div>
</div>

<style>
  .div-style-a36f431 {
    box-sizing: border-box;
    width: 100%;
    padding-right: 100px;
    padding-left: 100px;
    margin-top: 20px;
    margin-bottom: 100px;
  }
  .div-style-f77e6334 {
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 20px;
  }
  .p-style-5f9e7af {
    padding: 0;
    margin: 0;
    font:
      500 16px Inter,
      sans-serif;
    color: #B71234;
  }
  .p-style-c562f7c8 {
    padding: 0;
    margin: 0;
    margin-top: 14px;
    font:
      600 40px Inter,
      sans-serif;
    color: black;
  }
  .div-style-c76d0442 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
  }
  .div-style-3f4bbe8d {
    box-sizing: border-box;
    flex: 0 0 auto;
    width: 320px;
    max-height: 272px;
    position: sticky;
    top: 0;
  }
  .p-style-741a4d3d {
    box-sizing: border-box;
    max-width: 374px;
    padding: 0;
    margin: 0;
    font:
      500 16px Inter,
      sans-serif;
    color: #434343;
    text-align: left;
  }
  .div-style-da0b6752 {
    box-sizing: border-box;
    flex: 0 0 auto;
    max-width: 61.94%;
    min-width: 336px;
    padding-top: 42px;
    padding-right: 48px;
    padding-left: 196px;
  }
  .div-style-4facab78 {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    max-width: 372px;
    padding-top: 42px;
    padding-bottom: 54px;
    border: 1px solid #b42340;
    border-radius: 24px;
  }
  .div-style-6761ebad {
    margin-top: 100px;
  }
  .div-style-4facab78:first-child {
    margin-top: 0px;
  }
  .div-style-bda1af86 {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 8px 12px;
  }
  .p-style-97a8ac3b {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    font:
      400 16px Inter,
      sans-serif;
    color: #2b2b2b;
    text-align: center;
    white-space: pre-wrap;
  }
  .div-style-e8bdc7ee {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 24px;
  }
  .div-style-f85a8a66 {
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 305px;
    height: 39px;
    padding-right: 9px;
    padding-left: 9px;
    background: #B71234;
    border-radius: 5px;
  }
  .p-style-1ab7de87 {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    font:
      600 16px Inter,
      sans-serif;
    color: white;
    text-align: center;
    white-space: pre-wrap;
  }
  .div-style-19c67a0c {
    box-sizing: border-box;
    flex: 0 0 auto;
    max-width: 306px;
    padding: 10px 9px;
    margin-top: 21px;
    background: #fbfbfb;
    border-radius: 5px;
  }
  .div-style-ee63aa6 {
    padding: 0;
    margin: 0;
    font:
      400 16px Inter,
      sans-serif;
    color: #393939;
    text-align: left;
    white-space: pre-wrap;
  }
  .div-style-482a8635 {
    box-sizing: border-box;
    width: 100%;
  }
  .div-style-ee63aa6:first-child {
    margin-top: 0px;
  }
  .ul-style-d4d2cf5d {
    padding-left: 1.5em;
    margin: 0;
    list-style: disc;
  }
  .p-style-1493270f {
    all:unset;
    cursor: pointer;
    flex: 0 0 auto;
    padding: 0;
    padding-right: 31px;
    padding-left: 55px;
    margin: 0;
    margin-top: 48px;
    font:
      500 18px Inter,
      sans-serif;
    color: #B71234;
    text-decoration-line: underline;
    white-space: pre-wrap;
  }

  .div-style-20118822 {
    flex: 0 0 auto;
    align-self: stretch;
    padding: 0;
    margin: 0;
    font:
      400 16px Inter,
      sans-serif;
    color: #393939;
    text-align: left;
    white-space: pre-wrap;
  }
  .button-style-9d399e3b {
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    width: 305px;
    min-width: 305px;
    height: 39px;
    font:
      600 16px Inter,
      sans-serif;
    color: white;
    cursor: pointer;
    background: #4b4b4b;
    border: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 1280px) {
    .div-style-a36f431 {
      padding-left: 40px;
      padding-right: 40px;
    }

    .div-style-da0b6752 {
      padding-left: 80px;
    }
  }

  @media screen and (max-width: 840px) {
    .div-style-a36f431 {
      padding-left: 40px;
      padding-right: 40px;
    }

    .div-style-da0b6752 {
      padding-left: 60px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 740px) {
    .div-style-c76d0442 {
      flex-direction: column;
    }
    .div-style-f77e6334 {
      padding-bottom: 10px;
    }

    .p-style-c562f7c8 {
      margin-top: 8px;
    }
    .div-style-da0b6752 {
      width: auto;
      padding: 0 2px;
    }
    .div-style-3f4bbe8d {
      width: auto;
      background-color: white;
      padding-bottom: 12px;
    }
    .p-style-741a4d3d {
      max-width: 100%;
      font:
        400 14px Inter,
        sans-serif;
    }
  }
  @media screen and (max-width: 500px) {
    .div-style-a36f431 {
      padding-left: 12px;
      padding-right: 12px;
    }
    .p-style-c562f7c8 {
      font-size: 32px;
    }
    .p-style-5f9e7af {
      font-size: 14px;
  }
  .div-style-4facab78 {
    width: 332px;
  }
  }
</style>
