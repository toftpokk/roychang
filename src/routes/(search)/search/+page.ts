import type { PageLoad } from "./$types";
import data from "$lib/data/food.json"

export const load: PageLoad = async () => {
    // FIXME: Temporary
    const menus : (RecipeHeader & { image: string })[] = data.menus.map(recipe=>{
        let name : string;
        let image : string;
        let translated_name : string
        if(typeof recipe === "string"){
            name = recipe
            image = "#"
            translated_name = "English"+recipe
        }
        else{
            name = recipe.name
            image = "/assets/food/"+recipe.image
            translated_name = "English"+recipe.name
            if(typeof recipe.translated_name === "string"){
                translated_name = recipe.translated_name
            }
        }

        return {
            id: 1, // FIXME
            name,
            translated_name,
            image 
        }
    })
    const results = { menus: menus}
    return {
        results
    }
};