<script lang="ts">
    const { data } = $props();
</script>

<!-- This is Ok! -->
<!-- {data.obj.arr} -->

<!-- This is Ok! -->
<!-- {#await new Promise((f) => f(data.obj.arr)) then result}
    <p>Hello from inside {"{"}#await{"}"}</p>
    {#each result as _}
        <p>Hello from inside nested {"{"}#each{"}"}</p>
    {/each}
{/await} -->

<!-- Causes error -->
<!-- {#key data.obj.arr}
    <p>Hello from inside {'{'}#key{'}'}</p>
{/key} -->

<!-- Causes error! -->
<!-- {#if data.obj.arr}
    <p>Hello from inside {'{'}#if{'}'}</p>
{/if} -->


<!-- Causes error! -->
{#each data.obj.arr as _}
    <p>Hello from inside {'{'}#each{'}'}</p>
{/each}
