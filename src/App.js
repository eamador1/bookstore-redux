import React from 'react';
import './App.css';

import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <li>Bookstore CMS</li>
          <NavLink to="" activeclassname="active-link" className>Books</NavLink>
          <NavLink to="categories" activeclassname="active-link">Categories</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}
