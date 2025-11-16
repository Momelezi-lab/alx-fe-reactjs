import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../stores/recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  )
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  const [title, setTitle] = useState(recipe?.title || '')
  const [description, setDescription] = useState(recipe?.description || '')

  if (!recipe) return <h2>Recipe not found</h2>

  const handleSubmit = (e) => {
    event.preventDefault()

    updateRecipe({
      id: Number(id),
      title,
      description,
    })

    navigate(`/recipe/${id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditRecipeForm

