
<form class="max-w-[700px] mx-auto">
    <h1 class="text-2xl font-bold">Create Recipe</h1>
    <div class="flex flex-col px-6">
        <label for="name">Name</label>
        <input id="name" placeholder="กระเพราหมูสับ" class="mb-4 input"/>
        <label for="translated_name">Translated Name</label>
        <input id="translated_name" placeholder="Minced Pork Kraprao" class="mb-4 input"/>
        <div class="flex items-center mb-4">
            <div class="me-1">
                <label for="servings" class="">Servings (Mins)</label>
                <input id="servings" placeholder="1" type="number" class="input w-full" min={0} max={100}/>
            </div>
            <div class="ms-1">
                <label for="cooking_time_minutes" class="">Cooking Time (Mins)</label>
                <input id="cooking_time_minutes" placeholder="1" type="number" class="input w-full" min={0}/>
            </div>
        </div>
        <p>Ingredients</p>
        <div class="flex gap-2 mb-4">
            <input class="input grow" placeholder="Water"/>
            <input type="number" class="input grow-0 min-w-0 w-[100px]" placeholder="1" min={0}/>
            <input class="input grow-0 min-w-0 w-[100px]" placeholder="mg"/>
            <button class="input">X</button>
        </div>

        <p>Instructions</p>
        <ol>
            <li class="list-decimal ms-8">
                <div class="flex gap-2 mb-4 ms-2">
                    <input class="input grow" placeholder="Water"/>
                    <button class="input">X</button>
                </div>
            </li>
        </ol>


        <label for="notes">Notes</label>
        <textarea id="notes" class="input mb-2"></textarea>
    </div>
    <button class="input mx-6">Create</button>
</form>