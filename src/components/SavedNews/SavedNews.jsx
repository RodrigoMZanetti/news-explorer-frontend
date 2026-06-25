import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";
import { getArticles } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ onOpenModal }) {
  const [savedArticles, setSavedArticles] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const baseUrl = import.meta.env.VITE_API_URL;
    getArticles(baseUrl, token)
      .then((res) => res.json())
      .then((data) => setSavedArticles(data));
  }, []);

  const keywordCount = {};
  savedArticles.forEach((article) => {
    keywordCount[article.keyword] = (keywordCount[article.keyword] || 0) + 1;
  });
  const sortedKeywords = Object.entries(keywordCount).sort(
    (a, b) => b[1] - a[1],
  );

  const keywordsText =
    sortedKeywords.length <= 3
      ? sortedKeywords.map((par) => par[0]).join(", ")
      : `${sortedKeywords
          .slice(0, 2)
          .map((par) => par[0])
          .join(", ")} e mais ${sortedKeywords.length - 2}`;

  return (
    <div className="savednews">
      <Header onOpenModal={onOpenModal} isDark={false} />
      <h1 className="savednews__title">Artigos Salvos</h1>
      <SavedNewsHeader
        name={currentUser?.name}
        amount={savedArticles.length}
        keywords={keywordsText}
      />
      <ul>
        {savedArticles.map((article) => {
          return (
            <li key={article._id}>
              <NewsCard
                title={article.title}
                date={article.date}
                source={article.fonte}
                image={article.image}
                description={article.text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SavedNews;
