import React from "react";
import avatar from "../../assets/images/3807452de810352bca9c0587863ebece--avatar-film-nerd.jpg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import NotAvatar from "../../assets/images/not-avatar.jpg";
import cartImg from "../../assets/images/bin-recycle-recycling-sorting-waste-2-svgrepo-com.svg";
import editImg from "../../assets/images/edit-hatch-svgrepo-com.svg";
import person1 from "../../assets/images/person1.svg";
import eyeImg from "../../assets/images/eye-password.svg";

function AddUser({
  redacted,
  checkbox,
  setCheckbox,
  setValueGender,
  setAddSection,
  setUserState,
  userState,
  userName,
  setUserName,
  validName,
  validLastName,
  validPassword,
  validConfirmPassword,
  validPatronymic,
  validEmail,
  validTel,
  visiblePassword,
}) {
  const redactedProfile = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setUserName({
        name: e.target.value,
        lastName: userName.lastName,
        patronymic: userName.patronymic,
        email: userName.email,
        password: userName.password,
        confirmPassword: userName.confirmPassword,
        date: userName.date,
        tel: userName.tel,
      });
    } else if (e.target.name === "last-name") {
      setUserName({
        name: userName.name,
        lastName: e.target.value,
        patronymic: userName.patronymic,
        email: userName.email,
        password: userName.password,
        confirmPassword: userName.confirmPassword,
        date: userName.date,
        tel: userName.tel,
      });
    } else if (e.target.name === "patronymic") {
      setUserName({
        name: userName.name,
        lastName: userName.lastName,
        patronymic: e.target.value,
        email: userName.email,
        password: userName.password,
        confirmPassword: userName.confirmPassword,
        date: userName.date,
        tel: userName.tel,
      });
    } else if (e.target.name === "date") {
      setUserName({
        name: userName.name,
        lastName: userName.lastName,
        patronymic: userName.patronymic,
        email: userName.email,
        password: userName.password,
        confirmPassword: userName.confirmPassword,
        date: e.target.value,
        tel: userName.tel,
      });
    } else if (e.target.name === "tel") {
      setUserName({
        name: userName.name,
        lastName: userName.lastName,
        patronymic: userName.patronymic,
        email: userName.email,
        password: userName.password,
        confirmPassword: userName.confirmPassword,
        date: userName.date,
        tel: e.target.value,
      });
    } else if (e.target.name === "password") {
      setUserName({
        name: userName.name,
        lastName: userName.lastName,
        patronymic: userName.patronymic,
        email: userName.email,
        password: e.target.value,
        confirmPassword: userName.confirmPassword,
        date: userName.date,
        tel: userName.tel,
      });
    } else if (e.target.name === "email") {
      setUserName({
        name: userName.name,
        lastName: userName.lastName,
        patronymic: userName.patronymic,
        email: e.target.value,
        password: userName.password,
        confirmPassword: userName.confirmPassword,
        date: userName.date,
        tel: userName.tel,
      });
    } else if (e.target.name === "confirm-password") {
      setUserName({
        name: userName.name,
        lastName: userName.lastName,
        patronymic: userName.patronymic,
        email: userName.email,
        password: userName.password,
        confirmPassword: e.target.value,
        date: userName.date,
        tel: userName.tel,
      });
    }
  };

  const checkboxClick = (e) => {
    e.preventDefault();
    if (e.target.className === "checkbox__btn") {
      setCheckbox(!checkbox);
      if (e.target.parentElement.children[1].textContent === "М") {
        setValueGender("мужской");
      } else {
        setValueGender("женский");
      }
    }
  };

  // Добавление пользователя
  const addUser = (e) => {
    const newUser = {
      id: userState.length,
      img: person1,
      name: userName.name,
      lastName: userName.lastName,
      patronymic: userName.patronymic,
      date: userName.date,
      email: userName.email,
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
    };
    setAddSection(false);
    setUserState([newUser, ...userState]);
  };

  return (
    <div className="card">
      <div className={`${!redacted ? "editing" : "editing_hidden"}`}>
        <div className="user__avatar-block">
          <img className="user__avatar" src={NotAvatar} alt="avatar"></img>
          <button className="user__avatar-btn">Обновить</button>
        </div>
        <form className="editing__info">
          <label className="editing-description">Фамилия</label>
          <input
            className={`${
              validLastName && userName.lastName.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="last-name"
            value={userName.lastName}
            onChange={redactedProfile}
          ></input>
          {!validLastName &&
            userName.lastName &&
            userName.lastName.length > 0 && (
              <span className="change-form-error">
                Фамилия должна быть длиной от трёх до двадцати символов, только
                буквы.
              </span>
            )}
          <label className="editing-description">Имя</label>
          <input
            className={`${
              validName && userName.name.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="name"
            value={userName.name}
            onChange={redactedProfile}
          ></input>
          {!validName && userName.name && userName.name.length > 0 && (
            <span className="change-form-error">
              Имя должно быть длиной от трёх до двадцати символов, только буквы.
            </span>
          )}
          <label className="editing-description">Отчество</label>
          <input
            className={`${
              validPatronymic &&
              userName.patronymic &&
              userName.patronymic.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="patronymic"
            value={userName.patronymic}
            onChange={redactedProfile}
          ></input>
          {!validPatronymic &&
            userName.patronymic &&
            userName.patronymic.length > 0 && (
              <span className="change-form-error">
                Отчество должно быть длиной от трёх до двадцати символов, только
                буквы.
              </span>
            )}
          <div className="editing-info-little">
            <div className="editing-info-little__block">
              <label className="editing-info-little__description">
                дата рождения
              </label>
              <input
                className="editing-info-little__field"
                type="date"
                name="date"
                value={userName.date}
                onChange={redactedProfile}
              ></input>
            </div>
            <div className="editing-info-little__block">
              <label className="editing-info-little__description">пол</label>
              <div className="checks">
                <div className="checkbox" onClick={checkboxClick}>
                  <button className="checkbox__btn">
                    <img
                      className={`${
                        !checkbox ? "checkbox_visible" : "checkbox_hidden"
                      }`}
                      src={checkboxImg}
                      alt="М"
                    ></img>
                  </button>
                  <span className="checkbox__span">М</span>
                </div>
                <div className="checkbox" onClick={checkboxClick}>
                  <button className="checkbox__btn">
                    <img
                      className={`${
                        checkbox ? "checkbox_visible" : "checkbox_hidden"
                      }`}
                      src={checkboxImg}
                      alt="Ж"
                    ></img>
                  </button>
                  <span className="checkbox__span">Ж</span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <form className="editing__info">
          <label className="editing-description">Email</label>
          <input
            className={`${
              validEmail && userName.email && userName.email.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            type="email"
            name="email"
            value={userName.email}
            onChange={redactedProfile}
          ></input>
          {!validEmail && userName.email && userName.email.length > 0 && (
            <span className="change-form-error">Введите корректный email</span>
          )}
          <label className="editing-description">Телефон</label>
          <input
            className={`${
              validTel && userName.tel && userName.tel.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="tel"
            type="tel"
            pattern="[7]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={userName.tel}
            onChange={redactedProfile}
          ></input>
          {!validTel && userName.tel && userName.tel.length > 0 && (
            <span className="change-form-error">
              Введите телефон в формате 9 999-999-9999
            </span>
          )}
          <div className="editing-description__block">
            <label className="editing-description">Пароль</label>
            <input
              className={`${
                validPassword &&
                userName.password &&
                userName.password.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="password"
              type="password"
              value={userName.password}
              onChange={redactedProfile}
            ></input>
            {!validPassword &&
              userName.password &&
              userName.password.length > 0 && (
                <span className="change-form-error">
                  Пароль должен содержать минимум одну цифру, одну большую и
                  маленьку буквы латинского алфавита и быть не короче шести
                  символов
                </span>
              )}
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
          </div>
          <div className="editing-description__block">
            <label className="editing-description">Повторите пароль</label>
            <input
              className={`${
                validConfirmPassword &&
                userName.confirmPassword &&
                userName.confirmPassword.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="confirm-password"
              type="password"
              value={userName.confirmPassword}
              onChange={redactedProfile}
            ></input>
            {!validConfirmPassword &&
              userName.confirmPassword &&
              userName.confirmPassword.length > 0 && (
                <span className="change-form-error">Пароли не совпадают</span>
              )}
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
          </div>
        </form>
      </div>
      <div className={`${!redacted ? "card__change" : "card__change_hidden"}`}>
        <button className="save-btn" type="submit" onClick={(e) => addUser(e)}>
          Сохранить
        </button>
        <button className="cancel-btn" onClick={() => setAddSection(false)}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default AddUser;
