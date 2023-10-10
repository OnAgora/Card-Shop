<script lang="ts">
	import { dappTitle } from '$lib/config/config';

	export let title: string;
</script>

<svelte:head>
	<title>{dappTitle} • {title}</title>
</svelte:head>
