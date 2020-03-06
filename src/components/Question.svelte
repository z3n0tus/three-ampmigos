<script>
  import { onMount } from "svelte";

  export let question;
  export let submitAnswer;

  let answer = "";

  const submit = e => {
    if (e.key === "Enter") {
      submitAnswer(answer);
      answer = "";
    }
  };
</script>

<style>
  section {
    margin-top: 100px;
  }

  input {
    border: none;
    background-color: #f7f7f7;
    padding: 24px;
    width: 100%;
    font-size: 30px;
    outline: none;
  }

  small {
    float: right;
    margin-top: 10px;
  }
</style>

<section>
  <input
    type="text"
    placeholder={question}
    bind:value={answer}
    on:keypress={submit} />
  <small>Hit enter to save</small>
</section>
