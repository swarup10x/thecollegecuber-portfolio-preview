<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
  
    const eventNames = [
      "Sporting Events",
      "Influencer Marketing",
      "Product Marketing",
      "Corporate Events",
      "College Events",
      "Weddings",
      "Bar Mitzvahs",
      "Music Festivals",
      "Art Festivals",
      "Food Festivals",
      "Any Event!",
    ];
  
    let currentIndex = 0;
    let currentEvent = eventNames[0];
    let uniqueKey = crypto.randomUUID();
  
    function updateEvent() {
      currentIndex++;
      if (currentIndex >= eventNames.length) currentIndex = 0;
      currentEvent = eventNames[currentIndex];
      uniqueKey = crypto.randomUUID();
    }
  
    onMount(() => {
      setInterval(updateEvent, 2000);
    });
  </script>
  
  <div>
    {#key uniqueKey}
      <p
        transition:fly={{
          delay: 100,
          duration: 500,
          y: 100,
          opacity: 0.5,
          easing: quintOut,
        }}
        class="event-title-text-style1"
      >
        {currentEvent}
      </p>
    {/key}
  </div>
  
  <style>
    div {
      height: 100px;
      display: grid;
      place-items: center;
      text-align: center;
    }
  </style>
  