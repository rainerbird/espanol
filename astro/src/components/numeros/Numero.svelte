<script>
  export let numero;
  let hovering = false;

  const enter = () => {
    hovering = true;
  };

  const leave = () => (hovering = false);
</script>

<li
  class="relative {numero.number.includes(',') ? 'col-span-full' : ''}"
  on:mouseenter={enter}
  on:mouseleave={leave}
>
  <div
    class="bg-white aspect-[1/1] flex items-center text-center justify-center  {numero
      .number.length > 5
      ? 'text-8xl'
      : 'text-9xl'}"
  >
    <span class="break-all">{numero.number}</span>
  </div>
  {#if hovering}
    <div
      class="bg-zinc-900 z-10 flex items-center text-center justify-center text-4xl  absolute inset-0 p-5"
    >
      <span class="break-word text-white">{numero.word}</span>
    </div>
  {/if}
</li>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
