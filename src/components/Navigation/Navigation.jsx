import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Navigation({ onOpenModal, isMenuOpen }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  function handleLogout() {
    localStorage.removeItem("token");
    setCurrentUser(null);
  }
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation--open" : ""}`}>
      <Link to="/" className="navigation__link">
        Home
      </Link>
      {currentUser ? (
        <>
          <Link to="/saved-news" className="navigation__link">
            Saved Articles
          </Link>
          <button className="navigation__button" onClick={handleLogout}>
            {currentUser.name} • Logout
          </button>
        </>
      ) : (
        <button className="navigation__button" onClick={onOpenModal}>
          Login
        </button>
      )}
    </nav>
  );
}

export default Navigation;
