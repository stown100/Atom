import React from "react";
import cartSvg from "../../assets/images/cart.svg";
import plusImg from "../../assets/images/plus-svgrepo-com.svg";

function RoleOneUser({
  activeRoleTwo,
  setActiveRoleTwo,
  redactedUser,
  oneUser,
  setOneUser,
}) {
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
  const [roleInfo, setRoleInfo] = React.useState(oneUser.roles[1]);
  const [stateModal, setStateModal] = React.useState(false);
  const [newRoleState, setNewRoleState] = React.useState({
    id: null,
    role: "",
    systemName: "",
    date: "",
  });
  const escFunction = React.useCallback((event) => {
    if (event.key === "Escape") {
      setStateModal(false);
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
    setRoleInfo({
      id: item.id,
      role: item.role,
      systemName: item.systemName,
      date: item.date,
    });
  };

  const toggleFunction = (e, item) => {
    e.preventDefault();
    setActiveRoleTwo(item.id);
  };
  // Удаление ролей
  const deleteRole = (item) => {
    const filtred = oneUser.roles.filter((i) => i.id !== item.id);
    setOneUser({
      id: oneUser.id,
      img: oneUser.img,
      name: oneUser.name,
      lastName: oneUser.lastName,
      patronymic: oneUser.patronymic,
      date: oneUser.date,
      email: oneUser.email,
      lastDate: oneUser.lastDate,
      currentSession: oneUser.currentSession,
      cart: oneUser.cart,
      edit: oneUser.edit,
      tel: oneUser.tel,
      gender: oneUser.gender,
      password: oneUser.password,
      roles: filtred,
      functions: oneUser.functions,
    });
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
  };
  // Удаление функций
  const deleteFunction = (item) => {
    setOneUser({
      id: oneUser.id,
      img: oneUser.img,
      name: oneUser.name,
      lastName: oneUser.lastName,
      patronymic: oneUser.patronymic,
      date: oneUser.date,
      email: oneUser.email,
      lastDate: oneUser.lastDate,
      currentSession: oneUser.currentSession,
      cart: oneUser.cart,
      edit: oneUser.edit,
      tel: oneUser.tel,
      gender: oneUser.gender,
      password: oneUser.password,
      roles: oneUser.roles,
      functions: oneUser.functions.filter((i) => i.id !== item.id),
    });
  };
  const addRole = (e) => {
    e.preventDefault();
    const newRole = {
      id: oneUser.roles.length,
      role: newRoleState.role,
      systemName: newRoleState.systemName,
      date: convertedDate,
    };
    setOneUser({
      id: oneUser.id,
      img: oneUser.img,
      name: oneUser.name,
      lastName: oneUser.lastName,
      patronymic: oneUser.patronymic,
      date: oneUser.date,
      email: oneUser.email,
      lastDate: oneUser.lastDate,
      currentSession: oneUser.currentSession,
      cart: oneUser.cart,
      edit: oneUser.edit,
      tel: oneUser.tel,
      gender: oneUser.gender,
      password: oneUser.password,
      roles: [newRole, ...oneUser.roles],
      functions: oneUser.functions,
    });
    setStateModal(false);
    setRoleInfo({
      id: newRole.id,
      role: newRole.role,
      systemName: newRole.systemName,
      date: newRole.date,
    });
  };

  return (
    <div className="role">
      <div className="role__first-block">
        <h3 className="role__title">Доступные роли</h3>
        {redactedUser && (
          <button className="role__add-btn" onClick={() => setStateModal(true)}>
            <img className="change-img" src={plusImg} alt="icon"></img>
            Добавить
          </button>
        )}
        <ul className="available-roles">
          {oneUser.roles.map((item) => (
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
                {item.role}
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
        <h3 className="role__title">Роль: {roleInfo.role}</h3>

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
            <p className="role__field">{roleInfo.date}</p>
          </div>
          <div>
            <div className="role__description">Дата окончания</div>
            <p className="role__field">дд.мм.гг.</p>
          </div>
        </div>

        <h3 className="role__title">Доступные функции</h3>
        <ul className="available-roles">
          {oneUser.functions.map((item) => (
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
      </div>
      {stateModal && (
        <>
          <form className="modal-form">
            <input
              className="modal-form__input"
              placeholder="введите роль"
              value={newRoleState.role}
              onChange={(e) =>
                setNewRoleState({
                  id: newRoleState.id,
                  role: e.target.value,
                  date: newRoleState.date,
                  systemName: newRoleState.systemName,
                })
              }
            ></input>
            <input
              className="modal-form__input"
              placeholder="введите системное имя"
              value={newRoleState.systemName}
              onChange={(e) =>
                setNewRoleState({
                  id: newRoleState.id,
                  role: newRoleState.role,
                  date: newRoleState.date,
                  systemName: e.target.value,
                })
              }
            ></input>
            {/* <input
              className="modal-form__input"
              placeholder="введите системное дату"
              value={newRoleState.date}
              onChange={(e) =>
                setNewRoleState({
                  id: newRoleState.id,
                  role: newRoleState.role,
                  date: e.target.value,
                  systemName: newRoleState.systemName,
                })
              }
            ></input> */}
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

export default RoleOneUser;
