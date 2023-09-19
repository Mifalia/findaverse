import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages import
import HomePage from 'pages/home/HomePage';

// component
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
