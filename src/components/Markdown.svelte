<script>
  import { onMount } from "svelte";
  import marked from "marked";
  export let markdown;

  let markdownContainer;

  console.log(markdown);

  onMount(() => {
    markdownContainer.innerHTML = marked(markdown);
  });
</script>

<style>
  section {
    padding: 32px;
    background-color: #ffffff;
  }

  :global(.markdown-container) {
    color: gray;
    font-size: 16px;
  }

  :global(.markdown-container > h1, h2, h3, h4) {
    color: black;
    font-weight: bold;
    font-size: 18px;
    margin-top: 16px;
  }
</style>

<section>
  <div bind:this={markdownContainer} class="markdown-container" />
</section>
<button>Copy markdown?</button>
