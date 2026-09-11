import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ name, amount, keywords }) {
  return (
    <div className="savednewsheader">
      <p className="savednewsheader__text">Saved Articles</p>
      <h1 className="savednewsheader__title">
        {name}, you have {amount} saved {amount === 1 ? "article" : "articles"}
      </h1>
      <p className="savednewsheader__keywords">By keywords: {keywords}</p>
    </div>
  );
}

export default SavedNewsHeader;
