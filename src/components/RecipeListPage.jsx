import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeListPage.css";


function RecipeListPage() {
  const [defaultRecipes] = useState([
    {
      id: 1,
      title: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "A cozy, cheesy casserole is classic comfort food.",
    },
    {
      id: 2,
      title: "Shrimp Pad Thai",
      description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce that strikes the perfect balance of tangy, salty and sweet."
    },
    {
      id: 3,
      title: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole",
      description: "This delightful one-skillet cheesy chicken Alfredo casserole combines penne pasta, tender broccoli and shredded rotisserie chicken smothered in a creamy sauce."
    },
    {
      id: 4,
      title: "Mini chocolate cakes",
      description: "With 3 layers of chocolate cake smothered in fluffy chocolate buttercream frosting, these are the perfect special occasion dessert."
    },
    {
      id: 5,
      title: "Vanilla Cupcakes",
      description: "Soft and fluffy, with a plush velvety crumb."
    },
    {
      id: 6,
      title: "Strawberry Ice-Cream",
      description: "Soft and fluffy, with a plush velvety crumb."
    },
  ]);
  
  return (
    <div id="recipeListPage" className="recipe-list">
      <h1>Recipe List</h1>
      <div className="grid-container">
        {defaultRecipes.map((recipe) => (
          <div key={recipe.id} className="grid-item">
              <h2 className="recipe-title">
                <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                  {recipe.title}
                </Link>
              </h2>
              <p className="recipe-description">{recipe.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
} 

export default RecipeListPage;

