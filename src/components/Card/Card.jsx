import React from "react";
import avatar from "../../assets/images/3807452de810352bca9c0587863ebece--avatar-film-nerd.jpg";
import chandeImg from "../../assets/images/edit-two-svgrepo-com.svg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";
import eyeImg from "../../assets/images/eye-password.svg";

function Card({ redacted, setRedacted, visiblePassword, setCurrentUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [checkboxGender, setCheckboxGender] = React.useState(false);

  const validTel =
    currentUser.tel.replace(/[^0-9]+/g, "") && currentUser.tel.length === 14;
  const validName =
    currentUser.name &&
    currentUser.name !== null &&
    currentUser.name.length >= 3 &&
    currentUser.name.length <= 20 &&
    currentUser.name === currentUser.name.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validEmail =
    currentUser.email &&
    currentUser.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const regexPassword =
    /[A-Z]/g.test(currentUser.password) &&
    /[a-z]/g.test(currentUser.password) &&
    /[^a-zA-Z]/g.test(currentUser.password);
  const validPassword =
    currentUser.password &&
    currentUser.password !== null &&
    currentUser.password.length >= 6 &&
    currentUser.password.length <= 30 &&
    regexPassword;
  const validConfirmPassword =
    currentUser.password === currentUser.confirmPassword;
  const validPatronymic =
    currentUser.patronymic &&
    (currentUser.patronymic !== null ||
      (currentUser.patronymic.length >= 3 &&
        currentUser.patronymic.length <= 20 &&
        currentUser.patronymic ===
          currentUser.patronymic.replace(/[^a-zA-Zа-яА-Я]/gi, "")));
  const validLastName =
    currentUser.lastName &&
    currentUser.lastName !== null &&
    currentUser.lastName.length >= 3 &&
    currentUser.lastName.length <= 20 &&
    currentUser.lastName ===
      currentUser.lastName.replace(/[^a-zA-Zа-яА-Я]/gi, "");

  const openFormWithRedactedProfile = (e) => {
    e.preventDefault();
    setRedacted(!redacted);
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  const checkboxClick = (e) => {
    e.preventDefault();
    if (e.target.className === "checkbox__btn") {
      setCheckboxGender(!checkboxGender);
      if (e.target.parentElement.children[1].textContent === "М") {
        setCurrentUser({
          ...currentUser,
          gender: "Мужской",
        });
      } else {
        setCurrentUser({
          ...currentUser,
          gender: "Женский",
        });
      }
    }
  };

  const redactedProfile = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setCurrentUser({
        ...currentUser,
        name: e.target.value,
      });
    } else if (e.target.name === "last-name") {
      setCurrentUser({
        ...currentUser,
        lastName: e.target.value,
      });
    } else if (e.target.name === "patronymic") {
      setCurrentUser({
        ...currentUser,
        patronymic: e.target.value,
      });
    } else if (e.target.name === "date") {
      setCurrentUser({
        ...currentUser,
        date: e.target.value,
      });
    } else if (e.target.name === "tel") {
      setCurrentUser({
        ...currentUser,
        tel: e.target.value,
      });
    } else if (e.target.name === "password") {
      setCurrentUser({
        ...currentUser,
        password: e.target.value,
      });
    } else if (e.target.name === "email") {
      setCurrentUser({
        ...currentUser,
        email: e.target.value,
      });
    } else if (e.target.name === "confirm-password") {
      setCurrentUser({
        ...currentUser,
        confirmPassword: e.target.value,
      });
    }
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  const user = JSON.parse(window.localStorage.getItem("currentUser"));

  return (
    <div className="card">
      <div className={`${redacted ? "card__change_hidden" : "card__change"}`}>
        <button className="change-btn" onClick={openFormWithRedactedProfile}>
          <img className="change-img" src={chandeImg} alt="icon"></img>
          Редактировать
        </button>
      </div>
      <div className={`${redacted ? "user_hidden" : "user"}`}>
        <img className="user__avatar" src={avatar} alt="avatar"></img>
        <div className="user__info">
          <div className="user-description">Фамилия</div>
          <div className="user-field">
            {(currentUser && currentUser.lastName) || user.lastName}
          </div>
          <div className="user-description">Имя</div>
          <div className="user-field">
            {(currentUser && currentUser.name) || user.name}
          </div>
          <div className="user-description">Отчество</div>
          <div className="user-field">
            {(currentUser && currentUser.patronymic) || user.patronymic}
          </div>
          <div className="user-info-little">
            <div className="user-info-little__block">
              <div className="user-info-little__description">дата рождения</div>
              <div className="user-info-little__field">
                {(currentUser && currentUser.date) || user.date}
              </div>
            </div>
            <div className="user-info-little__block">
              <div className="user-info-little__description">пол</div>
              <div className="user-info-little__field">
                {(currentUser && currentUser.gender) || user.gender}
              </div>
            </div>
          </div>
        </div>
        <div className="user__info">
          <div className="user-description">Email</div>
          <div className="user-field">
            {(currentUser && currentUser.email) || user.email}
          </div>
          <div className="user-description">Телефон</div>
          <div className="user-field">
            {(currentUser && currentUser.tel) || user.tel}
          </div>
          <div className="user-description">Пароль</div>
          <div className="user-field">
            {(currentUser && user.password.split("").map((i) => (i = "*"))) ||
              currentUser.password.split("").map((i) => (i = "*"))}
          </div>
        </div>
      </div>

      <div className={`${redacted ? "editing" : "editing_hidden"}`}>
        <div className="user__avatar-block">
          <img className="user__avatar" src={avatar} alt="avatar"></img>
          <button className="user__avatar-btn">Обновить</button>
        </div>
        <form className="editing__info">
          <label className="editing-description">Фамилия</label>
          <input
            className={`${
              validLastName && currentUser.lastName.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="last-name"
            value={currentUser.lastName}
            onChange={(e) => redactedProfile(e)}
          ></input>
          {!validLastName && currentUser.lastName.length > 0 && (
            <span className="change-form-error">
              Фамилия должна быть длиной от трёх до двадцати символов, только
              буквы.
            </span>
          )}
          <label className="editing-description">Имя</label>
          <input
            className={`${
              validName && currentUser.name.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="name"
            value={currentUser.name}
            onChange={(e) => redactedProfile(e)}
          ></input>
          {!validName && currentUser.name.length > 0 && (
            <span className="change-form-error">
              Имя должно быть длиной от трёх до двадцати символов, только буквы.
            </span>
          )}
          <label className="editing-description">Отчество</label>
          <input
            className={`${
              validPatronymic && currentUser.patronymic.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="patronymic"
            value={currentUser.patronymic}
            onChange={(e) => redactedProfile(e)}
          ></input>
          {!validPatronymic && currentUser.patronymic.length > 0 && (
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
                name="date"
                type="date"
                value={currentUser.date}
                onChange={(e) => redactedProfile(e)}
              ></input>
            </div>
            <div className="editing-info-little__block">
              <label className="editing-info-little__description">пол</label>
              <div className="checks">
                <div className="checkbox" onClick={(e) => checkboxClick(e)}>
                  <button className="checkbox__btn">
                    <img
                      className={`${
                        !checkboxGender ? "checkbox_visible" : "checkbox_hidden"
                      }`}
                      src={checkboxImg}
                      alt="М"
                    ></img>
                  </button>
                  <span className="checkbox__span">М</span>
                </div>
                <div className="checkbox" onClick={(e) => checkboxClick(e)}>
                  <button className="checkbox__btn">
                    <img
                      className={`${
                        checkboxGender ? "checkbox_visible" : "checkbox_hidden"
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
              validEmail && currentUser.email.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="email"
            type="email"
            value={currentUser.email}
            onChange={(e) => redactedProfile(e)}
          ></input>
          {!validEmail && currentUser.email.length > 0 && (
            <span className="change-form-error">Введите корректный email</span>
          )}
          <label className="editing-description">Телефон</label>
          <input
            className={`${
              validTel && currentUser.tel.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="tel"
            type="tel"
            pattern="[7]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={currentUser.tel}
            onChange={(e) => redactedProfile(e)}
          ></input>
          {!validTel && currentUser.tel.length > 0 && (
            <span className="change-form-error">
              Введите телефон в формате 9 999-999-9999
            </span>
          )}
          <div className="editing-description__block">
            <label className="editing-description">Пароль</label>
            <input
              className={`${
                validPassword && currentUser.password.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="password"
              type="password"
              value={currentUser.password}
              onChange={(e) => redactedProfile(e)}
            ></input>
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
            {!validPassword && currentUser.password.length > 0 && (
              <span className="change-form-error">
                Пароль должен содержать минимум одну цифру, одну большую и
                маленьку буквы латинского алфавита и быть не короче шести
                символов
              </span>
            )}
          </div>
          <div className="editing-description__block">
            <label className="editing-description">Повторите пароль</label>
            <input
              className={`${
                validConfirmPassword && currentUser.confirmPassword.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="confirm-password"
              type="password"
              value={currentUser.confirmPassword}
              onChange={(e) => redactedProfile(e)}
            ></input>
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
            {!validConfirmPassword &&
              currentUser.confirmPassword.length > 0 && (
                <span className="change-form-error">Пароли не совпадают</span>
              )}
          </div>
        </form>
      </div>
      <div className={`${redacted ? "card__change" : "card__change_hidden"}`}>
        <button
          className="save-btn"
          type="submit"
          onClick={openFormWithRedactedProfile}
        >
          Сохранить
        </button>
        <button className="cancel-btn" onClick={openFormWithRedactedProfile}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default Card;
