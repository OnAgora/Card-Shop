<script>
	let collectionImages = [
		{
			id: 1,
			image: '/images/collectionPreview (1).png'
		},
		{
			id: 2,
			image: '/images/collectionPreview (2).png'
		},
		{
			id: 3,
			image: '/images/collectionPreview (3).png'
		},
		{
			id: 4,
			image: '/images/collectionPreview (4).png'
		},
		{
			id: 5,
			image: '/images/collectionPreview (5).png'
		}
	];
</script>

<div>
	<div class="mt-14 relative">
		<div class="mx-auto max-w-7xl max-w-1400 px-2 font-mono">
			<!-- title -->
			<div class="collection-title lg:text-4xl text-2xl text-center font-bold">
				Create and preview your moving art.
			</div>

			<div class="block mt-14 w-full">
				<div class="lg:w-[64%] w-full inline-block">
					<div class="flex">
						<div class="block">
							{#each collectionImages as collectionImage}
								<div class="block mb-5 cursor-pointer">
									<img src={collectionImage.image} alt="collectionPreview (1).png " />
								</div>
							{/each}
						</div>
						<div class="w-full">
							<img src="/images/collection-preivew-image.png" alt="preivew_iamge" />
						</div>
					</div>
				</div>
				<div class="lg:w-[32%] w-full inline-block">
					<div>
						<span class="font-bold text-xl">Name of the NFT</span>
					</div>
					<div class="mt-6">
						<span>Subtitle</span>
					</div>
					<div class="mt-5">
						<span class="font-bold text-xl">$125.00</span>
					</div>
					<div class="mt-6">
						<span>Ship in 3-5 business days</span>
					</div>
					<div class="mt-5">
						<a href="/collection/preview/print">
							<button class="border text-white text-xl w-full bg-black px-7 py-3 font-bold">
								Add to Cart
							</button>
						</a>
					</div>
					<hr style="border: 2px solid black;" class="w-full my-10" />
					<div class="flex gap-8 align-center">
						<div class="my-auto w-[90px]">
							<span class="font-bold">Color</span>
						</div>
						<div class="flex gap-3 my-auto">
							<div class="rounded-full h-[40px] w-[40px] bg-black border-[#C1B151] border" />
							<div class="rounded-full h-[40px] w-[40px] bg-white border-black border" />
						</div>
					</div>
					<div class="flex gap-8 align-center mt-5">
						<div class="my-3 w-[90px]">
							<span class="font-bold">Frame size</span>
						</div>
						<div class="flex gap-5 h-[70px] justify-center align-center">
							<div
								class="w-[40px] border-[#C1B151] h-[60px] m-auto bg-[#D9D9D9] border-2 border-gray-300 cursor-pointer"
							/>
							<div
								class="w-[40px] h-[40px] m-auto bg-white border-2 border-gray-300 cursor-pointer"
							/>
						</div>
					</div>
					<div class="mt-10">
						<div>
							<span class="font-bold">CryptoCard details</span>
						</div>
						<div>
							<div class="my-4">
								* 4.0" IPS LCD (854px x 480px)<br /> &nbsp;&nbsp;3.38"​ x 2.05" display area
							</div>
							<div class="mb-4">
								* Pocket size acrylic case<br /> &nbsp;&nbsp;5.44" x 3.5" x 1.0"​
							</div>
							<div class="mb-4">* Engraved CryptoID tag</div>
							<div class="mb-4">
								* USB cable and adaptor​<br /> &nbsp;&nbsp;600 mA battery​
							</div>
							<div class="mb-4">* Certificate of Authenticity</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-16 text-center">
				<a href="/collection"
					><button class="border border-black px-7 text-xl py-3 font-bold"
						>Back to my collection</button
					></a
				>
			</div>
		</div>
	</div>
</div>
