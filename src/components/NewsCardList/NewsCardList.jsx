import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import Preloader from "../Preloader/Preloader";

function NewsCardList({
  articles,
  isLoading,
  visibleCount,
  error,
  handleVisibleCount,
  hasSearched,
  searchQuery,
  onOpenLoginModal,
  savedArticles,
  setSavedArticles,
}) {
  if (!hasSearched) return null;
  return (
    <div className="newscardlist">
      <h1 className="newscardlist__title">Search results</h1>
      <ul className="newscardlist__list">
        {isLoading === true ? (
          <Preloader />
        ) : error ? (
          <p>
            Sorry, something went wrong with the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        ) : articles.length === 0 ? (
          <p>Nothing found</p>
        ) : (
          articles.slice(0, visibleCount).map((article) => {
            return (
              <li key={article.url}>
                <NewsCard
                  title={article.title}
                  date={article.publishedAt}
                  description={article.description}
                  source={article.source.name}
                  image={article.urlToImage}
                  searchQuery={searchQuery}
                  link={article.url}
                  onOpenLoginModal={onOpenLoginModal}
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                />
              </li>
            );
          })
        )}
      </ul>
      {visibleCount >= articles.length ? null : (
        <button className="newscardlist__button" onClick={handleVisibleCount}>
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
