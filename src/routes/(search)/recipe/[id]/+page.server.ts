import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({params}) => {
    // FIXME: data search
    const recipe : Recipe = {
        id: Number(params.id),
        name: "ไข่เจียว",
        translated_name: "English",
        servings: 1,
        ingredients: [
            {
                data: "dog",
                amount: 1,
                unit: "mg"
            }
        ],
        instructions: [
            "a",
            "b",
            "c"
        ]
    }
    return {
        recipe
    }
};