

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.N7VQKpJz.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.HZSrFHzB.js"];
export const stylesheets = ["_app/immutable/assets/0.BNEHh-Mz.css"];
export const fonts = [];
