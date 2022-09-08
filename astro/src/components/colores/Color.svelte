<script>
  export let color;
  let hovering = false;

  const enter = () => {
    hovering = true;
  };

  const leave = () => (hovering = false);
</script>

<li class="relative" on:mouseenter={enter} on:mouseleave={leave}>
  <div
    style="background-color:{color.color.hex}"
    class="aspect-[4/3] flex items-center text-center justify-center text-6xl rounded-xl"
  >
    <span class="break-all" style="color:{color.text_color.hex}"
      >{color.name}</span
    >
  </div>
  {#if hovering}
    <div
      style="background-color:{color.text_color.hex}"
      class="aspect-[4/3] flex items-center text-center justify-center text-6xl rounded-xl absolute inset-0"
    >
      <span class="break-all" style="color:{color.color.hex}"
        >{color.translation}</span
      >
    </div>
  {/if}
</li>
