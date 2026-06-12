import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Link to="/" className="header__link">
        Início
      </Link>
      <Link to="/saved-news" className="header__link">
        Artigos Salvos
      </Link>
      <button className="header__button">Entrar</button>
    </header>
  );
}

export default Header;
