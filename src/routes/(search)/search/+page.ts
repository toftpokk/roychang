import type { PageLoad } from "./$types";
import data from "$lib/data/data.json"

type Recipe = {
    id: number
    name: string
    translated_name: string
    type: string
    servings: number
    // TODO
}

export const load: PageLoad = async () => {
    // FIXME: Temporary
    const menus = data.menus.map(recipe=>({
        id: 1,
        name: recipe,
        translated_name: "English"+recipe,
        type: "food",
        servings: 10
    }))
    const results : {menus: Recipe[]} = { ...data, menus: menus}
    return {
        results,
    }
};