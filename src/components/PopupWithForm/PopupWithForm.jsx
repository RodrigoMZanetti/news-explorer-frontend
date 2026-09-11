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
    if (title === "Sign up") {
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
    if (title === "Log in") {
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
            throw new Error(data.message || "There was a login error.");
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
            throw new Error(result.message || "Error fetching user.");
          }

          setCurrentUser(result);
          onClose();
        })
        .catch((error) => {
          setFormError(
            `Error: ${error.message}! There was a login error, please try again!`,
          );
        });

      return;
    }

    if (title === "Registration Completed") {
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
        {title !== "Registration Completed" && (
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
              placeholder="Password"
              required
              onChange={checkPassword}
              value={password}
            />
          </>
        )}
        {title === "Sign up" && (
          <input
            className="popupwithform__input"
            type="text"
            placeholder="Username"
            required
            onChange={checkName}
            value={name}
          />
        )}
        {title === "Registration Completed" && (
          <p>Registration completed successfully. Please log in!</p>
        )}
        {formError && (
          <span className="popupwithform__formError">{formError}</span>
        )}
        <button
          className="popupwithform__access-button"
          disabled={
            title === "Sign up"
              ? !(emailValidation && passwordValidation && nameValidation)
              : title === "Log in"
                ? !(emailValidation && passwordValidation)
                : title === "Registration Completed"
                  ? false
                  : true
          }
          type="submit"
        >
          {buttonText}
        </button>
        {title !== "Registration Completed" && (
          <a className="popupwithform__link" onClick={onSwitch}>
            {link}
          </a>
        )}
      </form>
    </div>
  );
}

export default PopupWithForm;
