import create from 'zustand'


const LOCAL_KEY = 'recipes_v1'


const load = () => {
try {
const raw = localStorage.getItem(LOCAL_KEY)
return raw ? JSON.parse(raw) : []
} catch (e) {
return []
}
}


export const useRecipeStore = create((set) => ({
recipes: load(),
setRecipes: (recipes) => {
localStorage.setItem(LOCAL_KEY, JSON.stringify(recipes))
set({ recipes })
},
addRecipe: (newRecipe) =>
set((state) => {
const next = [...state.recipes, newRecipe]
localStorage.setItem(LOCAL_KEY, JSON.stringify(next))
return { recipes: next }
}),
removeRecipe: (id) =>
set((state) => {
const next = state.recipes.filter((r) => r.id !== id)
localStorage.setItem(LOCAL_KEY, JSON.stringify(next))
return { recipes: next }
}),
}))
