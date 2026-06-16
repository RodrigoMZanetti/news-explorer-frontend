import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, isLoading, visibleCount }) {
  return (
    <div className="newscardlist">
      <h1 className="newscardlist__title">Procurar resultados</h1>
      <ul className="newscardlist__list">
        {articles.map((article) => {
          return (
            <li key={article.url}>
              <NewsCard
                title={article.title}
                date={article.publishedAt}
                description={article.description}
                source={article.source.name}
                image={article.urlToImage}
              />
            </li>
          );
        })}
      </ul>
      <button className="newscardlist__button">Mostrar mais</button>
    </div>
  );
}

export default NewsCardList;
