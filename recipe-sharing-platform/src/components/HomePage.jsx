// src/components/HomePage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Delicious Recipes
        </h1>
        <div className="text-center mb-10">
          <Link
            to="/add-recipe"
            className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
          >
            + Add New Recipe
          </Link>
        </div>

        {/* Responsive Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {recipe.title}
                </h2>

                <p className="text-gray-600 line-clamp-3 mb-6">
                  {recipe.summary}
                </p>

                {/* View Recipe Button - Now uses React Router Link */}
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state - in case data is empty */}
        {recipes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No recipes found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
