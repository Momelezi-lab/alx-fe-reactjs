import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const favorites = useRecipeStore((state) => state.favorites)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)

  return (
    <div>
      {filteredRecipes.length === 0 && <p>No recipes found</p>}
      {filteredRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id)
        return (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList

