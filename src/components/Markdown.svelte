<script>
  import marked from "marked";
  export let markdown;

  const parsed = marked(markdown);
</script>

<button>Copy markdown?</button>
{@html parsed}
