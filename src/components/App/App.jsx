import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <BrowserRouter>
        <PopupWithForm isOpen={openModal} onClose={() => setOpenModal(false)} />
        <Header onOpenModal={() => setOpenModal(true)} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
