import React from "react";
// import Navbar from "./components/Navbar";
import BookCover from "./components/BookCover";
import BgTexture from "./assets/moso9.jpg";

console.log(BgTexture);

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
  <div style={BgTextureStyle} className="w-full h-full flex justify-center items-center">
    <BookCover/>
  </div>
  );
};

export default App;
