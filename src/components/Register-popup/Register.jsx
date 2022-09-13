import React from "react";
import { Link } from "react-router-dom";
import closeImg from "../../assets/images/Close-white.svg";
import { CurrentUserContext } from "../contexts/context";
import eyeImg from "../../assets/images/eye-password.svg";

function Register({
  visibleForm,
  openRegisterPopup,
  validName,
  validEmail,
  validPassword,
  validConfirmPassword,
  validPatronymic,
  validLastName,
  visiblePassword,
}) {
  const {
    valueName,
    setValueName,
    valueLastName,
    setValueLastName,
    valuePatronymic,
    setValuePatronymic,
    valueEmail,
    setValueEmail,
    valuePassword,
    setValuePassword,
    valueConfirmPassword,
    setValueConfirmPassword,
  } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValueName(JSON.parse(localStorage.getItem("valueName")));
    setValuePassword(JSON.parse(localStorage.getItem("valuePassword")));
    setValueConfirmPassword(
      JSON.parse(localStorage.getItem("valueConfirmPassword"))
    );
    setValueEmail(JSON.parse(localStorage.getItem("valueEmail")));
    setValueLastName(JSON.parse(localStorage.getItem("valueLastName")));
    setValuePatronymic(JSON.parse(localStorage.getItem("valuePatronymic")));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("valueName", JSON.stringify(valueName));
    localStorage.setItem("valuePassword", JSON.stringify(valuePassword));
    localStorage.setItem(
      "valueConfirmPassword",
      JSON.stringify(valueConfirmPassword)
    );
    localStorage.setItem("valueEmail", JSON.stringify(valueEmail));
    localStorage.setItem("valueLastName", JSON.stringify(valueLastName));
    localStorage.setItem("valuePatronymic", JSON.stringify(valuePatronymic));
  }, [
    valueName,
    valuePassword,
    valueConfirmPassword,
    valueEmail,
    valueLastName,
    valuePatronymic,
  ]);

  return (
    <form
      className={`${visibleForm ? "register-form" : "register-form_hidden"}`}
    >
      <div className="register-form__close">
        <img
          className="close-img"
          src={closeImg}
          alt="close"
          onClick={openRegisterPopup}
        ></img>
      </div>
      <h3 className="register-form__title">Регистрация</h3>
      <label className="register-form__label">Фамилия *</label>
      <input
        className={`${
          validLastName && valueLastName.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={valueLastName}
        onChange={(e) => setValueLastName(e.target.value)}
      ></input>
      {!validLastName && valueLastName.length > 0 && (
        <span className="authorization-form__error">
          Фамилия должна быть длиной от трёх до двадцати символов, только буквы.
        </span>
      )}
      <label className="register-form__label">Имя *</label>
      <input
        className={`${
          validName && valueName.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
      ></input>
      {!validName && valueName.length > 0 && (
        <span className="authorization-form__error">
          Имя должно быть длиной от трёх до двадцати символов, только буквы.
        </span>
      )}
      <label className="register-form__label">Отчество</label>
      <input
        className={`${
          validPatronymic && valuePatronymic.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={valuePatronymic}
        onChange={(e) => setValuePatronymic(e.target.value)}
      ></input>
      {!validPatronymic && valuePatronymic.length > 0 && (
        <span className="authorization-form__error">
          Отчество должно быть длиной от трёх до двадцати символов, только
          буквы.
        </span>
      )}
      <label className="register-form__label">Email *</label>
      <input
        className={`${
          validEmail && valueEmail.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="email"
        value={valueEmail}
        onChange={(e) => setValueEmail(e.target.value)}
      ></input>
      {!validEmail && valueEmail.length > 0 && (
        <span className="authorization-form__error">
          Введите корректный email
        </span>
      )}
      <div
        className={`${
          visibleForm
            ? "register-form__password-block"
            : "register-form__password-block_hidden"
        }`}
      >
        <label className="register-form__label">Пароль *</label>
        <input
          className={`${
            validPassword && valuePassword.length > 0
              ? "register-form__input"
              : "register-form__input_error"
          }`}
          type="password"
          value={valuePassword}
          onChange={(e) => setValuePassword(e.target.value)}
        ></input>
        <img
          className={`${
            visibleForm ? "register-form__eye" : "register-form__eye_hidden"
          }`}
          src={eyeImg}
          alt="eye"
          onClick={(e) => visiblePassword(e)}
        ></img>
      </div>
      {!validPassword && valuePassword.length > 0 && (
        <span className="authorization-form__error">
          Пароль должен содержать минимум одну цифру, одну большую и маленьку
          буквы латинского алфавита и быть не короче шести символов
        </span>
      )}
      <div
        className={`${
          visibleForm
            ? "register-form__password-block"
            : "register-form__password-block_hidden"
        }`}
      >
        <label className="register-form__label">Подтвердите пароль *</label>
        <input
          className={`${
            validConfirmPassword && valueConfirmPassword.length > 0
              ? "register-form__input"
              : "register-form__input_error"
          }`}
          type="password"
          value={valueConfirmPassword}
          onChange={(e) => setValueConfirmPassword(e.target.value)}
        ></input>
        <img
          className={`${
            visibleForm ? "register-form__eye" : "register-form__eye_hidden"
          }`}
          src={eyeImg}
          alt="eye"
          onClick={(e) => visiblePassword(e)}
        ></img>
      </div>
      {!validConfirmPassword && valueConfirmPassword.length > 0 && (
        <span className="authorization-form__error">Пароли не совпадают</span>
      )}
      <Link to="/home">
        <button
          className={`${
            validName &&
            validPassword &&
            validConfirmPassword &&
            validEmail &&
            validLastName &&
            validPatronymic
              ? "register-form__button"
              : "register-form__button_invalid"
          }`}
          disabled={
            !validPassword ||
            !validName ||
            !validConfirmPassword ||
            !validEmail ||
            !validLastName ||
            !validPatronymic
          }
        >
          Регистрация
        </button>
      </Link>
    </form>
  );
}

export default Register;
