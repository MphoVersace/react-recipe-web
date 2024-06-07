import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();

  const recipes = [
    {
      id: 1,
      name: "Cabbage salad",
      description: "This is a salad",
    },
    {
      id: 2,
      name: "Cake",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ante nec est molestie, sedeleifend nisi tincidunt. Integer condimentum lacus nec velit fringilla, ut lobortis velit vestibulum.  ",
    },
    { id: 3, 
      name: "Pasta", 
      description: "This is a Pasta " 
    },
    { id: 4, 
      name: "Sides", 
      description: "This is a sides " 
    },
  ];

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  // Check if the recipe exists
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailPage;
