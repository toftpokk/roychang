<script lang="ts">
	import type { PageData } from "./$types";

    export let data : PageData
</script>
<div class="my-4">
    <form action="/search">
        <div class="flex max-w-[584px] border border-black px-2 py-1.5 rounded-lg mx-auto">
            <div class="me-2">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
                </svg>
            </div>
            <div class="flex-grow">
                <input value={data.query} class="w-full text-[16px] outline-none" name="q"/>
            </div>
        </div>
    </form>
</div>
<!-- Results -->
<div>
    <div class="ml-[30px]">
        <ol class="max-w-[672px]">
            {#each data.results.menus as item}
                <!-- content here -->
                <li class="mb-2">
                    <div class="flex">
                        <a href={"/recipe/"+item.id}><img class="w-32" src="#" alt={item.name}/></a>
                        <div class="py-3 px-2">
                            <a href={"/recipe/"+item.id}>
                                <h3 class="text-xl font-sans hover:underline">{item.name}</h3>
                            </a>
                            <h3 class="text-lg font-sans">{item.translated_name}</h3>
                            <p>{item.type}</p>
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