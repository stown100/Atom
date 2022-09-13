import React from "react";
import avatar from "../../assets/images/3807452de810352bca9c0587863ebece--avatar-film-nerd.jpg";
import chandeImg from "../../assets/images/edit-two-svgrepo-com.svg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";
import eyeImg from "../../assets/images/eye-password.svg";

function Card({
  validName,
  validEmail,
  validPassword,
  validConfirmPassword,
  validPatronymic,
  validLastName,
  redacted,
  setRedacted,
  valueTel,
  setValueTel,
  valueGender,
  setValueGender,
  validTel,
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
    valueDate,
    setValueDate,
  } = React.useContext(CurrentUserContext);

  const [checkboxGender, setCheckboxGender] = React.useState(false);

  console.log(checkboxGender)

  const openFormWithRedactedProfile = (e) => {
    e.preventDefault();
    setRedacted(!redacted);
  };

  const checkboxClick = (e) => {
    e.preventDefault();
    if (e.target.className === "checkbox__btn") {
      setCheckboxGender(!checkboxGender);
      if (e.target.parentElement.children[1].textContent === "М") {
        setValueGender("мужской");
      } else {
        setValueGender("женский");
      }
    }
  };

  const redactedProfile = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setValueName(e.target.value);
    } else if (e.target.name === "last-name") {
      setValueLastName(e.target.value);
    } else if (e.target.name === "patronymic") {
      setValuePatronymic(e.target.value);
    } else if (e.target.name === "date") {
      setValueDate(e.target.value);
    } else if (e.target.name === "tel") {
      setValueTel(e.target.value);
    } else if (e.target.name === "password") {
      setValuePassword(e.target.value);
    } else if (e.target.name === "email") {
      setValueEmail(e.target.value);
    } else if (e.target.name === "confirm-password") {
      setValueConfirmPassword(e.target.value);
    }
  };

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
          <div className="user-field">{valueLastName}</div>
          <div className="user-description">Имя</div>
          <div className="user-field">{valueName}</div>
          <div className="user-description">Отчество</div>
          <div className="user-field">{valuePatronymic}</div>
          <div className="user-info-little">
            <div className="user-info-little__block">
              <div className="user-info-little__description">дата рождения</div>
              <div className="user-info-little__field">{valueDate}</div>
            </div>
            <div className="user-info-little__block">
              <div className="user-info-little__description">пол</div>
              <div className="user-info-little__field">{valueGender}</div>
            </div>
          </div>
        </div>
        <div className="user__info">
          <div className="user-description">Email</div>
          <div className="user-field">{valueEmail}</div>
          <div className="user-description">Телефон</div>
          <div className="user-field">{valueTel}</div>
          <div className="user-description">Пароль</div>
          <div className="user-field">
            {valuePassword.split("").map((i) => (i = "*"))}
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
              validLastName && valueLastName.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="last-name"
            value={valueLastName}
            onChange={redactedProfile}
          ></input>
          {!validLastName && valueLastName.length > 0 && (
            <span className="change-form-error">
              Фамилия должна быть длиной от трёх до двадцати символов, только
              буквы.
            </span>
          )}
          <label className="editing-description">Имя</label>
          <input
            className={`${
              validName && valueName.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="name"
            value={valueName}
            onChange={redactedProfile}
          ></input>
          {!validName && valueName.length > 0 && (
            <span className="change-form-error">
              Имя должно быть длиной от трёх до двадцати символов, только буквы.
            </span>
          )}
          <label className="editing-description">Отчество</label>
          <input
            className={`${
              validPatronymic && valuePatronymic.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="patronymic"
            value={valuePatronymic}
            onChange={redactedProfile}
          ></input>
          {!validPatronymic && valuePatronymic.length > 0 && (
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
                value={valueDate}
                onChange={redactedProfile}
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
              validEmail && valueEmail.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="email"
            type="email"
            value={valueEmail}
            onChange={redactedProfile}
          ></input>
          {!validEmail && valueEmail.length > 0 && (
            <span className="change-form-error">Введите корректный email</span>
          )}
          <label className="editing-description">Телефон</label>
          <input
            className={`${
              validTel && valueTel.length > 0
                ? "editing-field"
                : "editing-field_error"
            }`}
            name="tel"
            type="tel"
            pattern="[7]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={valueTel}
            onChange={redactedProfile}
          ></input>
          {!validTel && valueTel.length > 0 && (
            <span className="change-form-error">
              Введите телефон в формате 9 999-999-9999
            </span>
          )}
          <div className="editing-description__block">
            <label className="editing-description">Пароль</label>
            <input
              className={`${
                validPassword && valuePassword.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="password"
              type="password"
              value={valuePassword}
              onChange={redactedProfile}
            ></input>
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
            {!validPassword && valuePassword.length > 0 && (
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
                validConfirmPassword && valueConfirmPassword.length > 0
                  ? "editing-field"
                  : "editing-field_error"
              }`}
              name="confirm-password"
              type="password"
              value={valueConfirmPassword}
              onChange={redactedProfile}
            ></input>
            <img
              className="editing-description__eye"
              src={eyeImg}
              alt="eye"
              onClick={(e) => visiblePassword(e)}
            ></img>
            {!validConfirmPassword && valueConfirmPassword.length > 0 && (
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
