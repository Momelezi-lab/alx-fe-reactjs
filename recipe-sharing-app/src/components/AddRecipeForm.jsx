import React, { useState } from 'react'
import { useRecipeStore } from '../stores/recipeStore'


const AddRecipeForm = () => {
const addRecipe = useRecipeStore((state) => state.addRecipe)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


const handleSubmit = (e) => {
e.preventDefault()
if (!title.trim()) return alert('Please provide a title')


const newRecipe = {
id: Date.now(),
title: title.trim(),
description: description.trim(),
}


addRecipe(newRecipe)
setTitle('')
setDescription('')
}


return (
<form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
<div>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Title"
style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
/>
</div>


<div style={{ marginTop: 8 }}>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Description"
rows={4}
style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
/>
</div>


<div style={{ marginTop: 8 }}>
<button type="submit">Add Recipe</button>
</div>
</form>
)
}


export default AddRecipeForm
