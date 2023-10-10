<script lang="ts">
	import '../../../../app.css';
	import { user } from '$stores/flow/FlowStore';
	import { logOut, logIn, initializeAccount } from '$flow/actions';
</script>

<div class="flex w-[100%] px-[10px] md:px-[40px] py-[20px]">
	<div class="mr-auto text-[16px] sm:text-[18px] md:text-2xl font-medium flex">
		<div class="w-[40%] md:w-[100px] mr-[5px] md:mr-[1rem]">
			<a href="/"><img src="/images/CryptoCardLogo.png" alt="default avatar" /></a>
		</div>
		<div class="flex flex-col justify-center w-[100%] ml-[0.25rem]">
			<span>CryptoCard Store</span>
		</div>
		<div>
			{#if $user.addr == null}
				<div />
			{:else}
				{$user.addr}
			{/if}
		</div>
	</div>

	<div class="flex text-[10px] sm:text-[16px] md:text-[18px] font-normal">
		<button on:click={() => logIn()} class="h-[100%] flex flex-col justify-center mr-[5px]">
			<div class="bg-white border border-black px-2 md:px-3 py-1">Customize my Card</div>
		</button>
		<button
			on:click={() => logOut()}
			class="h-[100%] md:h-max-[63px] flex flex-col justify-center"
		>
			<div class="bg-white border border-black px-2 md:px-3 py-1">Cart</div>
		</button>
	</div>
</div>
