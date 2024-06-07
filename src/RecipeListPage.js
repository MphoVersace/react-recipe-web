import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListPage = () => {
  const recipes = [
    { id: 1, name: 'Cabbage salad', description: 'This is a description of recipe 1' },
    { id: 2, name: 'Cake', description: 'This is a description of recipe 2' },
    { id: 3, name: 'Pasta', description: 'This is a description of recipe 3' },
  ];

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;


