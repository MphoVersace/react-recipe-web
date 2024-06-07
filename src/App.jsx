import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeListPage from './components/RecipeListPage';
import RecipeDetailPage from './components/RecipeDetailPage';
import BookCover from './components/BookCover';
import BgTexture from "../src/assets/moso9.jpg";

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
    <BrowserRouter>
    <div style={BgTextureStyle} className="w-full h-full flex justify-center items-center">
      <div className="relative z-10 w-full h-full flex justify-center items-center">   
          <Routes>
            <Route path="/" element={<RecipeListPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          </Routes>  
          <BookCover />  
      </div>     
    </div>
    </BrowserRouter>
  );
};

export default App;
