import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__logo">
        © 2021 Supersite, desenvolvido pela News API
      </p>
      <Link to="/" className="footer__link">
        Início
      </Link>
      <Link to="/" className="footer__link">
        Triplenten
      </Link>

      <a target="_blank" href="https://github.com/RodrigoMZanetti">
        GitHub
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/nutricionistarodrigozanetti/"
      >
        Facebook
      </a>
    </footer>
  );
}

export default Footer;
