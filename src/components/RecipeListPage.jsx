import React from "react";
import "./RecipeListPage.css";

const RecipeListPage = () => {
  const recipes = [
    {
      id: 1,
      name: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "A cozy, cheesy casserole is classic comfort food.",
    },
    { id: 2, name: "Shrimp Pad Thai", description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce that strikes the perfect balance of tangy, salty and sweet." },
    { id: 3, name: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole", 
      description: "This delightful one-skillet cheesy chicken Alfredo casserole combines penne pasta, tender broccoli and shredded rotisserie chicken smothered in a creamy sauce."
     },
    { id: 4, name: "Mini chocolate cakes",
      description: "With 3 layers of chocolate cake smothered in fluffy chocolate buttercream frosting, these are the perfect special occasion dessert. "
      },
      { id: 5, name: "Vanilla Cupcakes",
        description: "Soft and fluffy, with a plush velvety crumb "
        },
        { id: 6, name: "Strawberry Ice-Cream",
          description: "Soft and fluffy, with a plush velvety crumb "
          },
  ];

  return (
    <div className="recipe-list">
      <h1>Recipe List</h1>
      <div className="grid-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="grid-item">
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;