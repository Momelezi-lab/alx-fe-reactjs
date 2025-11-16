import React from 'react'
import { useRecipeStore } from '../stores/recipeStore'


const RecipeList = () => {
const recipes = useRecipeStore((state) => state.recipes)
const removeRecipe = useRecipeStore((state) => state.removeRecipe)


if (recipes.length === 0) return <p>No recipes yet. Add one!</p>


return (
<div>
{recipes.map((recipe) => (
<div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
<h3 style={{ margin: 0 }}>{recipe.title}</h3>
<p style={{ marginTop: 8 }}>{recipe.description}</p>
<small>id: {recipe.id}</small>
<div>
<button onClick={() => removeRecipe(recipe.id)} style={{ marginTop: 8 }}>
Remove
</button>
</div>
</div>
))}
</div>
)
}


export default RecipeList
