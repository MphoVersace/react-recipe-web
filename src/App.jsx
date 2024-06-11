import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetailPage from './components/RecipeDetailPage';
import BookCover from './components/BookCover';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookCover />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          </Routes>  
    </BrowserRouter>
  );
};

export default App;
