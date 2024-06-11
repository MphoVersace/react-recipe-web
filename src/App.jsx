import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetailPage from './components/RecipeDetailPage';
import RecipeListPage from './components/RecipeListPage';
import BookCover from './components/BookCover';
import './App.css';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<BookCover />} />
            <Route path="/RecipeListPage/*" element={<RecipeListPage />} />
            <Route path="/recipedetailpage/:id" element={<RecipeDetailPage />} />
          </Routes>  
    </Router>
  );
};


export default App;
