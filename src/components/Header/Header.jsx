import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onOpenModal, isDark = true }) {
  return (
    <header className={`header ${isDark ? "" : "header--light"}`}>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Navigation onOpenModal={onOpenModal} />
    </header>
  );
}

export default Header;
