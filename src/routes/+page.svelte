<script lang="ts">
    const { data } = $props();
</script>

<ol>
    {#each data.pikachu.moves as move}
        <li>
            {move.move.name}
        </li>
    {/each}
</ol>
