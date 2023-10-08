import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

import SvgUser from './imageComponents/UserIcon.tsx';

export default function App() {
  const [isBooksActive, setIsBooksActive] = useState(false);
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);

  const handleBooksClick = () => {
    setIsBooksActive(true);
    setIsCategoriesActive(false);
  };

  const handleCategoriesClick = () => {
    setIsBooksActive(false);
    setIsCategoriesActive(true);
  };
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <nav className="panel-bg">
            <li className="Bookstore-CMS">Bookstore CMS</li>
            <NavLink
              to=""
              activeClassName="active-link"
              className={`BOOKS ${isBooksActive ? 'active-link' : ''}`}
              onClick={handleBooksClick}
            >
              Books
            </NavLink>
            <NavLink
              to="categories"
              activeClassName="active-link"
              className={`CATEGORIES ${isCategoriesActive ? 'active-link' : ''}`}
              onClick={handleCategoriesClick}
            >
              Categories
            </NavLink>
            <div className="oval">
              <SvgUser className="Mask" />
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
