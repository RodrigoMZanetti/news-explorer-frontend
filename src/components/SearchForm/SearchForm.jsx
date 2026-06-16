import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(query) {
    if (query === "") {
      setError("Por favor, insira uma palavra-chave");
      return;
    } else {
      handleSearch(query);
      return;
    }
  }

  return (
    <div className="searchform">
      <h1 className="searchform__title">O que está acontecendo no mundo?</h1>
      <h2 className="searchform__subtitle">Encontre as últimas notícias...</h2>

      <form className="searchform__form">
        <input
          className="searchform__input"
          type="text"
          placeholder="Inserir tema"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="searchform__error">{error}</span>
        <button
          className="searchform__button"
          onClick={() => handleSubmit(query)}
        >
          Procurar
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
