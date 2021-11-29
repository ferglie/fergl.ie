<script>
	import Counter from '$lib/components/Counter.svelte';

	const releaseTheMagic = () => {
		document.querySelector('audio').play();
	};
</script>

<div
	class="flex items-center justify-center h-screen bg-hero-pattern bg-repeat animate-ltr-linear-infinite bg-wrapper overflow-hidden"
>
	<div class="clouds">
		<div class="mover-1" />
	</div>
	<div class="clouds">
		<div class="mover-1" />
	</div>
	<div class="clouds">
		<div class="mover-1" />
	</div>
	<div id="super-wrapper">
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

	<audio loop>
		<source src="audio/power_of_love.mp3" type="audio/mpeg" />
	</audio>
</div>
<div class="relative">
	<div class="absolute bottom-0 left-1 text-gray-100 animate-bounce"><Counter /></div>
	<div class="absolute bottom-0 right-1 text-gray-100 animate-bounce">Built with good codes</div>
</div>
