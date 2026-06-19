import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onOpenModal, isMenuOpen }) {
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation--open" : ""}`}>
      <Link to="/" className="navigation__link">
        Início
      </Link>
      <Link to="/saved-news" className="navigation__link">
        Artigos Salvos
      </Link>
      <button className="navigation__button" onClick={onOpenModal}>
        Entrar
      </button>
    </nav>
  );
}

export default Navigation;
