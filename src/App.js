import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeListPage from './RecipeListPage';
import RecipeDetailPage from './RecipeDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


