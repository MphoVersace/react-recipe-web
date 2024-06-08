import React from "react";
import { Link } from "react-router-dom";

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
  ];

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
