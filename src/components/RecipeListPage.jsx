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
    { id: 3, name: "Pasta", description: "This is a Pasta " },
    { id: 4, name: "Sides", description: "This is a sides " },
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
