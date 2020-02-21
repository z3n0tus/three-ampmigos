<script>
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

<p>{question}</p>
<input type="text" bind:value={answer} on:keypress={submit} />
