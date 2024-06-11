import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeDetailPage.css";

import img1 from '../assets/img1.png';
import img2 from '../assets/EWL-shrimp-pad-thai-step-05-1190-87e6eec4f9ec48f288489d7f06ea01fc.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/Mini-chocolate-cakes_2.webp';
import img5 from '../assets/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-2 (1).webp';
import img6 from '../assets/Strawberry-Ice-Cream-No-Churn_3b.webp';

function RecipeDetailPage() {
  const { id } = useParams();

    const [recipes] = useState([

    {
      id: 1,
      title: "Cheesy Sweet Potato & Black Bean Casserole",
      description: "A cozy, cheesy casserole is classic comfort food.",
      ingredients: [
        "1 tbsp extra-virgin Olive Oil", 
        "1¼ pound Sweet Potatoe, peeled and cut into 1/2-inch cubes", 
        "2 tsp Chili Powder & 1 tsp Ground Cumin", 
        "¼ tsp Kosher Salt & Ground Pepper", 
        "1 (14.5 ounce) can fire-roasted diced tomatoes, drained", 
        "1 (4 ounce) can mild diced green chiles, drained", 
        "1 (15 ounce) can no-salt-added black beans, rinsed", 
        "¾ cup canned no-salt-added sweet corn, drained", 
        "1 ¼ cups shredded sharp Cheddar cheese, divided", 
        "2 scallions, thinly sliced & ¼ cup roughly chopped fresh cilantro"], 
      directions: [
        "1. Heat olive oil in a skillet over medium heat. Add sweet potatoes and cook, stirring occasionally, for 10 minutes until softened.",
        "2. Add chili powder, cumin, salt, and pepper to the skillet. Stir to coat sweet potatoes with spices.",
        "3. Stir in tomatoes, green chiles, black beans, and corn. Cook for 5 minutes.",
        "4. Transfer the mixture to a large baking dish. Sprinkle 1 cup of the cheese on top.",
        "5. Bake in the preheated oven for 20 minutes, until the cheese is melted and bubbly.",
        "6. Remove from the oven and let cool slightly.",
        "7. Sprinkle scallions/cilantro on top. And Serve.",
      ],
      image: img1,
    },
    {
      id: 2,
      title: "Shrimp Pad Thai",
      description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce.",
      ingredients: ["8 ounces flat rice noodles", 
        "2 tablespoons vegetable oil", 
        "1 pound large shrimp, peeled and deveined", 
        "3 cloves garlic, minced", 
        "2 large eggs, lightly beaten", 
        "1 cup bean sprouts", 
        "3 green onions, sliced", 
        "¼ cup chopped peanuts & ¼ cup fresh cilantro, chopped", 
        "For the sauce:", 
        "3 tablespoons fish sauce,3 tablespoons soy sauce", 
        "3 tablespoons tamarind paste, 2 tbsp brown sugar & 1 tbsp rice vinegar"],
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
      ingredients: [
        "4 cups whole-wheat penne (about 10 ounces)", 
        "2 tablespoons unsalted butter & finely chopped garlic", 
        "1/2 cup finely chopped yellow onion & 1/2 cup chicken broth", 
        "6 cups small fresh broccoli florets", 
        "3/4 cup reduced-fat cream cheese (6 ounces), cubed", 
        "1/2 cup whole milk", 
        "2 teaspoons Italian seasoning,1/2 teaspoon onion powder", 
        "1/2 teaspoon garlic powder,1/2 teaspoon ground pepper", 
        "1/4 teaspoon salt & 1 1/2 cups shredded cheese blend,", 
        "3 cups shredded rotisserie chicken 1 2 tsbp grated Parmesan"],
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
      description: "Treat yourself to these decadent mini chocolate cakes, each with three layers of rich chocolate cake and fluffy chocolate buttercream frosting, perfect for special occasions. These treats are sure to satisfy your chocolate cravings.",
      ingredients: [
        "1 1/2 cups all-purpose flour", 
        "1 1/2 cups granulated sugar", 
        "3/4 cup unsweetened cocoa powder",  
        "1 1/2 teaspoons baking powder, baking soda", 
        "1 teaspoon salt", "2 large eggs", "3/4 cup whole milk", 
        "1/3 cup vegetable oil", "2 teaspoons vanilla extract", 
        "2 teaspoons vanilla extract", 
        "3/4 cup boiling water"],
      directions: [
        "1. Preheat oven to 350°F (175°C).  Grease and flour three 6-inch round cake pans",
        "2. In a large bowl, sift together the flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
        "3. Add the eggs, milk, oil, and vanilla extract to the dry ingredients. Beat on medium speed for 2 minutes.",
        "4. Stir in the boiling water until the batter is well combined. And divide the batter evenly among the cupcake pans. ",
        "5. Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center of the cakes comes out clean. ",
        "6. Remove the cakes from the oven and allow them to cool in the pans for 10 minutes and transfer to a wire rack to cool.",
        "7. Once the cakes are cooled, assemble the mini chocolate cakes placing one layer of cake on a cake stand.",
        "8. Slice and serve the mini chocolate cakes, and enjoy!",
      ],
      image: img4,
    },
    {
      id: 5,
      title: "Vanilla Cupcakes",
      description: "Indulge in these soft and moist vanilla cupcakes with a delicate crumb. Perfectly sweet and aromatic, they are sure to elevate any occasion to the next level.",
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "1 1/2 teaspoons baking powder",
        "1/4 teaspoon salt",
        "1/2 cup unsalted butter, softened",
        "1 cup granulated sugar",
        "2 large eggs, at room temperature",
        "2 teaspoons vanilla extract",
        "1/2 cup whole milk, at room temperature"
      ],
      directions: [
        "1. Preheat the oven to 350°F (175°C). Line a muffin tin with paper cupcake liners.",
        "2. In a medium bowl, sift together the flour, baking powder, and salt. Set aside.",
        "3. In a large mixing bowl, cream together the softened butter and granulated sugar until light and fluffy, about 2-3 minutes.",
        "4. Add the eggs, one at a time, beating well after each addition. Stir in the vanilla extract.",
        "5. Gradually add the dry ingredients to the wet ingredients, alternating with the milk, beginning and ending with the dry ingredients. Mix until just combined, being careful not to overmix.",
        "6. Fill each cupcake liner about two-thirds full with the batter.",
        "7. Bake in the preheated oven for 18-20 minutes, or until a toothpick inserted into the center of a cupcake comes out clean.",
        "8. Remove the cupcakes from the oven and allow them to cool in the pan for 5 minutes. Then transfer the cupcakes to a wire rack to cool completely before frosting.",
        "9. Once the cupcakes are completely cooled, frost them with your favorite frosting and decorate as desired.",
        "10. Serve and enjoy these delightful vanilla cupcakes!"
      ],
      image: img5,
    },
    {
      id: 6,
      title: "Strawberry Ice-Cream",
      description: "Escape the scorching heat of Johannesburg with our refreshing homemade strawberry ice-cream. Made with the freshest strawberries and creamy goodness, it's the perfect treat to cool you down on a hot day.",
      ingredients: [
        "2 cups fresh strawberries, hulled and sliced", 
        "1/4 cup granulated sugar", 
        "1 tablespoon lemon juice", 
        "2 cups heavy cream", 
        "1/4 cup powdered sugar", 
        "1 teaspoon vanilla extract", "1 package (14 ounces) store-bought shortcakes", 
        "Mint leaves for garnish (optional)"],
      directions: [
        "1. In a medium bowl, combine the sliced strawberries, granulated sugar, and lemon juice. ",
        "2. Toss to coat and let the strawberries macerate for at least 30 minutes.",
        "3. In a large bowl, whip heavy cream, powdered sugar and vanilla extract until soft peaks form.",
        "4. To assemble, place a shortcake on a serving plate.",
        "5. Top with a generous spoonful of the macerated strawberries and a dollop of whipped cream.",
        "6. Cover the container tightly with a lid or plastic wrap to prevent ice crystals from forming.",
        "7. Place the container in the freezer and let the ice cream freeze for at least 4-6 hours, or until firm.",
        "8. Garnish with fresh mint leaves if desired, and serve immediately.",
      ],
      image: img6,
    },
    ]);

    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
    
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
      <Link to="/RecipeListPage">
        <button className="button">Back</button>
      </Link>
    </div>
        </div>
    </div>
    </>
    );
}

export default RecipeDetailPage;
