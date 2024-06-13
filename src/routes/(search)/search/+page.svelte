<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- Results -->
<div>
	<div class="ml-[30px]">
		<ol class="max-w-[700px]">
			{#each data.results.menus as item}
				<li class="mb-2">
					<div class="flex">
						<a href={'/recipe/' + item.id}
							><img class="w-32 h-32 object-cover" src={item.image} alt={item.name} /></a
						>
						<div class="py-3 px-2">
							<a href={'/recipe/' + item.id}>
								<h3 class="text-xl font-sans hover:underline">{item.name}</h3>
							</a>
							<h3 class="text-lg font-sans">{item.translated_name}</h3>
						</div>
					</div>
				</li>
			{:else}
				<!-- empty list -->
				<p>Menu not found for your search terms</p>
			{/each}
			<!-- Dishes named query-->
			<!-- Dishes with ingredient: query -->
			<!-- Other semantically similar dishes -->
		</ol>
	</div>
</div>
