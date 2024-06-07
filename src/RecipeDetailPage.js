import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipe = {
    id,
    name: `Recipe ${id}`,
    description: `This is a description of recipe ${id}`,
  };

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailPage;


