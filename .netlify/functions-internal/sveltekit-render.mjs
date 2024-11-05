import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/nostr.json","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","audio/power_of_love.mp3","favicon-16x16.png","favicon-32x32.png","favicon.ico","img/avatar.jpg","img/bg.jpg","img/button_moar-magic.png","img/cloud.png","img/ferglier.gif","img/pipes.png","img/thanyou.gif","site.webmanifest"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".mp3":"audio/mpeg",".jpg":"image/jpeg",".gif":"image/gif",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.BriLOS0s.js","app":"_app/immutable/entry/app.D0ZiaBFV.js","imports":["_app/immutable/entry/start.BriLOS0s.js","_app/immutable/chunks/entry.BVdMOQbs.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.D0ZiaBFV.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.HZSrFHzB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/.well-known/webfinger",
				pattern: /^\/\.well-known\/webfinger\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/.well-known/webfinger/_server.ts.js'))
			},
			{
				id: "/api/visit",
				pattern: /^\/api\/visit\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/visit/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
