import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
recipes: [],


// initialize the list (overwrites existing)
setRecipes: (recipes) => set({ recipes }),


// add a single recipe object
addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),


// optional: remove recipe by id
removeRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}))
