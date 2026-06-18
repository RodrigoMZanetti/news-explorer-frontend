import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import { searchNews } from "../../utils/NewsApi";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(query) {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const resultado = await searchNews(query);
      setArticles(resultado.articles);
      localStorage.setItem("articles", JSON.stringify(resultado.articles));
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function handleVisibleCount() {
    setVisibleCount(visibleCount + 3);
    return;
  }

  useEffect(() => {
    const allArticles = localStorage.getItem("articles");
    if (allArticles) {
      setArticles(JSON.parse(allArticles));
      setHasSearched(true);
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <PopupWithForm
          isOpen={activeModal === "login"}
          onClose={() => setActiveModal(null)}
          onSwitch={() => setActiveModal("signup")}
          title="Entrar"
          buttonText="Entrar"
          link="ou Inscreva-se"
        />
        <PopupWithForm
          isOpen={activeModal === "signup"}
          onClose={() => setActiveModal(null)}
          onSwitch={() => setActiveModal("login")}
          title="Inscrever-se"
          buttonText="Inscrever"
          link="ou Faça Login"
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                onOpenModal={() => setActiveModal("login")}
                handleSearch={handleSearch}
                articles={articles}
                isLoading={isLoading}
                visibleCount={visibleCount}
                error={error}
                handleVisibleCount={handleVisibleCount}
                hasSearched={hasSearched}
              />
            }
          />
          <Route
            path="/saved-news"
            element={<SavedNews onOpenModal={() => setActiveModal("login")} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
