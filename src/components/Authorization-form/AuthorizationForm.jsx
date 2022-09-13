import React from "react";
import { Link } from "react-router-dom";
import eyeImg from "../../assets/images/eye-password.svg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";

function AuthorizationForm({
  visibleForm,
  openRegisterPopup,
  validName,
  validPassword,
  checkbox,
  setCheckbox,
  visiblePassword,
}) {
  const { valueName, setValueName, valuePassword, setValuePassword } =
    React.useContext(CurrentUserContext);

  const checkboxClick = (e) => {
    e.preventDefault();
    setCheckbox(!checkbox);
    if (!checkbox) {
      console.log("кладу");
      localStorage.getItem("valueName");
      localStorage.getItem("valuePassword");
      localStorage.setItem("valueName", JSON.stringify(valueName));
      localStorage.setItem("valuePassword", JSON.stringify(valuePassword));
    } else {
      console.log("удаляю");
      localStorage.getItem("valueName");
      localStorage.getItem("valuePassword");
      localStorage.removeItem("valueName");
      localStorage.removeItem("valuePassword");
    }
  };
  // Сохранение состояния строки поиска фильмов
  // React.useEffect(() => {
  //   setValueName(JSON.parse(localStorage.getItem('valueName')));
  //   setValuePassword(JSON.parse(localStorage.getItem('valuePassword')));
  // }, [])
  // React.useEffect(() => {
  //   localStorage.setItem('valueName', JSON.stringify(valueName));
  //   localStorage.setItem('valuePassword', JSON.stringify(valuePassword));
  // }, [valueName, valuePassword])

  return (
    <form
      className={`${
        !visibleForm ? "authorization-form" : "authorized-form_hidden"
      }`}
    >
      <h3 className="authorization-form__title">Авторизация</h3>
      <label className="authorization-form__label">Логин</label>
      <input
        className={`${
          validName && valueName.length > 0
            ? "authorization-form__input"
            : "authorization-form__input_error"
        }`}
        placeholder="Введите логин"
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
        required
        minLength={3}
        maxLength={30}
      ></input>
      {!validName && valueName && valueName.length > 0 && (
        <span className="authorization-form__error">
          Имя должно быть длиной от трёх до двадцати символов, только буквы.
        </span>
      )}
      <div
        className={`${
          !visibleForm
            ? "authorization-form__password-block"
            : "authorization-form__password-block_hidden"
        }`}
      >
        <label className="authorization-form__label">Пароль</label>
        <input
          type="password"
          className={`${
            validPassword && valuePassword && valuePassword.length > 0
              ? "authorization-form__input"
              : "authorization-form__input_error"
          }`}
          placeholder="Введите пароль"
          value={valuePassword}
          onChange={(e) => setValuePassword(e.target.value)}
          required
          minLength={6}
          maxLength={30}
        ></input>
        <img
          className={`${
            !visibleForm
              ? "authorization-form__eye"
              : "authorization-form__eye_hidden"
          }`}
          src={eyeImg}
          alt="eye"
          onClick={(e) => visiblePassword(e)}
        ></img>
      </div>
      {!validPassword && valuePassword && valuePassword.length > 0 && (
        <span className="authorization-form__error">
          Пароль должен содержать минимум одну цифру, одну большую и маленьку
          буквы латинского алфавита и быть не короче шести символов
        </span>
      )}
      <div className="authorization-form__remember-and-enter">
        <div className="checkbox">
          <button className="checkbox__btn" onClick={checkboxClick}>
            <img
              className={`${checkbox ? "checkbox_visible" : "checkbox_hidden"}`}
              src={checkboxImg}
              alt=""
            ></img>
          </button>
          <span className="checkbox__remember">Запомнить</span>
        </div>
        <Link to="/home" className="authorization-form__enter">
          <button
            className={
              validName && validPassword
                ? "authorization-form__enter-btn"
                : "authorization-form__enter-btn_invalid"
            }
            disabled={!validPassword || !validName}
          >
            Войти
          </button>
        </Link>
      </div>
      <button
        className="authorization-form__register"
        onClick={openRegisterPopup}
      >
        Регистрация
      </button>
    </form>
  );
}

export default AuthorizationForm;
