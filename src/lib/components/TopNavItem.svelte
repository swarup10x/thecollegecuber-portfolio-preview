<script>
    import { tweened } from "svelte/motion";
    import { cubicInOut } from "svelte/easing";

    export let href
    export let title

    let rotation = tweened(0, {
        duration: 500,
        easing: cubicInOut,
    });

    function animate() {
        rotation
            .set(10)
            .then(() => rotation.set(-10))
            .then(() => rotation.set(0));
    }
</script>

<a
    href={href}
    class="unique-header-style"
    on:mouseenter={animate}
    on:touchstart={animate}
    style="transform: rotate({$rotation}deg)">{title}</a
>



<style>

.unique-header-style {
        all: unset;
        cursor: pointer;
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font:
            600 15px Inter,
            sans-serif;
        color: white;
        padding: 4px;
        user-select: none;
    }

    .unique-header-style:hover{
          scale:1.05;
          transition:0.5s;
          color:#f31111
      }

      @media screen and (max-width: 600px) {


        .unique-header-style {
            font-size: 13px;
        }


    }
  </style>