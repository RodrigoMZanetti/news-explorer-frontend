import React, { useEffect } from "react";

function PopupWithForm({ link, title, buttonText, isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div className="popupwithform" onClick={onClose}>
      <form
        className="popupwithform__form"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popupwithform__close-button" onClick={onClose}>
          X
        </button>
        <h1 className="popupwithform__title">{title}</h1>
        <input
          className="popupwithform__input"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="popupwithform__input"
          type="password"
          placeholder="Senha"
        />
        <button className="popupwithform__access-button">{buttonText}</button>
      </form>
      <a className="popupwithform__link">{link}</a>
    </div>
  );
}

export default PopupWithForm;
