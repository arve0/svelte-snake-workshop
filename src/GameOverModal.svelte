<script>
  import NesContainer from "./NesContainer.svelte";

  export let score;
</script>

<NesContainer>
  <h2 class="title">Game over</h2>
  <div>You got {score} points.</div>
</NesContainer>
