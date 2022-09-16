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
  setCurrentUser
}) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')));
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

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
          validLastName && currentUser.lastName.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={currentUser.lastName || ""}
        onChange={(e) =>
          setCurrentUser({
            id: currentUser.id,
            img: currentUser.img,
            name: currentUser.name,
            lastName: e.target.value,
            patronymic: currentUser.patronymic,
            date: currentUser.date,
            email: currentUser.email,
            lastDate: currentUser.lastDate,
            currentSession: currentUser.currentSession,
            cart: currentUser.cart,
            edit: currentUser.edit,
            tel: currentUser.tel,
            gender: currentUser.gender,
            password: currentUser.password,
            confirmPassword: currentUser.confirmPassword,
            roles: currentUser.roles,
            functions: currentUser.functions,
          })
        }
        // onChange={(e) => setValueLastName(e.target.value)}
      ></input>
      {!validLastName &&
        currentUser.lastName &&
        currentUser.lastName.length > 0 && (
          <span className="authorization-form__error">
            Фамилия должна быть длиной от трёх до двадцати символов, только
            буквы.
          </span>
        )}
      <label className="register-form__label">Имя *</label>
      <input
        className={`${
          validName && currentUser.name.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={currentUser.name || ""}
        onChange={(e) =>
          setCurrentUser({
            id: currentUser.id,
            img: currentUser.img,
            name: e.target.value,
            lastName: currentUser.lastName,
            patronymic: currentUser.patronymic,
            date: currentUser.date,
            email: currentUser.email,
            lastDate: currentUser.lastDate,
            currentSession: currentUser.currentSession,
            cart: currentUser.cart,
            edit: currentUser.edit,
            tel: currentUser.tel,
            gender: currentUser.gender,
            password: currentUser.password,
            confirmPassword: currentUser.confirmPassword,
            roles: currentUser.roles,
            functions: currentUser.functions,
          })
        }
      ></input>
      {!validName && currentUser.name && currentUser.name.length > 0 && (
        <span className="authorization-form__error">
          Имя должно быть длиной от трёх до двадцати символов, только буквы.
        </span>
      )}
      <label className="register-form__label">Отчество</label>
      <input
        className={`${
          validPatronymic && currentUser.patronymic.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={currentUser.patronymic || ""}
        onChange={(e) =>
          setCurrentUser({
            id: currentUser.id,
            img: currentUser.img,
            name: currentUser.name,
            lastName: currentUser.lastName,
            patronymic: e.target.value,
            date: currentUser.date,
            email: currentUser.email,
            lastDate: currentUser.lastDate,
            currentSession: currentUser.currentSession,
            cart: currentUser.cart,
            edit: currentUser.edit,
            tel: currentUser.tel,
            gender: currentUser.gender,
            password: currentUser.password,
            confirmPassword: currentUser.confirmPassword,
            roles: currentUser.roles,
            functions: currentUser.functions,
          })
        }
      ></input>
      {currentUser.patronymic &&
        !validPatronymic &&
        currentUser.patronymic.length > 0 && (
          <span className="authorization-form__error">
            Отчество должно быть длиной от трёх до двадцати символов, только
            буквы.
          </span>
        )}
      <label className="register-form__label">Email *</label>
      <input
        className={`${
          validEmail && currentUser.email.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="email"
        value={currentUser.email || ""}
        onChange={(e) =>
          setCurrentUser({
            id: currentUser.id,
            img: currentUser.img,
            name: currentUser.name,
            lastName: currentUser.lastName,
            patronymic: currentUser.patronymic,
            date: currentUser.date,
            email: e.target.value,
            lastDate: currentUser.lastDate,
            currentSession: currentUser.currentSession,
            cart: currentUser.cart,
            edit: currentUser.edit,
            tel: currentUser.tel,
            gender: currentUser.gender,
            password: currentUser.password,
            confirmPassword: currentUser.confirmPassword,
            roles: currentUser.roles,
            functions: currentUser.functions,
          })
        }
      ></input>
      {currentUser.email && !validEmail && currentUser.email.length > 0 && (
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
            validPassword && currentUser.password.length > 0
              ? "register-form__input"
              : "register-form__input_error"
          }`}
          type="password"
          value={currentUser.password || ""}
          onChange={(e) =>
            setCurrentUser({
              id: currentUser.id,
              img: currentUser.img,
              name: currentUser.name,
              lastName: currentUser.lastName,
              patronymic: currentUser.patronymic,
              date: currentUser.date,
              email: currentUser.email,
              lastDate: currentUser.lastDate,
              currentSession: currentUser.currentSession,
              cart: currentUser.cart,
              edit: currentUser.edit,
              tel: currentUser.tel,
              gender: currentUser.gender,
              password: e.target.value,
              confirmPassword: currentUser.confirmPassword,
              roles: currentUser.roles,
              functions: currentUser.functions,
            })
          }
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
      {!validPassword &&
        currentUser.password &&
        currentUser.password.length > 0 && (
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
            currentUser.confirmPassword &&
            validConfirmPassword &&
            currentUser.confirmPassword.length > 0
              ? "register-form__input"
              : "register-form__input_error"
          }`}
          type="password"
          value={currentUser.confirmPassword || ""}
          onChange={(e) =>
            setCurrentUser({
              id: currentUser.id,
              img: currentUser.img,
              name: currentUser.name,
              lastName: currentUser.lastName,
              patronymic: currentUser.patronymic,
              date: currentUser.date,
              email: currentUser.email,
              lastDate: currentUser.lastDate,
              currentSession: currentUser.currentSession,
              cart: currentUser.cart,
              edit: currentUser.edit,
              tel: currentUser.tel,
              gender: currentUser.gender,
              password: currentUser.password,
              confirmPassword: e.target.value,
              roles: currentUser.roles,
              functions: currentUser.functions,
            })
          }
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
      {currentUser.confirmPassword &&
        !validConfirmPassword &&
        currentUser.confirmPassword.length > 0 && (
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
