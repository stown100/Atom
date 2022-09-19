import React from "react";
import avatar from "../../assets/images/3807452de810352bca9c0587863ebece--avatar-film-nerd.jpg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import eyeImg from "../../assets/images/eye-password.svg";

function RedactedUser({
  setRedactedUser,
  checkbox,
  setCheckbox,
  oneUser,
  editUser,
  hundleSubmith,
  setValueGender,
  visiblePassword,
}) {
  const validName =
    oneUser.name &&
    oneUser.name.length >= 3 &&
    oneUser.name.length <= 20 &&
    oneUser.name === oneUser.name.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validEmail =
    oneUser.email &&
    oneUser.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const regexPassword =
    oneUser.password &&
    /[A-Z]/g.test(oneUser.password) &&
    /[a-z]/g.test(oneUser.password) &&
    /[^a-zA-Z]/g.test(oneUser.password);
  const validPassword =
    oneUser.password &&
    oneUser.password.length >= 6 &&
    oneUser.password.length <= 30 &&
    regexPassword;
  const validConfirmPassword =
    oneUser.confirmPassword && oneUser.password === oneUser.confirmPassword;
  const validPatronymic =
    oneUser.patronymic &&
    oneUser.patronymic.length >= 3 &&
    oneUser.patronymic.length <= 20 &&
    oneUser.patronymic === oneUser.patronymic.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validLastName =
    oneUser.lastName &&
    oneUser.lastName.length >= 3 &&
    oneUser.lastName.length <= 20 &&
    oneUser.lastName === oneUser.lastName.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validTel =
    oneUser.tel &&
    oneUser.tel.replace(/[^0-9]+/g, "") &&
    oneUser.tel.length === 14;

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
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  return (
    <div className="card">
      <div className="editing">
        <div className="user__avatar-block">
          <img className="user__avatar" src={oneUser.img} alt="avatar"></img>
          <button className="user__avatar-btn">Обновить</button>
        </div>
        <form className="editing__info">
          <label className="editing-description">Фамилия</label>
          <input
            className={`${
              validLastName && oneUser.lastName && oneUser.lastName.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="last-name"
            value={oneUser.lastName}
            onChange={editUser}
          ></input>
          {!validLastName &&
            oneUser.lastName &&
            oneUser.lastName.length > 0 && (
              <span className="change-form-error">
                Фамилия должна быть длиной от трёх до двадцати символов, только
                буквы.
              </span>
            )}
          <label className="editing-description">Имя</label>
          <input
            className={`${
              validName && oneUser.name && oneUser.name.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="name"
            value={oneUser.name}
            onChange={editUser}
          ></input>
          {!validName && oneUser.name && oneUser.name.length > 0 && (
            <span className="change-form-error">
              Имя должно быть длиной от трёх до двадцати символов, только буквы.
            </span>
          )}
          <label className="editing-description">Отчество</label>
          <input
            className={`${
              validPatronymic &&
              oneUser.patronymic &&
              oneUser.patronymic.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="patronymic"
            value={oneUser.patronymic}
            onChange={editUser}
          ></input>
          {!validPatronymic &&
            oneUser.patronymic &&
            oneUser.patronymic.length > 0 && (
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
                value={oneUser.date}
                onChange={editUser}
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
              validEmail && oneUser.email && oneUser.email.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="email"
            type="email"
            value={oneUser.email}
            onChange={editUser}
          ></input>
          {!validEmail && oneUser.email && oneUser.email.length > 0 && (
            <span className="change-form-error">Введите корректный email</span>
          )}
          <label className="editing-description">Телефон</label>
          <input
            className={`${
              validTel && oneUser.tel && oneUser.tel.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="tel"
            type="tel"
            pattern="[7]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={oneUser.tel}
            onChange={editUser}
          ></input>
          {!validTel && oneUser.tel && oneUser.tel.length > 0 && (
            <span className="change-form-error">
              Введите телефон в формате 9 999-999-9999
            </span>
          )}
          <div className="editing-description__block">
            <label className="editing-description">Пароль</label>
            <input
              className={`${
                validPassword && oneUser.password && oneUser.password.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="password"
              type="password"
              value={oneUser.password}
              onChange={editUser}
            ></input>
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
          </div>
          {!validPassword &&
            oneUser.password &&
            oneUser.password.length > 0 && (
              <span className="change-form-error">
                Пароль должен содержать минимум одну цифру, одну большую и
                маленьку буквы латинского алфавита и быть не короче шести
                символов
              </span>
            )}
          <div className="editing-description__block">
            <label className="editing-description">Повторите пароль</label>
            <input
              className={`${
                validConfirmPassword &&
                oneUser.confirmPassword &&
                oneUser.confirmPassword.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="confirm-password"
              type="password"
              value={oneUser.confirmPassword}
              onChange={editUser}
            ></input>
            {!validConfirmPassword &&
              oneUser.confirmPassword &&
              oneUser.confirmPassword.length > 0 && (
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
      <div className="card__change">
        <button
          className="save-btn"
          type="submit"
          onClick={(e) => hundleSubmith(e)}
        >
          Сохранить
        </button>
        <button className="cancel-btn" onClick={() => setRedactedUser(false)}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default RedactedUser;
