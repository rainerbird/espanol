<script>
  export let numeros;
  import Numero from "../components/numeros/Numero.svelte";
</script>

<div class="bg-zinc-900">
  <ul class="grid w-full grid-cols-2 lg:grid-cols-6 gap-2 p-2">
    {#each numeros as numero}
      <Numero {numero} />
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
