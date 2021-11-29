<script>
	let count = 0;
	try {
		fetch('/visit').then(async (response) => {
			const r = await response.json();
			count = r.count;
			console.log('index', 'count', r);
		});
	} catch (err) {
		console.error('Error fetching component', err);
	}
</script>

{#if count > 0}
	<div>
		You are visitor number: {count}
	</div>
{/if}
