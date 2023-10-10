

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6edaffc5.js","_app/immutable/chunks/scheduler.3a487809.js","_app/immutable/chunks/index.f800d987.js","_app/immutable/chunks/actions.1905189a.js","_app/immutable/chunks/index.bb9a875c.js"];
export const stylesheets = ["_app/immutable/assets/3.1d14adf2.css"];
export const fonts = [];
