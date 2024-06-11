import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeListPage.css";


function RecipeListPage() {
  const [defaultRecipes] = useState([
    {
      id: 1,
      title: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "A cozy, cheesy casserole is classic comfort food.",
    },
    {
      id: 2,
      title: "Shrimp Pad Thai",
      description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce that strikes the perfect balance of tangy, salty and sweet."
    },
    {
      id: 3,
      title: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole",
      description: "This delightful one-skillet cheesy chicken Alfredo casserole combines penne pasta, tender broccoli and shredded rotisserie chicken smothered in a creamy sauce."
    },
    {
      id: 4,
      title: "Mini chocolate cakes",
      description: "With 3 layers of chocolate cake smothered in fluffy chocolate buttercream frosting, these are the perfect special occasion dessert."
    },
    {
      id: 5,
      title: "Vanilla Cupcakes",
      description: "Soft and fluffy, with a plush velvety crumb."
    },
    {
      id: 6,
      title: "Strawberry Ice-Cream",
      description: "Soft and fluffy, with a plush velvety crumb."
    },
  ]);
  
  return (
    <div id="recipeListPage" className="recipe-list">
      <h1>Recipe List</h1>
      <div className="grid-container">
        {defaultRecipes.map((recipe) => (
          <div key={recipe.id} className="grid-item">
              <h2 className="recipe-title">
                <Link to={`/recipe/${recipe.id}`} className="recipe-link">
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



// {recipe.id === 6 && (
//   <div>
//     <h2>Ingredients</h2>
//     <ul>
//       <li>2 cups fresh strawberries, hulled and sliced</li>
//       <li>1/4 cup granulated sugar</li>
//       <li>1 tablespoon lemon juice</li>
//       <li>2 cups heavy cream</li>
//       <li>1/4 cup powdered sugar</li>
//       <li>1 teaspoon vanilla extract</li>
//       <li>1 package (14 ounces) store-bought shortcakes</li>
//       <li>Mint leaves for garnish (optional)</li>
//     </ul>

//     <h2>Directions</h2>
//     <p>
//       1. In a medium bowl, combine the sliced strawberries, granulated sugar, and lemon juice. Toss to coat and let the strawberries macerate for at least 30 minutes.<br />
//       2. In a large bowl, whip the heavy cream with the powdered sugar and vanilla extract until soft peaks form.<br />
//       3. To assemble, place a shortcake on a serving plate. Top with a generous spoonful of the macerated strawberries and a dollop of whipped cream.<br />
//       4. Garnish with mint leaves if desired. Repeat with the remaining shortcakes.<br />
//       5. Serve immediately and enjoy.<br />
//     </p>
//   </div>
// )}
