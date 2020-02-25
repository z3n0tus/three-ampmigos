<script>
  import marked from "marked";
  export let markdown;

  const parsed = marked(markdown);
</script>

<style>
  section {
    padding: 32px;
    background-color: black;
  }
</style>

<section>
  <button>Copy markdown?</button>
  {@html parsed}
</section>
