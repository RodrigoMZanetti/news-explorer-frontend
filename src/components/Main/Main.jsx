import React from "react";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <>
      <h1>Página Principal</h1>
      <SearchForm />
      <NewsCardList />
      <About />
    </>
  );
}

export default Main;
