export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Ape.png","images/BlackVector.png","images/CryptoCardLogo.png","images/Frame49.png","images/JaMorant.png","images/Morant2.png","images/Rectangle 16.png","images/Socials.png","images/TwitterAd.png","images/Vector.svg","images/Vector5.png","images/Video.png","images/YellowVector.png","images/YouTubeIcon.png","images/blackBall.svg","images/collection/arrow-right.svg","images/collection-preivew-image.png","images/collectionPreview (1).png","images/collectionPreview (2).png","images/collectionPreview (3).png","images/collectionPreview (4).png","images/collectionPreview (5).png","images/facebook.png","images/image-3.png","images/instagram.png","images/loveIcon.svg","images/previewIcon.svg","images/twitter.png","images/walletIcon.svg","images/whiteBall.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.3a4f5d65.js","app":"_app/immutable/entry/app.f1582bbf.js","imports":["_app/immutable/entry/start.3a4f5d65.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/singletons.a27b23d6.js","_app/immutable/chunks/index.bb9a875c.js","_app/immutable/chunks/paths.6dd9d45f.js","_app/immutable/entry/app.f1582bbf.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/collection",
				pattern: /^\/collection\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/collection/preview",
				pattern: /^\/collection\/preview\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/collection/preview/print",
				pattern: /^\/collection\/preview\/print\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
