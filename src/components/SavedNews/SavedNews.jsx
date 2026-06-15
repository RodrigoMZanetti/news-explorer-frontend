import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

function SavedNews() {
  return (
    <div className="savednews">
      <h1 className="savednews__title">Artigos Salvos</h1>
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
