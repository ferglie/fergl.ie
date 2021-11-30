<script>
	import Counter from '$lib/components/Counter.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	const releaseTheMagic = () => {
		document.querySelector('audio').play();
	};
</script>

<div
	class="flex flex-col h-screen bg-hero-pattern bg-repeat animate-ltr-linear-infinite bg-wrapper overflow-hidden"
>
	<header class="p-4"><Navbar /></header>
	<main class="-mt-8 flex-grow">
		<div class="flex items-center justify-center h-screen">
			<div id="wrapper" class="-mt-20">
				<header>
					<img alt="Ferglier Gif" src="img/ferglier.gif" />
					<br />
					<img alt="Than You Gif" src="img/thanyou.gif" />
					<br />
				</header>
				<button
					class="relative bg-red-500 text-white p-6 rounded text-2xl font-bold overflow-hidden
            shadow-2xl hover:bg-purple-400 press focus:outline-none focus:ring-2 active:bg-pink-600"
					on:click={releaseTheMagic}
				>
					🪄 MOAR MAGIC
				</button>
			</div>
		</div>
	</main>
	<footer class="p-4">
		<div class="absolute bottom-0 left-1 text-gray-100 animate-bounce"><Counter /></div>
		<div class="absolute bottom-0 right-1 text-gray-100 animate-bounce">
			<a href="https://github.com/ferglie/fergl.ie" target="_blank"> Built with good codes </a>
		</div>
	</footer>
</div>

<audio loop>
	<source src="audio/power_of_love.mp3" type="audio/mpeg" />
</audio>
