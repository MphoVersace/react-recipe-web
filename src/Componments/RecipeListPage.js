import React from "react";
import { Link } from "react-router-dom";
import Page from './Page';

const RecipeListPage = () => {
  const recipes = [
    {
      id: 1,
      name: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "This is a salad",
    },
    { id: 2, name: "Cake", description: "This is about a cake" },
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
