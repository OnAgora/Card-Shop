

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/collection/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.1fb36ff0.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js","_app/immutable/chunks/each.3d878967.js","_app/immutable/chunks/actions.1905189a.js","_app/immutable/chunks/index.bb9a875c.js","_app/immutable/chunks/paths.6dd9d45f.js"];
export const stylesheets = [];
export const fonts = [];
