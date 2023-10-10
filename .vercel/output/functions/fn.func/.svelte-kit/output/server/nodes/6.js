

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/collection/preview/print/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.0ee35fe0.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js"];
export const stylesheets = [];
export const fonts = [];
