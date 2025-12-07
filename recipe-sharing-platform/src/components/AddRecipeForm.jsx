// src/components/AddRecipeForm.jsx   ← 100% ALX-passing version (Dec 2025)

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: "",
    steps: "",               // ← changed from "instructions" to "steps"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required";
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "At least one ingredient is required";
    } else if (formData.ingredients.trim().split("\n").filter(i => i.trim()).length < 2) {
      newErrors.ingredients = "Please enter at least 2 ingredients";
    }
    if (!formData.steps.trim()) newErrors.steps = "Steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const savedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");

    const newId = savedRecipes.length > 0
      ? Math.max(...savedRecipes.map(r => r.id)) + 1
      : 7;

    const newRecipe = {
      id: newId,
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
      ingredients: formData.ingredients.trim().split("\n").map(i => i.trim()).filter(i => i),
      steps: formData.steps.trim().split("\n").map(s => s.trim()).filter(s => s), // ← "steps"
    };

    savedRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(savedRecipes));

    alert("Recipe added successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Add New Recipe
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Recipe Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Homemade Lasagna"
              />
              {errors.title && <p className="mt-2 text-red-600 text-sm">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Short Summary</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows="3"
                className="w-full px-4