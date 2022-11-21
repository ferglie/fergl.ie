export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/power_of_love.mp3","favicon.png","img/bg.jpg","img/button_moar-magic.png","img/cloud.png","img/ferglier.gif","img/pipes.png","img/thanyou.gif"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif"},
	_: {
		entry: {"file":"_app/immutable/start-2b16e49c.js","imports":["_app/immutable/start-2b16e49c.js","_app/immutable/chunks/index-9221db71.js","_app/immutable/chunks/singletons-66428a2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/visit",
				pattern: /^\/api\/visit\/?$/,
				names: [],
				types: [],
				optional: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/visit/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
