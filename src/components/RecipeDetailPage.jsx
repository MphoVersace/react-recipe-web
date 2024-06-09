import React from "react";

const RecipeDetailPage = ({ recipe }) => {
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width="100" />
     

      {recipe.id === 1 && (
        <div>
          <h2>Ingredients</h2>
          <ul>
            <li>1 tablespoon extra-virgin olive oil</li>
            <li>1 ¼ pounds sweet potatoes, peeled and cut into 1/2-inch cubes</li>
            <li>2 teaspoons chili powder</li>
            <li>1 teaspoon ground cumin</li>
            <li>¼ teaspoon kosher salt</li>
            <li>¼ teaspoon ground pepper</li>
            <li>1 (14.5 ounce) can fire-roasted diced tomatoes, drained</li>
            <li>1 (4 ounce) can mild diced green chiles, drained</li>
            <li>1 (15 ounce) can no-salt-added black beans, rinsed</li>
            <li>¾ cup canned no-salt-added sweet corn, drained</li>
            <li>1 ¼ cups shredded sharp Cheddar cheese, divided</li>
            <li>2 scallions, thinly sliced</li>
            <li>¼ cup roughly chopped fresh cilantro</li>
            <li>1 lime, cut into 6 wedges</li>
          </ul>

          <h2>Directions</h2>
          <p>
            1. Preheat your oven to 400°F (200°C).<br />
            2. Heat the olive oil in a large skillet over medium heat. Add the sweet potatoes and cook, stirring occasionally, until they start to soften, about 10 minutes.<br />
            3. Add the chili powder, cumin, salt, and pepper to the skillet. Stir to coat the sweet potatoes with the spices.<br />
            4. Stir in the fire-roasted diced tomatoes, green chiles, black beans, and sweet corn. Cook for another 5 minutes, until everything is heated through.<br />
            5. Transfer the mixture to a large baking dish. Sprinkle 1 cup of the shredded Cheddar cheese over the top.<br />
            6. Bake in the preheated oven for 20 minutes, until the cheese is melted and bubbly.<br />
            7. Remove from the oven and let cool slightly. Sprinkle the scallions and cilantro on top.<br />
            8. Serve with lime wedges on the side.<br />
          </p>
        </div>
      )}

      {recipe.id === 2 && (
        <div>
          <h2>Ingredients</h2>
          <ul>
            <li>8 ounces flat rice noodles</li>
            <li>2 tablespoons vegetable oil</li>
            <li>1 pound large shrimp, peeled and deveined</li>
            <li>3 cloves garlic, minced</li>
            <li>2 large eggs, lightly beaten</li>
            <li>1 cup bean sprouts</li>
            <li>3 green onions, sliced</li>
            <li>¼ cup chopped peanuts</li>
            <li>¼ cup fresh cilantro, chopped</li>
            <li>1 lime, cut into wedges</li>
            <li>For the sauce:</li>
            <ul>
              <li>3 tablespoons fish sauce</li>
              <li>3 tablespoons soy sauce</li>
              <li>3 tablespoons tamarind paste</li>
              <li>2 tablespoons brown sugar</li>
              <li>1 tablespoon rice vinegar</li>
            </ul>
          </ul>

          <h2>Directions</h2>
          <p>
            1. Cook the rice noodles according to the package instructions. Drain and set aside.<br />
            2. In a small bowl, whisk together the fish sauce, soy sauce, tamarind paste, brown sugar, and rice vinegar. Set aside.<br />
            3. Heat 1 tablespoon of vegetable oil in a large skillet or wok over medium-high heat. Add the shrimp and cook until pink and opaque, about 2-3 minutes per side. Remove from the skillet and set aside.<br />
            4. Add the remaining 1 tablespoon of vegetable oil to the skillet. Add the garlic and cook until fragrant, about 30 seconds.<br />
            5. Push the garlic to the side of the skillet and add the beaten eggs. Scramble the eggs until fully cooked, then combine with the garlic.<br />
            6. Add the cooked noodles, sauce mixture, cooked shrimp, bean sprouts, and green onions to the skillet. Toss everything together until well combined and heated through.<br />
            7. Serve the Pad Thai topped with chopped peanuts, fresh cilantro, and lime wedges on the side.<br />
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailPage;
