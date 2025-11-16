import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Existing functions
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

  // New search/filter functionality
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    }))
}))

