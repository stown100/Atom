import React from "react";
import { Link } from "react-router-dom";
import closeImg from "../../assets/images/Close-white.svg";
import { CurrentUserContext } from "../contexts/context";
import eyeImg from "../../assets/images/eye-password.svg";
import { arrayFields } from "./helper";

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
  setCurrentUser,
  onRegister,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  // const onChangeInputField = (e, field) => {
  //   e.preventDefault();
  //   setCurrentUser((prev) => {
  //     return {
  //       ...prev,
  //       [field]: e.target.value,
  //     };
  //   });
  // };
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
      {/* {arrayFields.map((item) => (
        <React.Fragment key={item.id}>
          <label className="register-form__label">{item.label}</label>
          <input
            className={`${
              validLastName && currentUser.lastName.length > 0
                ? "register-form__input"
                : "register-form__input_error"
            }`}
            type={item.inputType}
            value={(currentUser && currentUser[item.field]) || ""}
            onChange={(e) => onChangeInputField(e, item.field)}
          ></input>
          {!validLastName &&
            currentUser &&
            currentUser[item.field] &&
            currentUser[item.field].length > 0 && (
              <span className="authorization-form__error">{item.err}</span>
            )}
        </React.Fragment>
      ))} */}
      <label className="register-form__label">Фамилия *</label>
      <input
        className={`${
          validLastName && currentUser.lastName.length > 0
            ? "register-form__input"
            : "register-form__input_error"
        }`}
        type="text"
        value={(currentUser && currentUser.lastName) || ""}
        onChange={(e) =>
          setCurrentUser({
            ...currentUser,
            lastName: e.target.value,
          })
        }
        // onChange={(e) => setValueLastName(e.target.value)}
      ></input>
      {!validLastName &&
        currentUser &&
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
        value={(currentUser && currentUser.name) || ""}
        onChange={(e) =>
          setCurrentUser({
            ...currentUser,
            name: e.target.value,
          })
        }
      ></input>
      {!validName &&
        currentUser &&
        currentUser.name &&
        currentUser.name.length > 0 && (
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
        value={(currentUser && currentUser.patronymic) || ""}
        onChange={(e) =>
          setCurrentUser({
            ...currentUser,
            patronymic: e.target.value,
          })
        }
      ></input>
      {currentUser &&
        currentUser.patronymic &&
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
        value={(currentUser && currentUser.email) || ""}
        onChange={(e) =>
          setCurrentUser({
            ...currentUser,
            email: e.target.value,
          })
        }
      ></input>
      {currentUser &&
        currentUser.email &&
        !validEmail &&
        currentUser.email.length > 0 && (
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
          value={(currentUser && currentUser.password) || ""}
          onChange={(e) =>
            setCurrentUser({
              ...currentUser,
              password: e.target.value,
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
        currentUser &&
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
            currentUser &&
            currentUser.confirmPassword &&
            validConfirmPassword &&
            currentUser.confirmPassword.length > 0
              ? "register-form__input"
              : "register-form__input_error"
          }`}
          type="password"
          value={(currentUser && currentUser.confirmPassword) || ""}
          onChange={(e) =>
            setCurrentUser({
              ...currentUser,
              confirmPassword: e.target.value,
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
      {currentUser &&
        currentUser.confirmPassword &&
        !validConfirmPassword &&
        currentUser.confirmPassword.length > 0 && (
          <span className="authorization-form__error">Пароли не совпадают</span>
        )}
      <button
        onClick={(e) => onRegister(e)}
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
      {/* </Link> */}
    </form>
  );
}

export default Register;
