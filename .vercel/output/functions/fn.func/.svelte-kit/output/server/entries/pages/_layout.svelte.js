import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { u as user } from "../../chunks/history.js";
import "@onflow/fcl";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<div class="flex w-[100%] px-[10px] md:px-[40px] py-[20px]"><div class="mr-auto text-[16px] sm:text-[18px] md:text-2xl font-medium flex"><div class="w-[40%] md:w-[100px] mr-[5px] md:mr-[1rem]" data-svelte-h="svelte-zq1jd4"><a href="/"><img src="/images/CryptoCardLogo.png" alt="default avatar"></a></div> <div class="flex flex-col justify-center w-[100%] ml-[0.25rem]" data-svelte-h="svelte-9xgxhh"><span>CryptoCard Store</span></div> <div>${$user.addr == null ? `<div></div>` : `${escape($user.addr)}`}</div></div> <div class="flex text-[10px] sm:text-[16px] md:text-[18px] font-normal"><button class="h-[100%] flex flex-col justify-center mr-[5px]" data-svelte-h="svelte-hu7u7i"><div class="bg-white border border-black px-2 md:px-3 py-1">Customize my Card</div></button> <button class="h-[100%] md:h-max-[63px] flex flex-col justify-center" data-svelte-h="svelte-wz390n"><div class="bg-white border border-black px-2 md:px-3 py-1">Cart</div></button></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex justify-center gap-x-[100px] text-xl border-t border-black p-[40px] mt-[40px]" data-svelte-h="svelte-fkfqjf"><p>Contact Us</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
