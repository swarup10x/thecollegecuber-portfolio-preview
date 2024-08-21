<script>
    export let faqs = [
        {
            q: "How long does it take?",
            a: "Just under 3 hours, from the placement of the first cube to the final one. However, Thanks to my careful preparations, I can effectively complete my live performance in under 1 hour, while still delivering exceptional artistic quality.",
        },
        {
            q: "Do you ONLY work in sports?",
            a: "Not at all! If you are organizing an event of any scale, I offer a distinctive and captivating live entertainment experience that is certain to make a lasting impression. From weddings and bar mitzvahs to corporate events, college functions, charitable gatherings, and a wide range of occasions",
        },
        {
            q: "Do you ONLY create headshots?",
            a: "I find headshots to be particularly difficult and, as a result, the most captivating. The intricate designs and attention to detail make them stand out in my portfolio. However, I am open and capable of creating logos, mascots, or any customized artwork that aligns with the unique requirements of each occasion.",
        },
        {
            q: "Are you willing to travel?",
            a: "Yes! Although my studio is in New Jersey, I’m more than happy and flexible to travel within AND beyond the borders of the United States. With a portable and easily transportable setup, I am well-equipped to bring my artwork to various locations, opening up remarkable opportunities to share my creativity with a global audience.",
        },
        {
            q: "Tell more about you?",
            a: "A talented artist. A Biomedical Engineering graduate from Rutgers University. I use my engineering knowledge to create intricate designs that are not only aesthetically pleasing but also a testament to my skills as an engineer. My passion for sports is reflected in my work, as i love creating headshots of professional athletes",
        },
    ];

    let a = "";
</script>

<div class="div-style-f77e6334">
    <div class="div-style-1e57c643">
        <p class="p-style-721f3cd5">Frequently Asked Questions</p>
        <p class="p-style-c654f723">FAQs</p>
    </div>

    <div class="div-style-a8da91ad border-bottom-none">
        <img
            src="/art-page-images/image_8ed144eb.png"
            class="img-style-b9f5d209"
        />
        <div class="div-style-76bb893">
            <p class="p-style-a82e0280">{faqs[0].q}</p>
            <p class="p-style-f3a2391a">
                {faqs[0].a}
            </p>
        </div>
    </div>
    <div class="div-style-ec3a5c18 border-bottom-none">
        <img
            src="/art-page-images/image_c6ed19ef.png"
            class="img-style-b9f5d209"
        />
        <div class="div-style-76bb893">
            <p class="p-style-a82e0280">{faqs[1].q}</p>
            <p class="p-style-f3a2391a">
                {faqs[1].a}
            </p>
        </div>
    </div>

    <div class="div-style-52e303a5 border-bottom-none">
        <img
            src="/art-page-images/image_8ed144eb.png"
            class="img-style-b9f5d209"
        />
        <div class="div-style-76bb893">
            <p class="p-style-a82e0280">{faqs[2].q}</p>
            <p class="p-style-f3a2391a">
                {faqs[2].a}
            </p>
        </div>
    </div>
    <div class="div-style-ec3a5c18">
        <img
            src="/art-page-images/image_c6ed19ef.png"
            class="img-style-b9f5d209"
        />
        <div class="div-style-76bb893">
            <p class="p-style-a82e0280">{faqs[3].q}</p>
            <p class="p-style-f3a2391a">
                {faqs[3].a}
            </p>
        </div>
    </div>
    <div class="div-style-52e303a5 border-top-none">
        <img
            src="/art-page-images/image_c6ed19ef.png"
            class="img-style-b9f5d209"
        />
        <div class="div-style-76bb893">
            <p class="p-style-a82e0280">{faqs[4].q}</p>
            <p class="p-style-f3a2391a">
                {faqs[4].a}
            </p>
        </div>
    </div>
</div>

<style>
    .div-style-f77e6334 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 1280px;
    }

    .div-style-1e57c643 {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        padding-top: 134px;
        padding-bottom: 171px;
    }

    .p-style-721f3cd5 {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:
            500 14px Inter,
            sans-serif;
        color: #747474;
    }

    .p-style-c654f723 {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        margin-top: 12px;
        font:
            600 42px Inter,
            sans-serif;
        color: black;
    }

    .div-style-a8da91ad {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 378px;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;

        padding: 60px 32px 32px 32px;
        background: #f9f9f9;
        border: 1px solid #939393;
    }

    .img-style-b9f5d209 {
        box-sizing: border-box;
        display: block;
        flex: 0 0 auto;
        width: 47px;
        max-width: initial;
        height: 31px;
    }

    .div-style-76bb893 {
        flex: 0 0 auto;
        margin-top: 37px;
    }

    .p-style-a82e0280 {
        padding: 0;
        margin: 0;
        font:
            500 20px Inter,
            sans-serif;
        color: black;
    }

    .p-style-f3a2391a {
        box-sizing: border-box;
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 13px;
        font:
            400 16px Inter,
            sans-serif;
        color: #535353;
        text-align: left;
    }

    .div-style-ec3a5c18 {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;

        padding: 60px 32px 32px 32px;
        background: #f9f9f9;
    }

    .div-style-52e303a5 {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;

        padding: 60px 32px 32px 32px;
        background: #f9f9f9;
        border: 1px solid #939393;
    }

    .div-style-786fe775 {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: stretch;
        align-self: center;
        justify-content: center;
    }

    @media screen and (max-width: 940px) {
        .div-style-f77e6334 {
            grid-template-columns: repeat(2, 1fr);
        }

        .div-style-ec3a5c18 {
            border: 1px solid #939393;
            border-right: none;
        }
        .border-bottom-none {
            border-bottom: none;
        }
    }
    @media screen and (max-width: 640px) {
        .div-style-f77e6334 {
            grid-template-columns: repeat(1, 1fr);
        }
        .div-style-ec3a5c18 {
            border-right: 1px solid #939393;
        }
        .border-top-none {
            border-top: none;
        }
    }
</style>
