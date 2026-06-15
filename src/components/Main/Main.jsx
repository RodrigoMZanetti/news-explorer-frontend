import React from "react";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main() {
  return (
    <>
      <SearchForm />
      <NewsCardList />
      <About />
    </>
  );
}

export default Main;
