import React from "react";
import Header from "../Header/Header";
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
  onOpenModal,
  searchQuery,
  onOpenLoginModal,
  savedArticles,
}) {
  return (
    <>
      <div className="header__background">
        <Header onOpenModal={onOpenModal} />
        <SearchForm handleSearch={handleSearch} />
      </div>
      <NewsCardList
        articles={articles}
        isLoading={isLoading}
        visibleCount={visibleCount}
        error={error}
        handleVisibleCount={handleVisibleCount}
        hasSearched={hasSearched}
        searchQuery={searchQuery}
        onOpenLoginModal={onOpenLoginModal}
        savedArticles={savedArticles}
      />
      <About />
    </>
  );
}

export default Main;
