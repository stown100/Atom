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
  setCurrentUser,
  onRegister,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const arrayFields = [
    {
      id: 0,
      label: "Фамилия",
      inputType: "text",
      field: "lastName",
      err: "Фамилия должна быть длиной от трёх до двадцати символов, только буквы.",
      valid: !validLastName && currentUser.lastName.length > 0,
    },
    {
      id: 1,
      label: "Имя",
      inputType: "text",
      field: "name",
      err: "Имя должно быть длиной от трёх до двадцати символов, только буквы.",
      valid: !validName && currentUser.name.length > 0,
    },
    {
      id: 2,
      label: "Отчество",
      inputType: "text",
      field: "patronymic",
      err: "Отчество должно быть длиной от трёх до двадцати символов, только буквы.",
      valid: !validPatronymic && currentUser.patronymic.length > 0,
    },
    {
      id: 3,
      label: "Email",
      inputType: "email",
      field: "email",
      err: "Введите корректный email.",
      valid: !validEmail && currentUser.email.length > 0,
    },
    {
      id: 4,
      label: "Пароль",
      inputType: "password",
      field: "password",
      err: "Пароль должен содержать минимум одну цифру, одну большую и маленьку буквы латинского алфавита и быть не короче шести символов.",
      valid: !validPassword && currentUser.password.length > 0,
    },
    {
      id: 5,
      label: "Подтвердите пароль",
      inputType: "password",
      field: "confirmPassword",
      err: "Пароли не совпадают.",
      valid: !validConfirmPassword && currentUser.confirmPassword.length > 0,
    },
  ];

  const onChangeInputField = (e, field) => {
    e.preventDefault();
    setCurrentUser((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };
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
      {arrayFields.map((item) => (
        <React.Fragment key={item.id}>
          <div
            className={`${
              visibleForm
                ? "register-form__password-block"
                : "register-form__password-block_hidden"
            }`}
          >
            <label className="register-form__label">{item.label}</label>
            <input
              className={`${
                !item.valid
                  ? "register-form__input"
                  : "register-form__input_error"
              }`}
              type={item.inputType}
              value={(currentUser && currentUser[item.field]) || ""}
              onChange={(e) => onChangeInputField(e, item.field)}
            ></input>
            {item.inputType === "password" && (
              <img
                className={`${
                  visibleForm
                    ? "register-form__eye"
                    : "register-form__eye_hidden"
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
        </React.Fragment>
      ))}
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
    </form>
  );
}

export default Register;
