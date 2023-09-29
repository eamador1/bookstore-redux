import React from 'react';
import './App.css';

import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

export default function App() {
  const activeClassName = 'nav-active';
  return (
    <BrowserRouter>
      <section>
        <nav>
          <li>Bookstore CMS</li>
          <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Books</NavLink>
          <NavLink to="categories" className={({ isActive }) => isActive && activeClassName}>Categories</NavLink>
        </nav>

      </section>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}
