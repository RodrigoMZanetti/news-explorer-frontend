import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(query) {
    if (query === "") {
      setError("Please enter a keyword");
      return;
    } else {
      handleSearch(query);
      return;
    }
  }

  return (
    <div className="searchform">
      <h1 className="searchform__title"> What's happening in the world?</h1>
      <h2 className="searchform__subtitle">Find the latest news...</h2>

      <form className="searchform__form">
        <input
          className="searchform__input"
          type="text"
          placeholder="Enter a topic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="searchform__error">{error}</span>
        <button
          type="button"
          className="searchform__button"
          onClick={() => handleSubmit(query)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
