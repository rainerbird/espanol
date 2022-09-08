<script>
  export let colors;
  import Color from "../components/colores/Color.svelte";
</script>

<div>
  <ul class="grid w-full lg:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
    {#each colors as color}
      <Color {color} />
    {/each}
  </ul>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  ul {
    font-family: "CHANEY";
  }
</style>
