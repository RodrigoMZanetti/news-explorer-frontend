import React, { useContext } from "react";
import "./NewsCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { createArticle, deleteArticle } from "../../utils/MainApi";

function NewsCard({
  title,
  date,
  description,
  source,
  image,
  keyword,
  onDelete,
  searchQuery,
  link,
  onOpenLoginModal,
  savedArticles = [],
  setSavedArticles,
}) {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const savedArticle = savedArticles.find((article) => article.link === link);

  function handleSave() {
    const token = localStorage.getItem("token");
    const baseUrl = import.meta.env.VITE_API_URL;

    if (!currentUser) {
      onOpenLoginModal();
      return;
    }

    if (savedArticle) {
      deleteArticle(baseUrl, token, savedArticle._id).then(() => {
        setSavedArticles(
          savedArticles.filter((article) => article._id !== savedArticle._id),
        );
      });
      return;
    }

    createArticle(
      baseUrl,
      searchQuery,
      title,
      description,
      date,
      source,
      link,
      image,
      token,
    )
      .then((res) => res.json())
      .then((newArticle) => {
        setSavedArticles([...savedArticles, newArticle]);
      });
  }

  return (
    <div className="newscard">
      <img className="newscard__image" alt={title} src={image} />
      {keyword && <span className="newscard__keyword">{keyword}</span>}

      {!onDelete && (
        <button
          className={`newscard__icon ${savedArticle ? "newscard__icon--saved" : ""}`}
          title="Faça o login para salvar os artigos"
          onClick={handleSave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 2h12a1 1 0 0 1 1 1v18l-7-3-7 3V3a1 1 0 0 1 1-1z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={savedArticle ? "currentColor" : "none"}
            />
          </svg>
        </button>
      )}

      {onDelete && (
        <button className="newscard__delete" onClick={onDelete}>
          🗑️
        </button>
      )}
      <p className="newscard__date">{formattedDate}</p>
      <h1 className="newscard__title">{title}</h1>
      <p className="newscard__description">{description}</p>
      <p className="newscard__source">{source}</p>
    </div>
  );
}

export default NewsCard;
