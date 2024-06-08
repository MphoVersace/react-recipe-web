import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();

  const recipes = [
    {
      id: 1,
      name: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "A cozy, cheesy casserole is classic comfort food.",
      image: "src/assets/img1.png" // Replace with actual image URL
      
    },
    {
      id: 2,
      name: "Shrimp Pad Thai",
      description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce that strikes the perfect balance of tangy, salty and sweet",
      image: "src/assets/Videos/img2.webp" // Replace with actual image URL
    },
    { 
      id: 3, 
      name: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole", 
      description: "This delightful one-skillet cheesy chicken Alfredo casserole combines penne pasta, tender broccoli and shredded rotisserie chicken smothered in a creamy sauce. ", 
      image: "src/assets/img3.webp" // Replace with actual image URL
    },
    { 
      id: 4, 
      name: "Sides", 
      description: "This is a sides", 
      image: "https://via.placeholder.com/150" // Replace with actual image URL
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
      <img src={recipe.image} alt={recipe.name} width="300" />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailPage;
