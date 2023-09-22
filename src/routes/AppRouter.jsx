import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages import
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';
import LyricsPage from 'pages/lyrics/LyricsPage';
import NotFoundPage from 'pages/not-found/NotFoundPage';

// component
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search/' element={<SearchPage />} />
        <Route path='/lyrics/:id' element={<LyricsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
