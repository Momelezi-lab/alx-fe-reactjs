import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {recipe.title}
            </h1>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {recipe.summary}
            </p>

            {/* Ingredients */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Ingredients
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {recipe.ingredients.map((ing, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 bg-gray-100 px-5 py-3 rounded-lg"
                  >
                    <span className="mr-3 text-blue-600">•</span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;