

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5efc0b78.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js","_app/immutable/chunks/singletons.a27b23d6.js","_app/immutable/chunks/index.bb9a875c.js","_app/immutable/chunks/paths.6dd9d45f.js"];
export const stylesheets = [];
export const fonts = [];
