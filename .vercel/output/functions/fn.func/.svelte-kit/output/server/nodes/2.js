

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/collection/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0cc71d95.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js"];
export const stylesheets = [];
export const fonts = [];
