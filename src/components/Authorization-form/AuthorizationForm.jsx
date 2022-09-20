import React from "react";
import eyeImg from "../../assets/images/eye-password.svg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";

function AuthorizationForm({
  visibleForm,
  openRegisterPopup,
  checkbox,
  setCheckbox,
  visiblePassword,
  enter,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [login, setLogin] = React.useState(currentUser && currentUser.name);
  const [pass, setPass] = React.useState(currentUser && currentUser.password);

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

  const arrayFields = [
    {
      id: 0,
      label: "Логин",
      inputType: "text",
      field: login,
      err: "Имя должно быть длиной от трёх до двадцати символов, только буквы.",
      matchErr: "Такого пользователя не существует.",
      valid: !validName && login.length > 0,
      matchValid: currentUser.name !== login && login.length >= 3,
      chande: (e) => setLogin(e.target.value),
    },
    {
      id: 1,
      label: "Пароль",
      inputType: "password",
      field: pass,
      err: "Пароль должен содержать минимум одну цифру, одну большую и маленьку буквы латинского алфавита и быть не короче шести символов.",
      matchErr: "Не верный пароль.",
      valid: !validPassword && pass.length > 0,
      matchValid: pass !== currentUser.password && pass.length >= 6,
      chande: (e) => setPass(e.target.value),
    },
  ];

  return (
    <form
      className={`${
        !visibleForm ? "authorization-form" : "authorized-form_hidden"
      }`}
    >
      <h3 className="authorization-form__title">Авторизация</h3>
      {arrayFields.map((item) => (
        <React.Fragment key={item.id}>
          <div
            className={`${
              !visibleForm
                ? "authorization-form__password-block"
                : "authorization-form__password-block_hidden"
            }`}
          >
            <label className="authorization-form__label">{item.label}</label>
            <input
              className={`${
                !item.valid
                  ? "authorization-form__input"
                  : "authorization-form__input_error"
              }`}
              placeholder="Введите логин"
              value={item.field || ""}
              onChange={item.chande}
              required
              minLength={3}
              maxLength={30}
            ></input>
            {item.inputType === "password" && (
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
            )}
          </div>
          {item.valid && (
            <span className="authorization-form__error">{item.err}</span>
          )}
          {item.matchValid && (
            <span className="authorization-form__error">{item.matchErr}</span>
          )}
        </React.Fragment>
      ))}
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
        <button
          onClick={(e) => enter(e)}
          className={
            !validName || !validPassword
              ? "authorization-form__enter-btn_invalid"
              : "authorization-form__enter-btn"
          }
          disabled={!validPassword || !validName}
        >
          Войти
        </button>
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
