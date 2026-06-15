import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ name, amount, keywords }) {
  return (
    <div className="savednewsheader">
      <p className="savednewsheader__text">Artigos salvos</p>
      <h1 className="savednewsheader__title">
        {name}, você tem {amount} artigos salvos
      </h1>
      <p className="savednewsheader__keywords">
        "Por palavras-chave: {keywords}"
      </p>
    </div>
  );
}

export default SavedNewsHeader;
