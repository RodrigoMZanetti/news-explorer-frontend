import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  return (
    <div className="savednews">
      <h1 className="savednews__title">Artigos Salvos</h1>
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
