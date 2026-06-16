import React from "react";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({
  handleSearch,
  articles,
  isLoading,
  visibleCount,
  error,
  handleVisibleCount,
  hasSearched,
}) {
  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      <NewsCardList
        articles={articles}
        isLoading={isLoading}
        visibleCount={visibleCount}
        error={error}
        handleVisibleCount={handleVisibleCount}
        hasSearched={hasSearched}
      />
      <About />
    </>
  );
}

export default Main;
