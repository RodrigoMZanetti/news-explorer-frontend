import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Início
      </Link>
      <Link to="/saved-news" className="navigation__link">
        Artigos Salvos
      </Link>
      <button className="navigation__button">Entrar</button>
    </nav>
  );
}

export default Navigation;
