import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="flex justify-center font-mono"><div class="flex justify-center">${`<span data-svelte-h="svelte-qch5go">Connect</span>`} <div data-svelte-h="svelte-qmil25"><img src="/images/collection/arrow-right.svg" alt="default avatar"></div></div> <div class="flex justify-center">${`<span data-svelte-h="svelte-1fg7euy">Preview</span>`} <div data-svelte-h="svelte-qmil25"><img src="/images/collection/arrow-right.svg" alt="default avatar"></div></div> <div class="flex justify-center">${`<span data-svelte-h="svelte-1nrxc3j">Print</span>`}</div></div> <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
