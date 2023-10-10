<script>
	import Header from '$lib/components/pages/layout/header.svelte';
	import Footer from '$lib/components/pages/layout/footer.svelte';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
