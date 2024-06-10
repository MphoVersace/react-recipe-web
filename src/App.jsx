import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeListPages from './components/bookPages/RecipeListPages/FirstPage';
import RecipeDetailPage from "./components/RecipeDetailPage";

import BookCover from './components/BookCover';
import BgTexture from "../src/assets/background4.jpeg";


const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};

const App = () => {
  return (
    
    <Router>
      
    <div style={BgTextureStyle} className="w-full h-full flex justify-center items-center">
      <div className="relative z-10 w-full h-full flex justify-center items-center">   
           
      <Routes>
          <Route path="/" element={<RecipeListPages />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
          <BookCover />  
      </div>     
    </div>
    
    </Router>
  );
};

export default App;
