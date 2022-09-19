import React from "react";
import filterImg from "../../assets/images/data-filter-funnel-svgrepo-com.svg";
import plusImg from "../../assets/images/plus-svgrepo-com.svg";
import cartSvg from "../../assets/images/cart.svg";
import editImg from "../../assets/images/edit-hatch-svgrepo-com.svg";
import checkboxImg from "../../assets/images/checkbox-mark-svgrepo-com.svg";
import { CurrentUserContext } from "../contexts/context";

function ManagingRoles({
  roleInfo,
  setRoleInfo,
  activeRoleTwo,
  setActiveRoleTwo,
  setCurrentUser,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [state, setState] = React.useState(currentUser);
  const [stateRole, setStateRole] = React.useState(roleInfo);
  const [addRoleFrom, setAddRoleForm] = React.useState(false);
  const [newRoleState, setNewRoleState] = React.useState({
    id: currentUser.length + 1,
    role: "",
    systemName: "",
    date: "",
    lastDate: "",
  });
  const [newRole, setNewRole] = React.useState({
    id: currentUser.roles.length,
    role: newRoleState.role,
    systemName: newRoleState.systemName,
    date: newRoleState.date,
    lastDate: newRoleState.lastDate,
  });
  const [funcState, setFuncState] = React.useState(false);
  const [checkboxFunc, setCheckboxFunc] = React.useState(null);

  const functionsArr = [
    {
      id: 0,
      title: "Управление пользователями",
      active: checkboxFunc,
    },
    {
      id: 1,
      title: "Управление ролями",
      active: checkboxFunc,
    },
    {
      id: 2,
      title: "Заказ",
      active: checkboxFunc,
    },
  ];
  // Удаление ролей
  const deleteRole = (e, item) => {
    if (currentUser.roles.length > 1) {
      e.preventDefault();
      const filtred = currentUser.roles.filter((i) => i.id !== item.id);
      // setCurrentUser({
      //   ...currentUser,
      //   roles: filtred,
      // });
      // setCurrentUser((prev) => {
      //   return {
      //     ...prev,
      //     roles: filtred,
      //   };
      // });
      currentUser.roles = filtred;
      if (filtred.length > 0) {
        const elemId = filtred.map((el) => el)[0].id;
        const elemName = filtred.map((el) => el)[0].role;
        const elemSystemName = filtred.map((el) => el)[0].systemName;
        const elemDate = filtred.map((el) => el)[0].date;
        setRoleInfo({
          id: elemId,
          role: elemName,
          systemName: elemSystemName,
          date: elemDate,
        });
      } else {
        setRoleInfo({
          id: null,
          role: "",
          systemName: "",
          date: "",
        });
      }
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  };

  // Изменение ролей
  const toggleRole = (e, item) => {
    e.preventDefault();
    setRoleInfo({
      id: item.id,
      role: item.role,
      systemName: item.systemName,
      date: item.date,
    });
  };

  // Удаление функций
  const deleteFunction = (item) => {
    setCurrentUser({
      ...currentUser,
      functions: currentUser.functions.filter((i) => i.id !== item.id),
    });
  };
  const toggleFunction = (e, item) => {
    e.preventDefault();
    setActiveRoleTwo(item.id);
  };
  const convertedDate = JSON.stringify(new Date())
    .split("")
    .splice(1, 10)
    .join("")
    .replace(/[^0-9]/gi, " ")
    .split(" ")
    .reverse()
    .map((i) => `${i}.`)
    .join("")
    .substring(0, 10);

  const clickOnAdd = (e) => {
    e.preventDefault();
    setAddRoleForm(true);
    if (e.target.name === "button") {
      setCurrentUser({
        ...currentUser,
        roles: [newRoleState, ...currentUser.roles],
      });
    } else if (e.target.name === "button-save") {
      if (
        newRoleState.role.length > 0 &&
        newRoleState.systemName.length > 0 &&
        newRoleState.date.length > 0 &&
        newRoleState.lastDate.length > 0
      ) {
        setCurrentUser({
          ...currentUser,
          roles: [newRole, ...currentUser.roles.slice(1)],
        });
        setRoleInfo({
          id: currentUser.roles.length,
          role: currentUser.roles[0].role,
          systemName: currentUser.roles[0].systemName,
          date: currentUser.roles[0].date,
          lastDate: currentUser.roles[0].lastDate,
        });
      }
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setAddRoleForm(false);
    } else if (e.target.name === "name") {
      newRoleState.role = e.target.value;
      setRoleInfo({
        id: roleInfo.id,
        role: newRoleState.role,
        systemName: newRoleState.systemName,
        date: newRoleState.date,
      });
      setNewRole({
        id: currentUser.roles.length,
        role: e.target.value,
        systemName: newRoleState.systemName,
        date: newRoleState.date,
      });
    } else if (e.target.name === "systemName") {
      newRoleState.systemName = e.target.value;
      setRoleInfo({
        id: roleInfo.id,
        role: newRoleState.role,
        systemName: newRoleState.systemName,
        date: newRoleState.date,
      });
      setNewRole({
        id: currentUser.roles.length,
        role: newRoleState.role,
        systemName: e.target.value,
        date: newRoleState.date,
      });
    } else if (e.target.name === "date") {
      currentUser.roles[0].date = e.target.value;
      setRoleInfo({
        id: roleInfo.id,
        role: newRoleState.role,
        systemName: newRoleState.systemName,
        date: newRoleState.date,
      });
      setNewRole({
        id: currentUser.roles.length,
        role: newRoleState.role,
        systemName: newRoleState.systemName,
        date: e.target.value,
      });
    } else if ((e.target.name = "last-date")) {
      currentUser.roles[0].lastDate = e.target.value;
      setRoleInfo({
        id: roleInfo.id,
        role: newRoleState.role,
        systemName: newRoleState.systemName,
        date: newRoleState.date,
        lastDate: newRoleState.lastDate,
      });
      setNewRole({
        id: currentUser.roles.length,
        role: newRoleState.role,
        systemName: newRoleState.systemName,
        date: newRoleState.date,
        lastDate: newRoleState.lastDate,
      });
    }
  };

  const closeRoleForm = (e) => {
    e.preventDefault();
    setAddRoleForm(false);
    setCurrentUser(state);
    setRoleInfo(stateRole);
  };

  const addFunction = (e) => {
    e.preventDefault();
    setFuncState(!funcState);
  };

  // СДЕЛАТЬ ВЫБОР КАРТОЧЕК
  const checkboxClick = (e, id) => {
    e.preventDefault();
    setCheckboxFunc(id);
  };

  return (
    <div className="profile">
      <h2 className="profile__title">Управление ролями</h2>
      <div className="card">
        <form className="filter-form">
          <img className="filter-form__img" src={filterImg} alt="filter"></img>
          <input
            className="filter-form__input"
            placeholder="Системное имя"
          ></input>
          <input
            className="filter-form__input"
            placeholder="Наименование"
          ></input>
          {!addRoleFrom && (
            <button
              className="filter-form__add-btn"
              onClick={(e) => clickOnAdd(e)}
              name="button"
            >
              <img className="change-img" src={plusImg} alt="icon"></img>
              Добавить
            </button>
          )}
        </form>
        <div className="role">
          <div className="role__first-block">
            <ul className="available-roles available-roles-managing">
              {currentUser.roles.map((item) => (
                <li
                  key={item.id}
                  className={
                    roleInfo.id === item.id
                      ? "available-roles__li_active"
                      : "available-roles__li"
                  }
                >
                  <span
                    className="available-roles__li-name"
                    onClick={(e) => toggleRole(e, item)}
                  >
                    {item.systemName}
                  </span>
                  <span
                    className="available-roles__li-name"
                    onClick={(e) => toggleRole(e, item)}
                  >
                    {item.role}
                  </span>
                  <span
                    className="available-roles__li-name"
                    onClick={(e) => toggleRole(e, item)}
                  >
                    {item.date}
                  </span>
                  <div className="available-roles__li-name">
                    <img
                      className="available-roles__li-img"
                      src={editImg}
                      alt="edit"
                      // onClick={() => deleteRole(item)}
                    />
                    <img
                      className="available-roles__li-img"
                      src={cartSvg}
                      alt="урна"
                      onClick={(e) => deleteRole(e, item)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="role__second-block">
            <h3 className="role__title">Роль: {roleInfo.role}</h3>
            {!addRoleFrom ? (
              <>
                <div className="role__data">
                  <div>
                    <div className="role__description">Системное имя</div>
                    <div className="role__field">{roleInfo.systemName}</div>
                  </div>
                  <div>
                    <div className="role__description">Наименование</div>
                    <div className="role__field">{roleInfo.role}</div>
                  </div>
                  <div>
                    <div className="role__description">Дата начала</div>
                    <p className="role__field">дд.мм.гг.</p>
                  </div>
                  <div>
                    <div className="role__description">Дата окончания</div>
                    <p className="role__field">{roleInfo.date}</p>
                  </div>
                </div>

                <h3 className="role__title">Доступные функции</h3>
                <ul className="available-roles">
                  {currentUser.functions.map((item) => (
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
                        {item.title}
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
              </>
            ) : (
              <>
                <form className="add-role-form">
                  <div className="add-role-form__block">
                    <label className="add-role-form__label" htmlFor="">
                      Системное имя
                    </label>
                    <input
                      name="systemName"
                      className="add-role-form__input"
                      type="text"
                      placeholder="Введите системное имя"
                      value={newRoleState.systemName}
                      onChange={(e) => clickOnAdd(e)}
                    />
                  </div>
                  <div className="add-role-form__block">
                    <label className="add-role-form__label" htmlFor="">
                      Наименование
                    </label>
                    <input
                      name="name"
                      className="add-role-form__input"
                      type="text"
                      placeholder="Введите наименование"
                      value={newRoleState.role}
                      onChange={(e) => clickOnAdd(e)}
                    />
                  </div>
                  <div className="add-role-form__block">
                    <label className="add-role-form__label" htmlFor="">
                      дата начала
                    </label>
                    <input
                      className="add-role-form__input-date"
                      type="date"
                      name="date"
                      value={newRoleState.date}
                      onChange={(e) => clickOnAdd(e)}
                    />
                  </div>
                  <div className="add-role-form__block">
                    <label className="add-role-form__label" htmlFor="">
                      Дата окончания
                    </label>
                    <input
                      className="add-role-form__input-date"
                      name="last-date"
                      type="date"
                      value={newRoleState.lastDate}
                      onChange={(e) => clickOnAdd(e)}
                    />
                  </div>
                </form>
                <h3 className="add-role-title">Доступные функции</h3>
                <button
                  name="add-function"
                  className="filter-form__add-btn"
                  onClick={(e) => addFunction(e)}
                >
                  <img className="change-img" src={plusImg} alt="icon"></img>
                  Добавить
                </button>
                <ul className="available-roles">
                  {!funcState &&
                    functionsArr.map((item, index) => (
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
                          {item.title}
                        </span>
                        <button
                          className="checkbox__btn"
                          onClick={(e) => checkboxClick(e, item.id)}
                        >
                          <img
                            className={`${
                              checkboxFunc === item.id
                                ? "checkbox_visible"
                                : "checkbox_hidden"
                            }`}
                            src={checkboxImg}
                            alt="М"
                          ></img>
                        </button>
                      </li>
                    ))}
                </ul>
                <div
                  className={`${
                    addRoleFrom
                      ? "add-role-buttons__change"
                      : "add-role-buttons__change_hidden"
                  }`}
                >
                  <button
                    className="save-btn"
                    name="button-save"
                    type="submit"
                    onClick={(e) => clickOnAdd(e)}
                  >
                    Сохранить
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={(e) => closeRoleForm(e)}
                  >
                    Отмена
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagingRoles;
