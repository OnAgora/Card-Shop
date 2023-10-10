

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/collection/preview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.b8c42d7d.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js","_app/immutable/chunks/each.3d878967.js"];
export const stylesheets = [];
export const fonts = [];
