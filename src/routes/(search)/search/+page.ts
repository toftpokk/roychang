import type { PageLoad } from "./$types";
import data from "$lib/data/data.json"

export const load: PageLoad = async () => {
    // FIXME: Temporary
    const menus : RecipeHeader[] = data.menus.map(recipe=>({
        id: 1,
        name: recipe,
        translated_name: "English"+recipe
    }))
    const results : {menus: RecipeHeader[]} = { menus: menus}
    return {
        results
    }
};