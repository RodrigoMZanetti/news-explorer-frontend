import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import { searchNews } from "../../utils/NewsApi";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  async function handleSearch(query) {
    setIsLoading(true);
    try {
      const resultado = await searchNews(query);
      setArticles(resultado);
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

  return (
    <>
      <BrowserRouter>
        <PopupWithForm
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Entrar"
          buttonText="Entrar"
          link="ou Inscreva-se"
        />
        <Header onOpenModal={() => setOpenModal(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleSearch={handleSearch}
                articles={articles}
                isLoading={isLoading}
                visibleCount={visibleCount}
                error={error}
                handleVisibleCount={handleVisibleCount}
              />
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
