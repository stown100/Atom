import React from "react";
import cartSvg from "../../assets/images/cart.svg";
import plusImg from "../../assets/images/plus-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";

function Role({
  activeRole,
  setActiveRole,
  activeRoleTwo,
  setActiveRoleTwo,
  title,
  setTitle,
  arr,
  setArr,
  twoArr,
  setTwoArr,
  redactedUser,
}) {
  const { valueName } = React.useContext(CurrentUserContext);

  const [stateModal, setStateModal] = React.useState(false);
  const [valueRole, setValueRole] = React.useState("");

  const escFunction = React.useCallback((event) => {
    if (event.key === "Escape") {
      setStateModal(false)
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const toggleRole = (e, item) => {
    e.preventDefault();
    setActiveRole(item.id);
    setTitle(item.name);
  };

  const toggleFunction = (e, item) => {
    e.preventDefault();
    setActiveRoleTwo(item.id);
  };
  // Удаление ролей
  const deleteRole = (item) => {
    const filtred = arr.filter((i) => i.id !== item.id);
    setArr(filtred);
    if (filtred.length > 0) {
      const elemId = filtred.map((el) => el)[0].id;
      const elemName = filtred.map((el) => el)[0].name;
      setActiveRole(elemId);
      setTitle(elemName);
    } else {
      setTitle("");
    }
  };
  // Удаление функций
  const deleteFunction = (item) => {
    setTwoArr(twoArr.filter((i) => i.id !== item.id));
  };

  const addRole = (e) => {
    e.preventDefault();
    if (valueRole.length > 0) {
      const newRole = {
        id: arr.length,
        name: valueRole,
      };
      setArr([newRole, ...arr]);
      setStateModal(false);
      setValueRole("");
      setActiveRole(newRole.id)
    }
  };

  return (
    <div className="role">
      <div className="role__first-block">
        <h3 className="role__title">Доступные роли</h3>
        {redactedUser && (
          <button
            className="filter-form__add-btn"
            onClick={() => setStateModal(true)}
          >
            <img className="change-img" src={plusImg} alt="icon"></img>
            Добавить
          </button>
        )}
        <ul className="available-roles">
          {arr.map((item) => (
            <li
              key={item.id}
              className={
                activeRole === item.id
                  ? "available-roles__li_active"
                  : "available-roles__li"
              }
            >
              <span
                className="available-roles__li-name"
                onClick={(e) => toggleRole(e, item)}
              >
                {item.name}
              </span>
              <img
                className="available-roles__li-img"
                src={cartSvg}
                alt="урна"
                onClick={() => deleteRole(item)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="role__second-block">
        <h3 className="role__title">Роль: {title}</h3>

        <div className="role__data">
          <div>
            <div className="role__description">Системное имя</div>
            <div className="role__field">{valueName}</div>
          </div>
          <div>
            <div className="role__description">Наименование</div>
            <div className="role__field">{title}</div>
          </div>
          <div>
            <div className="role__description">Дата начала</div>
            <p className="role__field">14.01.2020</p>
          </div>
          <div>
            <div className="role__description">Дата окончания</div>
            <p className="role__field">дд.мм.гг.</p>
          </div>
        </div>

        <h3 className="role__title">Доступные функции</h3>
        <ul className="available-roles">
          {twoArr.map((item) => (
            <li
              key={item.id}
              className={
                activeRoleTwo === item.id
                  ? "available-roles__li_active"
                  : "available-roles__li"
              }
            >
              <span
                className="available-roles__li-name"
                onClick={(e) => toggleFunction(e, item)}
              >
                {item.name}
              </span>
              <img
                className="available-roles__li-img"
                src={cartSvg}
                alt="урна"
                onClick={() => deleteFunction(item)}
              />
            </li>
          ))}
        </ul>
      </div>
      {stateModal && (
        <>
          <form className="modal-form">
            <input
              className="modal-form__input"
              placeholder="введите роль"
              value={valueRole}
              onChange={(e) => setValueRole(e.target.value)}
            ></input>
            <button
              className="modal-form__button"
              type="submit"
              onClick={(e) => addRole(e)}
            >
              Добавить роль
            </button>
          </form>
          <div className="modal" onClick={() => setStateModal(false)}></div>
        </>
      )}
    </div>
  );
}

export default Role;
