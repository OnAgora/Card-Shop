import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build:{
		target: "esnext" // or "es2019",
 
	   },
	// Fixes issue with @onflow/fcl. "node-fetch" couldn't be used in client, so replaced it with "isomorphic-fetch"
	resolve: {
		alias: {
			'node-fetch': 'isomorphic-fetch'
		}
	}
});
