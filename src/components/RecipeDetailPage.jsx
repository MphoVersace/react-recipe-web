import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeDetailPage.css";

import img1 from '../assets/img1.png';
import img2 from '../assets/EWL-shrimp-pad-thai-step-05-1190-87e6eec4f9ec48f288489d7f06ea01fc.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/Mini-chocolate-cakes_2.webp';
import img5 from '../assets/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-2 (1).webp';
import img6 from '../assets/Strawberry-Ice-Cream-No-Churn_3b.webp';

function RecipeDetailPage({ id }) {
  
    // const { id } = useParams();
    const [recipes] = useState([

    {
      id: 1,
      title: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "A cozy, cheesy casserole is classic comfort food.",
      ingredients: ["1 tbsp extra-virgin Olive Oil", "1¼ pound Sweet Potatoe, peeled and cut into 1/2-inch cubes", "2 tsp Chili Powder", "1 tsp Ground Cumin", "¼ tsp Kosher Salt & Ground Pepper", "1 (14.5 ounce) can fire-roasted diced tomatoes, drained", "1 (4 ounce) can mild diced green chiles, drained", "1 (15 ounce) can no-salt-added black beans, rinsed", "¾ cup canned no-salt-added sweet corn, drained", "1 ¼ cups shredded sharp Cheddar cheese, divided", "2 scallions, thinly sliced & ¼ cup roughly chopped fresh cilantro"], 
      directions: [
        "1. Heat olive oil in a skillet over medium heat. Add sweet potatoes and cook, stirring occasionally, for 10 minutes until softened.",
        "2. Add chili powder, cumin, salt, and pepper to the skillet. Stir to coat sweet potatoes with spices.",
        "3. Stir in tomatoes, green chiles, black beans, and corn. Cook for 5 minutes.",
        "4. Transfer the mixture to a large baking dish. Sprinkle 1 cup of the cheese on top.",
        "5. Bake in the preheated oven for 20 minutes, until the cheese is melted and bubbly.",
        "6. Remove from the oven and let cool slightly. Sprinkle scallions/cilantro on top. And Serve.",
      ],
      image: img1,
    },
    {
      id: 2,
      title: "Shrimp Pad Thai",
      description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce.",
      ingredients: ["8 ounces flat rice noodles", "2 tablespoons vegetable oil", "1 pound large shrimp, peeled and deveined", "3 cloves garlic, minced", "2 large eggs, lightly beaten", "1 cup bean sprouts", "3 green onions, sliced", "¼ cup chopped peanuts & ¼ cup fresh cilantro, chopped", "For the sauce:", "3 tablespoons fish sauce,3 tablespoons soy sauce", "3 tablespoons tamarind paste,2 tablespoons brown sugar & 1 tablespoon rice vinegar"],
      directions: [
        "1.Cook rice noodles per package instructions. Drain. ",
        "2.Whisk fish sauce, soy sauce, tamarind paste, brown sugar, and rice vinegar. Set aside. ",
        "3.Heat oil in skillet. Cook shrimp until pink (2-3 mins/side). Remove. ",
        "4.Add remaining oil to skillet. Cook garlic until fragrant (30 secs). ",
        "5.Push garlic aside. Add beaten eggs. Scramble with garlic. ",
        "6.Combine noodles, sauce, shrimp, sprouts, onions in skillet. Heat through. ",
        "7.Serve Pad Thai with peanuts, cilantro, lime wedges. ",
      ],
      image: img2,
    },
    {
      id: 3,
      title: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole",
      description: "A one-skillet Alfredo casserole combines penne pasta, broccoli & a shredded rotisserie chicken.",
      ingredients: ["4 cups whole-wheat penne (about 10 ounces)", "2 tablespoons unsalted butter & finely chopped garlic", "1/2 cup finely chopped yellow onion & 1/2 cup chicken broth", "6 cups small fresh broccoli florets", "3/4 cup reduced-fat cream cheese (6 ounces), cubed", "1/2 cup whole milk", "2 teaspoons Italian seasoning,1/2 teaspoon onion powder", "1/2 teaspoon garlic powder,1/2 teaspoon ground pepper", "1/4 teaspoon salt & 1 1/2 cups shredded cheese blend,", "3 cups shredded rotisserie chicken 1 2 tsbp grated Parmesan"],
      directions: [
        "1. Preheat oven to 350°F (175°C). ",
        "2. Cook penne per package directions. Drain.",
        "3. Melt butter in skillet. Cook onion and garlic until softened (3 mins).",
        "4. Add broccoli and chicken broth. Cook until tender (5 mins). ",
        "5. Stir in cream cheese, milk, seasonings. Cook until melted. ",
        "6. Mix in 1 cup shredded Italian cheese and cooked penne. ",
        "7. Top with remaining shredded cheese and Parmesan. ",
        "8. Bake until cheese is melted (15-20 mins). Then cool for 7 minutes and serve. ",
      ],
      image: img3,
    },
    {
      id: 4,
      title: "Mini chocolate cakes",
      description: "With 3 layers of chocolate cake smothered in fluffy chocolate buttercream frosting.",
      ingredients: ["4 cups whole-wheat penne (about 10 ounces)", "2 tablespoons unsalted butter", "1/2 cup finely chopped yellow onion", "2 tablespoons finely chopped garlic", "6 cups small fresh broccoli florets", "1/2 cup lower-sodium chicken broth", "3/4 cup reduced-fat cream cheese (6 ounces), cubed", "1/2 cup whole milk", "2 teaspoons Italian seasoning,1/2 teaspoon onion powder", "1/2 teaspoon garlic powder,1/2 teaspoon ground pepper"],
      directions: [
        "1. Preheat oven to 350°F (175°C). ",
        "2. Cook penne per package directions. Drain.",
        "3. Melt butter in skillet. Cook onion and garlic until softened (3 mins).",
        "4. Add broccoli and chicken broth. Cook until tender (5 mins). ",
        "5. Stir in cream cheese, milk, seasonings. Cook until melted. ",
        "3. Melt butter in skillet. Cook onion and garlic until softened (3 mins).",
        "4. Add broccoli and chicken broth. Cook until tender (5 mins). ",
        "5. Stir in cream cheese, milk, seasonings. Cook until melted. ",
      ],
      image: img4,
    },
    {
      id: 5,
      title: "Vanilla Cupcakes",
      description: "Soft and moist, with a plush velvety crumb, these vanilla cupcakes are perfect for any occasion.",
      ingredients: ["4 cups whole-wheat penne (about 10 ounces)", "2 tablespoons unsalted butter", "1/2 cup finely chopped yellow onion", "2 tablespoons finely chopped garlic", "6 cups small fresh broccoli florets", "1/2 cup lower-sodium chicken broth", "3/4 cup reduced-fat cream cheese (6 ounces), cubed", "1/2 cup whole milk", "2 teaspoons Italian seasoning,1/2 teaspoon onion powder", "1/2 teaspoon garlic powder,1/2 teaspoon ground pepper"],
      directions: [
        "1. Preheat oven to 350°F (175°C). ",
        "2. Cook penne per package directions. Drain.",
        "3. Melt butter in skillet. Cook onion and garlic until softened (3 mins).",
        "4. Add broccoli and chicken broth. Cook until tender (5 mins). ",
        "5. Stir in cream cheese, milk, seasonings. Cook until melted. ",
        "6. Stir in cream cheese, milk, seasonings. Cook until melted. ",
      ],
      image: img5,
    },
    {
      id: 6,
      title: "Strawberry Ice-Cream",
      description: "A cooling home-made ice-cream is best for this hot Johannesburg weather",
      ingredients: ["2 cups fresh strawberries, hulled and sliced", "1/4 cup granulated sugar", "1 tablespoon lemon juice", "2 cups heavy cream", "1/4 cup powdered sugar", "1 teaspoon vanilla extract", "1 package (14 ounces) store-bought shortcakes", "Mint leaves for garnish (optional)"],
      directions: [
        "1. In a medium bowl, combine the sliced strawberries, granulated sugar, and lemon juice. Toss to coat and let the strawberries macerate for at least 30 minutes.",
        "2. In a large bowl, whip heavy cream, powdered sugar and vanilla extract until soft peaks form.",
        "3. To assemble, place a shortcake on a serving plate. Top with a generous spoonful of the macerated strawberries and a dollop of whipped cream.",
        "4. Serve immediately and enjoy.",
      ],
      image: img6,
    },
    ]);

    const recipe = recipes.find((recipe) => recipe.id === id);

    if (!recipe) {
      return <div>Recipe not found</div>;
    }

    return(
      <>
    <div className="recipe-detail-page">
    <h1 className="detailtitle">{recipe.title}</h1>
 
      <div className="recipe-content">
      <h2>Description</h2>
      <p>{recipe.description}</p>
      <div className="ingredients-image-container">
           <div className="recipe-image-container">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />
      </div>
      <div className="ingredients-container">
                <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        </div>
        </div>

        <h2>Directions</h2>
        <ol>
          {recipe.directions.map((directions, index) => (
            <li key={index}>{directions}</li>
          ))}
        </ol>
        <div className="button-container">
        <Link to="/">
          <button className="button">Back</button>
        </Link>
      </div>
        </div>
    </div>
    </>
    );
}

export default RecipeDetailPage;
