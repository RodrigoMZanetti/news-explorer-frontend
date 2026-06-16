import React from "react";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ handleSearch }) {
  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      <NewsCardList />
      <About />
    </>
  );
}

export default Main;
