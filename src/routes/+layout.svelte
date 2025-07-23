<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<div class="p-2">
	<a class="p-2 underline" href="/">Page 1</a>
	<a class="p-2 underline" href="/page2">Page 2</a>
</div>

{@render children()}
