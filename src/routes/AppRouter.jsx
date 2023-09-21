import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages import
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';

// component
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search/' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
