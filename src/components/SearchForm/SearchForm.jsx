import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform">
      <h1 className="searchform__title">O que está acontecendo no mundo?</h1>
      <h2 className="searchform__subtitle">Encontre as últimas notícias...</h2>

      <form className="searchform__form">
        <input
          className="searchform__input"
          type="text"
          placeholder="Inserir tema"
        />
        <button className="searchform__button">Procurar</button>
      </form>
    </div>
  );
}

export default SearchForm;
