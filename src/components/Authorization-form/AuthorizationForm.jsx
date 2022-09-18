import React from "react";
import { Link } from "react-router-dom";
import eyeImg from "../../assets/images/eye-password.svg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";

function AuthorizationForm({
  visibleForm,
  openRegisterPopup,
  checkbox,
  setCheckbox,
  visiblePassword,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [login, setLogin] = React.useState(currentUser && currentUser.name);
  const [pass, setPass] = React.useState(currentUser && currentUser.password);
  // const user =
  //   localStorage.length > 0 && JSON.parse(Object.values(localStorage));

  const regexPassword =
    /[A-Z]/g.test(pass) && /[a-z]/g.test(pass) && /[^a-zA-Z]/g.test(pass);
  const validPassword =
    pass &&
    pass !== null &&
    pass.length >= 6 &&
    pass.length <= 30 &&
    regexPassword;

  const validName =
    login &&
    login !== null &&
    login.length >= 3 &&
    login.length <= 20 &&
    login === login.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const checkboxClick = (e) => {
    e.preventDefault();
    setCheckbox(!checkbox);
    if (!checkbox) {
      setPass(currentUser.password);
      setLogin(currentUser.name);
    } else {
      setPass("");
      setLogin("");
    }
  };

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
          login && (validName || login.length >= 3)
            ? "authorization-form__input"
            : "authorization-form__input_error"
        }`}
        placeholder="Введите логин"
        value={login || ""}
        onChange={(e) => setLogin(e.target.value)}
        required
        minLength={3}
        maxLength={30}
      ></input>
      {login && !validName && login.length > 0 && login.length <= 2 && (
        <span className="authorization-form__error">
          Имя должно быть длиной от трёх до двадцати символов, только буквы.
        </span>
      )}
      {login &&
        currentUser &&
        currentUser.name !== login &&
        login.length >= 3 && (
          <span className="authorization-form__error">
            Такого пользователя не существует
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
            pass && validPassword && pass.length >= 5
              ? "authorization-form__input"
              : "authorization-form__input_error"
          }`}
          placeholder="Введите пароль"
          value={pass || ""}
          onChange={(e) => setPass(e.target.value)}
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
      {pass && validPassword && pass.length > 0 && pass.length <= 5 && (
        <span className="authorization-form__error">
          Пароль должен содержать минимум одну цифру, одну большую и маленьку
          буквы латинского алфавита и быть не короче шести символов
        </span>
      )}

      {/* Правильно выводить ошибку, что пароли не совпадают. Только в том случае, если реально не совпадают, а если локалсторадж пустой, то не показывать */}
      {currentUser && pass !== currentUser.password && pass.length >= 5 && (
        <span className="authorization-form__error">Не верный пароль</span>
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
              !validName || !validPassword
                ? "authorization-form__enter-btn_invalid"
                : "authorization-form__enter-btn"
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
