import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
type Recipe = {
    name: string
    translated_name? : string
    servings: number
    cooking_time_minutes: number
    ingredients: string
    instructions: string
    notes?: string
}

const parse = (formData : FormData): Recipe=>{
    const missing = []
    const name : any = formData.get("name")
    let translated_name : any= formData.get("translated_name")
    translated_name = translated_name === ""? null : translated_name
    let servings_raw : any = formData.get("servings") || ""
    let servings : any = parseInt(servings_raw)
    const cooking_time_minutes_raw : any = formData.get("cooking_time_minutes")
    let cooking_time_minutes : any = parseInt(cooking_time_minutes_raw)
    const ingredients : any= formData.get("ingredients")
    const instructions : any= formData.get("instructions")
    let notes : any= formData.get("notes")
    notes = notes === ""? null : notes
    if(typeof name !== "string"){
        missing.push("name")
    }
    if(typeof translated_name !== "string" && translated_name !== null){
        console.log(translated_name)
        missing.push("translated_name")
    }
    if(typeof servings !== "number" || isNaN(servings)){
        missing.push("services")
    }
    if(typeof cooking_time_minutes !== "number" || isNaN(cooking_time_minutes)){
        missing.push("cooking_time_minutes")
    }
    if(typeof ingredients !== "string"){
        missing.push("ingredients")
    }
    if(typeof instructions !== "string"){
        missing.push("instructions")
    }
    if(typeof notes !== "string" && notes !== null){
        missing.push("notes")
    }
    if(missing.length > 0){
        throw new Error("missing: "+missing.join(", "));
    }
    
    return {
        name,
        translated_name,
        servings,
        cooking_time_minutes,
        ingredients,
        instructions,
        notes
    }
}


export const actions: Actions = {
    default: async ({request}) =>{
        let recipe : Recipe
        try {
            recipe = parse(await request.formData())
        } catch (error) {
            return fail(422,{
                error: String(error)
            })
        }
        // TODO Recipe Creation
        console.log(recipe)      
    }
};