import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import { searchNews } from "../../utils/NewsApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { getCurrentUser } from "../../utils/MainApi";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    const baseUrl = import.meta.env.VITE_API_URL;
    if (localStorageToken) {
      getCurrentUser(baseUrl, localStorageToken)
        .then((res) => res.json())
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
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
              element={
                <SavedNews onOpenModal={() => setActiveModal("login")} />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
