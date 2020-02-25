<script>
  import Question from "../components/Question.svelte";
  import Markdown from "../components/Markdown.svelte";
  import questions from "../questions";

  let begun = true;
  let questionIndex = 0;
  let markdown = "";
  let finished = false;

  $: question = questions[questionIndex].question;

  const appendMarkdown = answer => {
    markdown += questions[questionIndex].markdown(answer);
  };

  const submitAnswer = answer => {
    appendMarkdown(answer);
    questionIndex += 1;

    if (questionIndex === questions.length - 1) {
      finished = true;
    }
  };
</script>

<style>
  button {
    padding: 8px 32px;
    border-radius: 5px;
    font-size: 1rem;
  }
</style>

<svelte:head>
  <title>Three Ampmigos</title>
</svelte:head>

{#if !finished}
  {#if !begun}
    <button on:click={() => (begun = true)}>Begin</button>
  {:else}
    <Question {question} {submitAnswer} />
  {/if}
{:else}
  <Markdown {markdown} />
{/if}
