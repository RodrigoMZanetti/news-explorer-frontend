import React from "react";

function PopupWithForm({ link, title, buttonText }) {
  return (
    <div className="popupwithform">
      <form className="popupwithform__form" action="">
        <button className="popupwithform__close-button">X</button>
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
