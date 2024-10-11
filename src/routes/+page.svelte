<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	const releaseTheMagic = () => {
		document.querySelector('audio')?.play();
	};
	export let data: any;
</script>

<div
	class="flex flex-col h-screen bg-hero-pattern bg-repeat animate-ltr-linear-infinite bg-wrapper overflow-hidden bg-gray-700"
>
	<header class="p-4"><Navbar /></header>
	<main class="-mt-8 flex-grow">
		<div class="flex flex-col items-center justify-center h-screen mx-auto">
			<div class="-mt-40">
				<img alt="Ferglier Gif" src="img/awesome-just-awesome.gif" />
			</div>

			<button
				class="bg-red-500 text-white p-6 rounded text-2xl font-bold overflow-hidden shadow-2xl hover:bg-purple-400 press focus:outline-none focus:ring-2 active:bg-pink-600"
				on:click={releaseTheMagic}
			>
				🪄 MOAR MAGIC
			</button>
		</div>
	</main>
	<footer class="p-4">
		<div class="absolute bottom-0 left-1 text-gray-100 animate-bounce">
			<Counter count={data.count} />
		</div>
		<div class="absolute bottom-0 right-1 text-gray-100 animate-bounce">
			<a href="https://github.com/ferglie/fergl.ie" target="_blank" rel="noreferrer">
				Built with good codes
			</a>
		</div>
	</footer>
</div>

<audio loop>
	<source src="audio/power_of_love.mp3" type="audio/mpeg" />
</audio>
