import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { count = 0 } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div>You are visitor number: ${escape(count)}</div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><div class="${"flex space-x-4 justify-center"}"><a href="${"/github"}" target="${"_blank"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Github</a>
		<a href="${"/youtube"}" target="${"_blank"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">YouTube</a>
		<a href="${"/twitter"}" target="${"_blank"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Twitter</a>
		<a href="${"/mixcloud"}" target="${"_blank"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Mixcloud</a>
		<a href="${"/soundcloud"}" target="${"_blank"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Soundcloud</a>
		<a href="${"/mixes"}" target="${"_blank"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}">Music</a></div></nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col h-screen bg-hero-pattern bg-repeat animate-ltr-linear-infinite bg-wrapper overflow-hidden bg-gray-700"}"><header class="${"p-4"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>
	<main class="${"-mt-8 flex-grow"}"><div class="${"flex flex-col items-center justify-center h-screen mx-auto"}"><header class="${"-mt-40"}"><img alt="${"Ferglier Gif"}" src="${"img/ferglier.gif"}">
                <br>
                <img alt="${"Than You Gif"}" src="${"img/thanyou.gif"}">
                <br></header>

            <button class="${"bg-red-500 text-white p-6 rounded text-2xl font-bold overflow-hidden shadow-2xl hover:bg-purple-400 press focus:outline-none focus:ring-2 active:bg-pink-600"}">\u{1FA84} MOAR MAGIC
            </button></div></main>
	<footer class="${"p-4"}"><div class="${"absolute bottom-0 left-1 text-gray-100 animate-bounce"}">${validate_component(Counter, "Counter").$$render($$result, { count: data.count }, {}, {})}</div>
		<div class="${"absolute bottom-0 right-1 text-gray-100 animate-bounce"}"><a href="${"https://github.com/ferglie/fergl.ie"}" target="${"_blank"}" rel="${"noreferrer"}">Built with good codes </a></div></footer></div>

<audio loop><source src="${"audio/power_of_love.mp3"}" type="${"audio/mpeg"}"></audio>`;
});
export {
  Page as default
};
