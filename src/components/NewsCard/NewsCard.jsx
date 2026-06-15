import React from "react";
import "./NewsCard.css";

function NewsCard({ title, date, description, source, image }) {
  return (
    <div className="newscard">
      <img className="newscard__image" alt={title} src={image} />
      <button className="newscard__icon">Salvar</button>
      <p className="newscard__date">{date}</p>
      <h1 className="newscard__title">{title}</h1>
      <p className="newscard__description">{description}</p>
      <p className="newscard__font">{source}</p>
    </div>
  );
}

export default NewsCard;
