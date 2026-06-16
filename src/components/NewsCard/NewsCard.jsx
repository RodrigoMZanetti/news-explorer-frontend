import React from "react";
import "./NewsCard.css";

function NewsCard({ title, date, description, source, image }) {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="newscard">
      <img className="newscard__image" alt={title} src={image} />
      <button
        className="newscard__icon"
        title="Faça o login para salvar os artigos"
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
      <p className="newscard__date">{formattedDate}</p>
      <h1 className="newscard__title">{title}</h1>
      <p className="newscard__description">{description}</p>
      <p className="newscard__font">{source}</p>
    </div>
  );
}

export default NewsCard;
