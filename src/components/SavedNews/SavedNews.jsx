import React from "react";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./SavedNews.css";

function SavedNews({ onOpenModal }) {
  return (
    <div className="savednews">
      <Header onOpenModal={onOpenModal} isDark={false} />
      <h1 className="savednews__title">Artigos Salvos</h1>
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
