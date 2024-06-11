import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeListPage.css";


function RecipeListPage() {
  const [defaultRecipes] = useState([
    {
      id: 1,
      title: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "Indulge in this cozy, cheesy casserole that blends sweet potatoes and black beans into a deliciously hearty dish, perfect for any comfort food craving."
    },
    {
      id: 2,
      title: "Shrimp Pad Thai",
      description: "Experience the authentic taste of Thailand with this iconic recipe, featuring rice noodles stir-fried with succulent shrimp in a tangy, salty, and sweet sauce."
    },
    {
      id: 3,
      title: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole",
      description: "Enjoy a delightful one-skillet meal where penne pasta, tender broccoli, and shredded rotisserie chicken come together in a rich and creamy Alfredo sauce."
    },
    {
      id: 4,
      title: "Mini chocolate cakes",
      description: "Treat yourself to these decadent mini chocolate cakes, each with three layers of rich chocolate cake and fluffy chocolate buttercream frosting, perfect for special occasions."
    },
    {
      id: 5,
      title: "Vanilla Cupcakes",
      description: "Delight in these soft and fluffy vanilla cupcakes, featuring a plush velvety crumb and a classic sweet flavor that is sure to please everyone."
    },
    {
      id: 6,
      title: "Strawberry Ice-Cream",
      description: "Savor the refreshing taste of homemade strawberry ice cream, with its creamy texture and fresh strawberry flavor, perfect for a hot day."
    },
  ]);
  
  return (
    <div id="recipeListPage" className="recipe-list">
      <h1>Recipe List</h1>
      <div className="grid-container">
        {defaultRecipes.map((recipe) => (
          <div key={recipe.id} className="grid-item">
              <h2 className="recipe-title">
                <Link to={`/recipedetailpage/${recipe.id}`} className="recipe-link">
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

