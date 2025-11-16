import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetail from './components/RecipeDetail'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <Routes>
          {/* Home page: RecipeList + AddRecipeForm + SearchBar */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe detail page */}
          <Route
            path="/recipe/:id"
            element={<RecipeDetail />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

