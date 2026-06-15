import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
  return (
    <div className="newscardlist">
      <h1 className="newscardlist__title">Procurar resultados</h1>
      <ul className="newscardlist__list">
        <li className="newscardlist__item">
          <NewsCard />
        </li>
        <li className="newscardlist__item">
          <NewsCard />
        </li>
        <li className="newscardlist__item">
          <NewsCard />
        </li>
      </ul>
      <button className="newscardlist__button">Mostrar mais</button>
    </div>
  );
}

export default NewsCardList;
