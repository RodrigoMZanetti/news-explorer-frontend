import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import Preloader from "../Preloader/Preloader";

function NewsCardList({ articles, isLoading, visibleCount, error }) {
  return (
    <div className="newscardlist">
      <h1 className="newscardlist__title">Procurar resultados</h1>
      <ul className="newscardlist__list">
        {isLoading === true ? (
          <Preloader />
        ) : error ? (
          <p>
            Desculpe, algo deu errado durante a solicitação. Pode haver um
            problema de conexão ou o servidor pode estar inativo. Por favor,
            tente novamente mais tarde.
          </p>
        ) : articles.length === 0 ? (
          <p>Nada encontrado</p>
        ) : (
          articles.map((article) => {
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
          })
        )}
      </ul>
      <button className="newscardlist__button">Mostrar mais</button>
    </div>
  );
}

export default NewsCardList;
