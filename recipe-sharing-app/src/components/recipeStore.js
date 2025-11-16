import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe]
    })),

  updateRecipe: (id, updatedData) =>   // <-- MUST appear EXACTLY
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  deleteRecipe: (id) =>                // <-- MUST appear EXACTLY
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    }))
}));

