/** @format */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import * as fcl from "@onflow/fcl";
import "./config";
import { browser } from '$app/environment';
import { user, momments } from "$stores/flow/FlowStore";
import { navigate } from 'svelte-routing';

/*  fcl.config()
    .put("accessNode.api", "https://testnet.onflow.org")
    .put("discovery.wallet", "https://flow-wallet-testnet.blocto.app/authn");  */

// ///////////////
// // Cadence code
// ///////////////

// Lifecycle FCL Auth functions
export const logOut = () => fcl.unauthenticate();
export const logIn = async () => {
	await fcl.logIn(); 
	navigate("/collection");
	location.reload();
}
export const currentUser = () => fcl.currentUser


// Scripts imports
import { getOwnedNFTs as getOwnedNFTsScript } from "./Cadence/scripts/get_owned_nfts";

// Transactions imports
import { setupPiece as setupPieceScript } from "./Cadence/transactions/setupPiece";


//
// // ****** Script Functions ****** //
//

// Get list of Collection's owned NFTs.
export const getOwnedNFTs = async () => {
	try {
		const response = await fcl.query({
		  cadence: getOwnedNFTsScript(),
		  args: (arg: any, t: any) => [
			arg("0x6278d56bbbcdd338", t.Address),
		  ],
		});
	// console.log(response);
		return response;
	  } catch (e) {
		console.log(e);
	  }
}



//
// // ****** Transaction Functions ****** //
//

// Initialize an Account with the NFT collection (Piece)
export const initializeAccount = async () => {
  
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (resolve, reject) => {
	  try {
		const transactionId = await fcl.mutate({
		  cadence: setupPieceScript(),
		  proposer: fcl.currentUser,
		  payer: fcl.currentUser,
		  authorizations: [fcl.currentUser],
		  limit: 500
		});
		const transaction = await fcl.tx(transactionId).onceSealed()
		console.log(transaction) // The transactions status and events after being sealed
	  } catch (e) {
		console.log(e);
		reject(false);
	  }
	});
  }

if (browser) {
	// set Svelte $user store to currentUser,
	// so other components can access it
	fcl.currentUser.subscribe(user.set);

 	const nfts = await getOwnedNFTs()
	momments.set(nfts) 
	console.log("browser update")
}
