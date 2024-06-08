type RecipeHeader = {
    id: number
    name: string
    translated_name: string
}

type Recipe = {
    servings: number
    cooking_time_minutes: number
    // Note: ingredients do not have to be unique
    // E.g. multiple portions of rice for different purposes
    ingredients: {
        data:Ingredient,
        amount: Number,
        unit: string
    }[]
    instructions: Instruction[]
    note?: string
} & RecipeHeader

type Ingredient = string

type Instruction = string