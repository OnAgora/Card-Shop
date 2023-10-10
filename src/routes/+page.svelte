<script>
	import { HtmlHead } from '$lib/components/atoms';
	import {
		ConnectWalletSection,
		VideoSection,
		CoparisonSection,
		StepSection,
		ShareSection
	} from '$lib/components/pages/home';
</script>

<HtmlHead title="Home" />
<ConnectWalletSection />
<VideoSection />
<CoparisonSection />
<StepSection />
<ShareSection />

<style lang="postcss">
	:global(html) {
		background-color: white;
		font-family: Sequel Sans;
	}
</style>
