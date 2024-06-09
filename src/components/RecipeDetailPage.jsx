import React from "react";
import "./RecipeDetailPage.css";

const RecipeDetailPage = ({ recipe }) => {
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail-page">
      <div className="recipe-content">
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        {recipe.id === 1 && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>1 tablespoon extra-virgin olive oil</li>
              <li>1 ¼ pounds sweet potatoes, peeled and cut into 1/2-inch cubes</li>
              <li>2 teaspoons chili powder</li>
              <li>1 teaspoon ground cumin,¼ teaspoon kosher salt</li>
              <li>¼ teaspoon ground pepper</li>
              <li>1 (14.5 ounce) can fire-roasted diced tomatoes, drained</li>
              <li>1 (4 ounce) can mild diced green chiles, drained</li>
              <li>1 (15 ounce) can no-salt-added black beans, rinsed</li>
              <li>¾ cup canned no-salt-added sweet corn, drained</li>
              <li>1 ¼ cups shredded sharp Cheddar cheese, divided</li>
              <li>2 scallions, thinly sliced</li>
              <li>¼ cup roughly chopped fresh cilantro,1 lime, cut into 6 wedges</li>
            </ul>

            <h2>Directions</h2>
            <p>
Heat olive oil in a skillet over medium heat. Add sweet potatoes and cook, stirring occasionally, for 10 minutes until softened.<br />
               Add the chili powder, cumin, salt, and pepper to the skillet. Stir to coat the sweet potatoes with the spices.<br />
              Stir in tomatoes, green chiles, black beans, and corn. Cook for 5 minutes until heated through.
               Transfer the mixture to a large baking dish. Sprinkle 1 cup of the shredded Cheddar cheese over the top.<br />
               Bake in the preheated oven for 20 minutes, until the cheese is melted and bubbly.<br />
               Remove from the oven and let cool slightly. Sprinkle the scallions and cilantro on top.
               Serve with lime wedges on the side.<br />
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
                <li>3 tablespoons fish sauce,3 tablespoons soy sauce</li>
                <li>3 tablespoons tamarind paste,2 tablespoons brown sugar</li>
                <li>1 tablespoon rice vinegar</li>
              </ul>
            </ul>

            <h2>Directions</h2>
            <p>
            1.Cook rice noodles per package instructions. Drain. <br />
2.Whisk fish sauce, soy sauce, tamarind paste, brown sugar, and rice vinegar. Set aside. <br />
3.Heat oil in skillet. Cook shrimp until pink (2-3 mins/side). Remove. <br />
4.Add remaining oil to skillet. Cook garlic until fragrant (30 secs). <br />
5.Push garlic aside. Add beaten eggs. Scramble with garlic. <br />
6.Combine noodles, sauce, shrimp, sprouts, onions in skillet. Heat through. <br />
7.Serve Pad Thai with peanuts, cilantro, lime wedges. <br />
            </p>
          </div>
        )}

        {recipe.id === 3 && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>4 cups whole-wheat penne (about 10 ounces)</li>
              <li>2 tablespoons unsalted butter</li>
              <li>1/2 cup finely chopped yellow onion</li>
              <li>2 tablespoons finely chopped garlic</li>
              <li>6 cups small fresh broccoli florets</li>
              <li>1/2 cup lower-sodium chicken broth</li>
              <li>3/4 cup reduced-fat cream cheese (6 ounces), cubed</li>
              <li>1/2 cup whole milk</li>
              <li>2 teaspoons Italian seasoning,1/2 teaspoon onion powder</li>
              <li>1/2 teaspoon garlic powder,1/2 teaspoon ground pepper</li>
              <li>1/4 teaspoon salt,1 1/2 cups shredded Italian cheese blend, divided</li>
              <li>3 cups shredded rotisserie chicken,2 tablespoons grated Parmesan cheese</li>
              <li>1 tablespoon chopped fresh flat-leaf parsley</li>
            </ul>

            <h2>Directions</h2>
            <p>
            1. Preheat oven to 350°F (175°C). <br />
2. Cook penne per package directions. Drain. <br />
3. Melt butter in skillet. Cook onion and garlic until softened (3 mins). <br />
4. Add broccoli and chicken broth. Cook until tender (5 mins). <br />
5. Stir in cream cheese, milk, seasonings. Cook until melted. <br />
6. Mix in 1 cup shredded Italian cheese and cooked penne. <br />
7. Top with remaining shredded cheese and Parmesan. <br />
8. Bake until cheese is melted (15-20 mins). <br />
9. Garnish with parsley before serving. <br />
            </p>
          </div>
        )}

        {recipe.id === 4 && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>2 cups basmati rice</li>
              <li>3 1/2 cups water</li>
              <li>1 tablespoon ghee</li>
              <li>1 large onion, thinly sliced</li>
              <li>2 tablespoons ginger-garlic paste</li>
              <li>1 teaspoon turmeric powder</li>
              <li>1 teaspoon red chili powder</li>
              <li>2 teaspoons garam masala</li>
              <li>1 pound chicken breast, cut into cubes</li>
              <li>1/2 cup plain yogurt,1/2 cup chopped fresh cilantro</li>
              <li>1/2 cup chopped fresh mint</li>
              <li>1 teaspoon saffron threads, soaked in 2 tablespoons warm milk</li>
              <li>Salt to taste,Fried onions and boiled eggs for garnish (optional)</li>
            </ul>

            <h2>Directions</h2>
            <p>
            1. Soak basmati rice in water for 30 mins. Drain. <br />
2. Heat ghee in pot. Cook onions until golden. Set half aside. <br />
3. Sauté ginger-garlic paste for 1 min. <br />\
4. Add turmeric, chili powder, and garam masala. Sauté for 1 min. <br />
5. Cook chicken until no longer pink. <br />
6. Stir in yogurt, cilantro, and mint. Cook a few more mins. <br />
7. Add rice, water, and salt. Bring to boil, then simmer covered for 15-20 mins. <br />
8. Drizzle saffron milk over rice. Fluff with fork. <br />
9. Garnish with fried onions and boiled eggs, if desired. <br />
            </p>
          </div>
        )}

        {recipe.id === 5 && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>1 1/2 cups quinoa</li>
              <li>3 cups water</li>
              <li>1 tablespoon olive oil</li>
              <li>1 cup cherry tomatoes, halved</li>
              <li>1 cucumber, diced</li>
              <li>1/4 cup red onion, finely chopped</li>
              <li>1/4 cup fresh parsley, chopped</li>
              <li>1/4 cup fresh mint, chopped</li>
              <li>1/4 cup feta cheese, crumbled</li>
              <li>1/4 cup Kalamata olives, pitted and sliced</li>
              <li>Juice of 1 lemon</li>
              <li>Salt and pepper to taste</li>
            </ul>

            <h2>Directions</h2>
            <p>
              1. Rinse the quinoa under cold water. In a medium pot, bring the quinoa and water to a boil. Reduce the heat to low, cover, and simmer for 15 minutes, or until the water is absorbed and the quinoa is tender. Remove from heat and let it cool.<br />
              2. In a large bowl, combine the cooled quinoa, cherry tomatoes, cucumber, red onion, parsley, mint, feta cheese, and Kalamata olives.<br />
              3. Drizzle with olive oil and lemon juice. Season with salt and pepper to taste.<br />
              4. Toss everything together until well combined. Serve chilled or at room temperature.<br />
            </p>
          </div>
        )}

        {recipe.id === 6 && (
          <div>
            <h2>Ingredients</h2>
            <ul>
              <li>2 cups fresh strawberries, hulled and sliced</li>
              <li>1/4 cup granulated sugar</li>
              <li>1 tablespoon lemon juice</li>
              <li>2 cups heavy cream</li>
              <li>1/4 cup powdered sugar</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 package (14 ounces) store-bought shortcakes</li>
              <li>Mint leaves for garnish (optional)</li>
            </ul>

            <h2>Directions</h2>
            <p>
              1. In a medium bowl, combine the sliced strawberries, granulated sugar, and lemon juice. Toss to coat and let the strawberries macerate for at least 30 minutes.<br />
              2. In a large bowl, whip the heavy cream with the powdered sugar and vanilla extract until soft peaks form.<br />
              3. To assemble, place a shortcake on a serving plate. Top with a generous spoonful of the macerated strawberries and a dollop of whipped cream.<br />
              4. Garnish with mint leaves if desired. Repeat with the remaining shortcakes.<br />
              5. Serve immediately and enjoy.<br />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetailPage;
