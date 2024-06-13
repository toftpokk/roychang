<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<form class="max-w-[700px] mx-auto" action="?" method="post" use:enhance>
	{#if form?.error}
		<div class="bg-red-200 p-5 m-3">
			Error: {form.error}
		</div>
	{/if}
	<h1 class="text-2xl font-bold">Create Recipe</h1>
	<div class="flex flex-col px-6">
		<label for="name">Name<span class="star">*</span></label>
		<input id="name" name="name" placeholder="กระเพราหมูสับ" class="mb-4 input" required />
		<label for="translated_name">Translated Name</label>
		<input
			id="translated_name"
			name="translated_name"
			placeholder="Minced Pork Kraprao"
			class="mb-4 input"
		/>
		<div class="flex items-center mb-4">
			<div class="me-1">
				<label for="servings" class="">Servings (Persons)<span class="star">*</span></label>
				<input
					id="servings"
					name="servings"
					placeholder="1"
					type="number"
					class="input w-full"
					min={1}
					max={100}
					required
				/>
			</div>
			<div class="ms-1">
				<label for="cooking_time_minutes" class=""
					>Cooking Time (Mins)<span class="star">*</span></label
				>
				<input
					name="cooking_time_minutes"
					id="cooking_time_minutes"
					placeholder="1"
					type="number"
					class="input w-full"
					min={0}
					required
				/>
			</div>
		</div>
		<p>Ingredients<span class="star">*</span></p>
		<textarea class="input mb-2 h-[10em]" name="ingredients" required></textarea>
		<!-- <div class="flex gap-2 mb-4" id="ingredients">
			<input class="input grow" placeholder="Water" on:input={(e) => updateInstructions(e)} />
		</div> -->

		<p>Instructions<span class="star">*</span></p>
		<textarea class="input mb-2 h-[10em]" name="instructions" required></textarea>
		<!-- <ol>
			<li class="list-decimal ms-8">
				<div class="flex gap-2 mb-4 ms-2">
					<input class="input grow" placeholder="Water" />
					<button class="input">X</button>
				</div>
			</li>
		</ol> -->

		<label for="notes">Notes</label>
		<textarea id="notes" name="notes" class="input mb-2"></textarea>
	</div>
	<button class="input mx-6">Create</button>
</form>

<style>
	.star {
		color: red;
	}
</style>
