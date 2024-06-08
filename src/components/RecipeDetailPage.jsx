import React from "react";

const RecipeDetailPage = ({ recipe }) => {
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width="300" />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailPage;