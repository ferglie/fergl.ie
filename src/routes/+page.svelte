<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	const releaseTheMagic = () => {
		document.querySelector('audio')?.play();
	};
	export let data: any;
</script>

<div
	class="flex flex-col h-screen overflow-hidden bg-gray-700 bg-repeat bg-hero-pattern animate-ltr-linear-infinite bg-wrapper"
>
	<header class="p-4"><Navbar /></header>
	<main class="flex-grow -mt-8">
		<div class="flex flex-col items-center justify-center h-screen mx-auto">
			<div class="-mt-40">
				<img alt="Ferglier Gif" src="img/awesome-just-awesome.gif" />
			</div>

			<button
				class="p-6 overflow-hidden text-2xl font-bold text-white bg-red-500 rounded shadow-2xl hover:bg-purple-400 press focus:outline-none focus:ring-2 active:bg-pink-600"
				on:click={releaseTheMagic}
			>
				🪄 MOAR MAGIC
			</button>
		</div>
	</main>
	<footer class="p-4">
		<div class="absolute bottom-0 text-gray-100 left-1 animate-bounce">
			<Counter count={data.count} />
		</div>
		<div class="absolute bottom-0 text-gray-100 right-1 animate-bounce">
			<a href="https://github.com/ferglie/fergl.ie" target="_blank" rel="noreferrer">
				Built with good codes
			</a>
		</div>
	</footer>
</div>

<audio loop>
	<source src="audio/power_of_love.mp3" type="audio/mpeg" />
</audio>
