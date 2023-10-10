<script lang="ts">
	import { onMount } from 'svelte';
	import { user, momments } from '$stores/flow/FlowStore';
	import { getOwnedNFTs } from '$flow/actions';
	import AxiosService from '../../../../services/Axios/Axios.service';
	import NFT from '$lib/components/pages/collection/NFT.svelte';

	let collectionDatas = [];

	onMount(async () => {
		if ($user.addr) {
			const nftIDsList = await getOwnedNFTs();
			console.log($user.addr, 'Videos', await AxiosService.getVideo(nftIDsList[0]));
			for (let i = 0; i < nftIDsList.length; i++) {
				collectionDatas.push({
					id: nftIDsList[i],
					image: `https://assets.nbatopshot.com/media/${nftIDsList[i]}/video-tall`,
					title: 'Name of the NFT',
					subTitle: 'Subtitle',
					price: '$125.00'
				});
				collectionDatas = [...collectionDatas];
			}
		} else {
			//	console.log('No account connected');
		}
	});

	import { beforeUpdate } from 'svelte';
	import { updated } from '$app/stores';

	beforeUpdate(async () => {
		console.log('the component is about to update');
		if ($user.addr) {
			const nftIDsList = await getOwnedNFTs();
			//	console.log($user.addr, 'before', nftIDsList);
		}
	});

	const nfts = [2, 3];

	momments.subscribe((momment) => {
		console.log('Subscribe');
	});

	console.log(momments, 'MOMMENTS');
</script>

<div>
	<!-- <h1>COLLECTION PAGE {$user.addr}</h1>
	<div class="flex gap-x-[1rem]">
		{#each nfts as nft}
			<NFT />
		{/each}
	</div> -->
	<div class="mt-14 relative">
		<div class="mx-auto max-w-7xl max-w-1400 px-2 font-mono">
			<!-- title -->
			<div class="collection-title lg:text-4xl text-2xl text-center font-bold">
				Which card would you want to print?
			</div>

			<!-- search section -->
			<div class="my-10">
				<div class="relative max-w-4xl m-auto">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							class="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						class="block w-full bg-[#F2F4F8] p-3 pl-10 text-sm text-gray-900 border border-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for your NFT"
						required
					/>
				</div>
			</div>
			<!--  -->
			<div>
				<div class="flex gap-10 justify-center">
					<div class="text-center">
						<div class="my-3">
							<span>Color</span>
						</div>
						<div class="flex gap-5 h-[70px]">
							<div class="w-[40px] h-[40px] m-auto bg-white border-2 rounded-full cursor-pointer" />

							<div
								class="w-[40px] h-[40px] m-auto bg-black border-2 rounded-full cursor-pointer border-[#C1B151] p-1"
							/>
						</div>
					</div>
					<div class="text-center">
						<div class="my-3">
							<span>Frame size</span>
						</div>
						<div class="flex gap-5 h-[70px] justify-center align-center">
							<div
								class="w-[40px] h-[60px] m-auto bg-[#D9D9D9] border-[#C1B151] border-2 border-gray-300 cursor-pointer"
							/>
							<div
								class="w-[40px] h-[40px] m-auto bg-white border-2 border-gray-300 cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-10 relative w-full text-center">
				{#each collectionDatas as collectionData}
					<div
						class="xl:w-[32%] lg:w-1/2 mx-2 sm:w-full px-2 py-5 rounded-3xl inline-block mb-5"
						style="box-shadow: 0px 4px 30px 0px rgba(217, 217, 217, 1);"
					>
						<div>
							<video width="100%" autoplay class="rounded">
								<source src={collectionData.image} type="video/mp4" />
								<track kind="captions" src="captions.vtt" label="English" default />
							</video>
						</div>
						<div class="text-center mt-10">
							<div>
								<span class="font-bold text-xl">{collectionData.title}</span>
							</div>
							<div class="mt-5">
								<span>{collectionData.subTitle}</span>
							</div>
							<div class="mt-5">
								<span class="font-bold text-xl">{collectionData.price}</span>
							</div>
							<div class="mt-5">
								<a href="/collection/preview"
									><button class="border border-black px-7 py-3 font-bold">Select</button>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
