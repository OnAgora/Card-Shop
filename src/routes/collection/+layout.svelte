<script>
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';

	let currentURI = '';
	onMount(() => {
		currentURI = window.location.pathname;
	});
	afterUpdate(() => {
		currentURI = window.location.pathname;
	});
</script>

<div>
	<div class="flex justify-center font-mono">
		<div class="flex justify-center">
			{#if currentURI == '/collection'}
				<span style="color: rgba(193, 177, 81, 1);">Connect</span>
			{:else}
				<span>Connect</span>
			{/if}
			<div>
				<img src="/images/collection/arrow-right.svg" alt="default avatar" />
			</div>
		</div>
		<div class="flex justify-center">
			{#if currentURI == '/collection/preview'}
				<span style="color: rgba(193, 177, 81, 1);">Preview</span>
			{:else}
				<span>Preview</span>
			{/if}
			<div>
				<img src="/images/collection/arrow-right.svg" alt="default avatar" />
			</div>
		</div>
		<div class="flex justify-center">
			{#if currentURI == '/collection/preview/print'}
				<span style="color: rgba(193, 177, 81, 1);">Print</span>
			{:else}
				<span>Print</span>
			{/if}
		</div>
	</div>
	<main>
		<slot />
	</main>
</div>
