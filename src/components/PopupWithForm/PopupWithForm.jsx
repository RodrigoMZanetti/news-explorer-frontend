import React, { useEffect, useState, useContext } from "react";
import "./PopupWithForm.css";
import { signIn, signUp, getCurrentUser } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function PopupWithForm({
  link,
  title,
  buttonText,
  isOpen,
  onClose,
  onSwitch,
  onSuccess,
}) {
  const [emailValidation, setEmailValidation] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);

  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState(false);

  const [formError, setFormError] = useState("");

  const { setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  function checkEmail(e) {
    const input = e.target.value;
    const validation = e.target.validity.valid;
    setEmailValidation(validation);
    setEmail(input);
    return;
  }

  function checkPassword(e) {
    const input = e.target.value;
    const validation = e.target.validity.valid;
    setPasswordValidation(validation);
    setPassword(input);
    return;
  }

  function checkName(e) {
    const input = e.target.value;
    const validation = e.target.validity.valid;
    setNameValidation(validation);
    setName(input);
    return;
  }

  function submitForm(e) {
    const baseUrl = import.meta.env.VITE_API_URL;

    e.preventDefault();
    if (title === "Inscrever-se") {
      signUp(baseUrl, email, name, password)
        .then((res) => {
          const isSuccess = res.ok;

          return res.json().then((data) => ({
            data,
            isSuccess,
          }));
        })
        .then(({ data, isSuccess }) => {
          if (isSuccess) {
            onSuccess();
          } else {
            setFormError(data.message);
          }
        })
        .catch((err) => console.error(err));
      return;
    }
    if (title === "Entrar") {
      signIn(baseUrl, email, password)
        .then((res) => {
          const isSuccess = res.ok;

          return res.json().then((data) => ({
            data,
            isSuccess,
          }));
        })
        .then(({ data, isSuccess }) => {
          if (!isSuccess) {
            throw new Error(data.message || "Houve um erro no Login.");
          }

          localStorage.setItem("token", data.token);

          return getCurrentUser(baseUrl, data.token);
        })
        .then((res) => {
          const isSuccess = res.ok;

          return res.json().then((result) => ({
            result,
            isSuccess,
          }));
        })
        .then(({ result, isSuccess }) => {
          if (!isSuccess) {
            throw new Error(result.message || "Erro ao buscar usuário.");
          }

          setCurrentUser(result);
          onClose();
        })
        .catch((error) => {
          setFormError(
            `Error: ${error.message}! Houve um erro no Login, tente novamente!`,
          );
        });

      return;
    }

    if (title === "Cadastro Feito") {
      e.preventDefault();
      onSwitch();
      return;
    }
  }

  if (!isOpen) return null;
  return (
    <div className="popupwithform" onClick={onClose}>
      <form
        className="popupwithform__form"
        onClick={(e) => e.stopPropagation()}
        onSubmit={submitForm}
      >
        <button className="popupwithform__close-button" onClick={onClose}>
          X
        </button>
        <h1 className="popupwithform__title">{title}</h1>
        {title !== "Cadastro Feito" && (
          <>
            <input
              className="popupwithform__input"
              type="email"
              placeholder="E-mail"
              required
              onChange={checkEmail}
              value={email}
            />

            <input
              className="popupwithform__input"
              type="password"
              placeholder="Senha"
              required
              onChange={checkPassword}
              value={password}
            />
          </>
        )}
        {title === "Inscrever-se" && (
          <input
            className="popupwithform__input"
            type="text"
            placeholder="Nome de usuário"
            required
            onChange={checkName}
            value={name}
          />
        )}
        {title === "Cadastro Feito" && (
          <p>Cadastro feito com sucesso. Faça login!</p>
        )}
        {formError && (
          <span className="popupwithform__formError">{formError}</span>
        )}
        <button
          className="popupwithform__access-button"
          disabled={
            title === "Inscrever-se"
              ? !(emailValidation && passwordValidation && nameValidation)
              : title === "Entrar"
                ? !(emailValidation && passwordValidation)
                : title === "Cadastro Feito"
                  ? false
                  : true
          }
          type="submit"
        >
          {buttonText}
        </button>
        {title !== "Cadastro Feito" && (
          <a className="popupwithform__link" onClick={onSwitch}>
            {link}
          </a>
        )}
      </form>
    </div>
  );
}

export default PopupWithForm;
