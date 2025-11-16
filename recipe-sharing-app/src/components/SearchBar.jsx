import React, { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
  const filterRecipes = useRecipeStore((state) => state.filterRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)

  // Update filteredRecipes whenever searchTerm changes
  useEffect(() => {
    filterRecipes()
  }, [searchTerm])

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
    />
  )
}

export default SearchBar

