import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onOpenModal, isDark = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={`header ${isDark ? "" : "header--light"}`}>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <button
        className="header__menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <Navigation onOpenModal={onOpenModal} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;
