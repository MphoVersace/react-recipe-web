import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
    <div style={BgTextureStyle} className="w-full h-full flex justify-center items-center">
      <div className="relative z-10 w-full h-full flex justify-center items-center">   
           
          <BookCover />  
      </div>     
    </div>
    </BrowserRouter>
  );
};

export default App;
