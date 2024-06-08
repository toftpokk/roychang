<script lang="ts">
	import type { PageData } from "./$types";

    export let data : PageData
    let recipe : Recipe
    $: recipe = data.recipe
</script>
<article class="max-w-[700px] mx-auto">
    <h1 class="text-2xl font-bold">{recipe.name}</h1>
    <p class="text-lg">{recipe.translated_name}</p>

    <h2 class="text-xl font-bold mb-2">Ingredients</h2>
    <ol class="ms-6 mb-2">
        {#each recipe.ingredients as ingredient}
            <li class="list-disc mb-1">{ingredient.data} {ingredient.amount} {ingredient.unit}</li>
        {:else}
            <p>No Ingredients</p>
        {/each}
    </ol>


    <h2 class="text-xl font-bold mb-2">Instructions</h2>
    <ol class="ms-6 mb-2">
        {#each recipe.instructions as instruction}
            <li class="list-decimal mb-1">{instruction}</li>
        {:else}
            <p>No Instructions</p>
        {/each}
    </ol>
</article>