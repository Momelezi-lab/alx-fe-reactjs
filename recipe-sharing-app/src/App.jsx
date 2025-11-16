import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'


function App() {
return (
<main style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
<h1>Recipe Sharing App</h1>
<AddRecipeForm />
<RecipeList />
</main>
)
}


export default App
