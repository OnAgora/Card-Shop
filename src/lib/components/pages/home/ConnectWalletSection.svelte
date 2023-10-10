<script lang="ts">
	import { logIn } from '$flow/actions';
</script>

<div id="section" class=" flex my-[40px]">
	<section class="flex flex-col lg:flex-row justify-center gap-x-[200px] w-[90%] mx-auto lg:mx-0">
		<div class=""><img src="/images/JaMorant.png" alt="default avatar" /></div>
		<div class="mt-[2rem] lg:mt-0 flex">
			<div>
				<div
					class="flex text-center lg:text-left text-[35px] md:text-[48px] xl:text-[52px] md:max-w-[500px] lg:max-w-[625px] text-black font-bold md:leading-[80px]"
				>
					<span class="">LCD Slabs for your Digital Collectibles</span>
				</div>
				<div class="my-[50px] flex flex-col gap-y-9 md:gap-y-12 lg:gap-y-14">
					<div class="flex gap-x-7 justify-center lg:justify-start">
						<div>
							<img alt="Wallet SVG" src="/images/walletIcon.svg" class="h-[60px] w-[60px]" />
						</div>
						<div class="flex flex-col justify-center">
							<span class="text-[22px] sm:text-[26px] lg:text-[28px]">Connect your wallet</span>
						</div>
					</div>
					<div class="flex gap-x-7 justify-center lg:justify-start">
						<div>
							<img alt="PreviewIcon SVG" src="/images/previewIcon.svg" class="h-[60px] w-[60px]" />
						</div>
						<div class="flex flex-col justify-center">
							<span class="text-[22px] sm:text-[26px] lg:text-[28px]">Preview in the frame</span>
						</div>
					</div>
					<div class="flex gap-x-7 lg:justify-start pl-[35px] lg:p-0">
						<div class="flex justify-center">
							<div class="h-[16px] w-[16px] absolute self-center">
								<img alt="LoveIcon SVG" src="/images/loveIcon.svg" class="h-[16px] w-[16px]" />
							</div>
							<img alt="Wallet SVG" src="/images/Vector.svg" class="h-[60px] w-[60px]" />
						</div>
						<div class="flex flex-col justify-center lg:justify-start">
							<span class="text-[22px] sm:text-[26px] lg:text-[28px]">Print and enjoy!</span>
						</div>
					</div>
				</div>
				<div class="flex justify-center lg:justify-start">
					<button
						on:click={() => logIn()}
						class="bg-[#333333] w-fit py-[6px] px-[24px] border flex"
					>
						<span class="text-white text-[22px] sm:text-[26px]">Connect wallet to print!</span>
					</button>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	#section {
		font-family: JetBrains Mono;
	}
</style>
