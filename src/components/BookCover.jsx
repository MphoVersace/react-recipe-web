import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './bookPages/Cover/Cover';
import coverVideo from "../assets/Videos/coverVideo.mp4";
import RecipeListPage from './RecipeListPage';
import RecipeDetailPage from './RecipeDetailPage';
import FirstPage from './bookPages/RecipeListPages/FirstPage';
import SecondPage from './bookPages/RecipeListPages/SecondPage';
import AboutPage from './bookPages/AboutPage';

// Import images
import img1 from '../assets/img1.png';
import img2 from '../assets/EWL-shrimp-pad-thai-step-05-1190-87e6eec4f9ec48f288489d7f06ea01fc.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/Mini-chocolate-cakes_2.webp';
import img5 from '../assets/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-2 (1).webp';
import img6 from '../assets/Strawberry-Ice-Cream-No-Churn_3b.webp';

const recipes = [
  {
    id: 1,
    name: "Cheesy Sweet Potato & Black Bean Casserole",
    description: "A cozy, cheesy casserole is classic comfort food.",
    image: img1
  },
  {
    id: 2,
    name: "Shrimp Pad Thai",
    description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce that strikes the perfect balance of tangy, salty and sweet",
    image: img2
  },
  { 
    id: 3, 
    name: "Cheesy Chicken & Broccoli Alfredo Skillet Casserole", 
    description: "This delightful one-skillet cheesy chicken Alfredo casserole combines penne pasta, tender broccoli and shredded rotisserie chicken smothered in a creamy sauce.",
    image: img3
  },
  { 
    id: 4, 
    name: "Mini chocolate cakes", 
    description: "With 3 layers of chocolate cake smothered in fluffy chocolate buttercream frosting, these are the perfect special occasion dessert.", 
    image: img4
  },
  { 
    id: 5, 
    name: "Vanilla Cupcakes", 
    description: "Soft and fluffy, with a plush velvety crumb.", 
    image: img5
  },
  { 
    id: 6, 
    name: "Strawberry Ice Cream", 
    description: "A no churn Strawberry Ice Cream that’s incredibly creamy, no ice crystals and perfectly scoopable.",
    image: img6
  }
];

function BookCover(props) {
  return (
      <HTMLFlipBook width={700} height={800} showCover="true">
        <Page number={1}>
        <Cover coverVideo={coverVideo} title="Foodie Favourites"  />
        </Page>
        <Page number={2}>
        <FirstPage />
        </Page>
        <Page number={3}>
        <SecondPage />
        </Page>
        <Page number={4}>
        <RecipeListPage recipes={recipes} />
        </Page> 
        <Page number={5}>
        <AboutPage />
        </Page>   
        {recipes.map((recipe, index) => (
              <Page number={index + 6} key={recipe.id}>
                  <RecipeDetailPage recipe={recipe} />
              </Page>
          ))} 
        <Page number={11}></Page>     
      </HTMLFlipBook>
  );
} 


export default BookCover;