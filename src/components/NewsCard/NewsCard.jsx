import React, { useContext } from "react";
import "./NewsCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { createArticle } from "../../utils/MainApi";

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
}) {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  function handleSave() {
    const token = localStorage.getItem("token");
    const baseUrl = import.meta.env.VITE_API_URL;
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
    );
  }

  return (
    <div className="newscard">
      <img className="newscard__image" alt={title} src={image} />
      {keyword && <span className="newscard__keyword">{keyword}</span>}
      <button
        className="newscard__icon"
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
          />
        </svg>
      </button>
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
