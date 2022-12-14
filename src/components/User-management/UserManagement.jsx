import React from "react";
import plusImg from "../../assets/images/plus-svgrepo-com.svg";
import filterImg from "../../assets/images/data-filter-funnel-svgrepo-com.svg";
import cartImg from "../../assets/images/bin-recycle-recycling-sorting-waste-2-svgrepo-com.svg";
import editImg from "../../assets/images/edit-hatch-svgrepo-com.svg";
import person1 from "../../assets/images/person1.svg";
import Card from "../Card/Card";
import Role from "../Role/Role";
import AddUser from "../AddUser/AddUser";
import RedactedUser from "../Redacted-user/RedactedUser";
import RoleOneUser from "../RoleOneUser/RoleOneUser";

function UserManagement({
  switchElem,
  clickFirstSwitch,
  activeRoleTwo,
  setActiveRoleTwo,
  redacted,
  checkbox,
  setCheckbox,
  visiblePassword,
  roleInfo,
  setRoleInfo,
  setCurrentUser,
}) {
  const users = [
    {
      id: 0,
      img: person1,
      name: "Юлия",
      lastName: "Бородулина",
      patronymic: "Сергеевна",
      date: "24.01.1996",
      email: "sergei1234565@yandex.ru",
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
      tel: "9 999-999-9999",
      gender: "Ж",
      password: "",
      roles: [
        {
          id: 0,
          role: "Администратор",
          systemName: "admin",
          date: "18.02.2019",
        },
        {
          id: 1,
          systemName: "god",
          role: "Бог",
          date: "14.01.2020",
        },
        {
          id: 2,
          systemName: "user",
          role: "Пользователь",
          date: "14.01.2018",
        },
      ],
      functions: [
        {
          id: 0,
          title: "Управление пользователями",
        },
        {
          id: 1,
          title: "Управление ролями",
        },
        {
          id: 2,
          title: "Профиль",
        },
      ],
    },
    {
      id: 1,
      img: person1,
      name: "Сергей",
      lastName: "Кородулин",
      patronymic: "Сергеевич",
      date: "13.01.1996",
      email: "sergei1234565@yandex.ru",
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
      tel: "9 999-999-9999",
      gender: "М",
      password: "",
      roles: [
        {
          id: 0,
          role: "Администратор",
          systemName: "admin",
          date: "18.02.2019",
        },
        {
          id: 1,
          systemName: "god",
          role: "Бог",
          date: "14.01.2020",
        },
        {
          id: 2,
          systemName: "user",
          role: "Пользователь",
          date: "14.01.2018",
        },
      ],
      functions: [
        {
          id: 0,
          title: "Управление пользователями",
        },
        {
          id: 1,
          title: "Управление ролями",
        },
        {
          id: 2,
          title: "Профиль",
        },
      ],
    },
    {
      id: 2,
      img: person1,
      name: "Андрей",
      lastName: "Калинин",
      patronymic: "Юрьевич",
      date: "21.01.1996",
      email: "sergei1234565@yandex.ru",
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
      tel: "9 999-999-9999",
      gender: "М",
      password: "",
      roles: [
        {
          id: 0,
          role: "Администратор",
          systemName: "admin",
          date: "18.02.2019",
        },
        {
          id: 1,
          systemName: "god",
          role: "Бог",
          date: "14.01.2020",
        },
        {
          id: 2,
          systemName: "user",
          role: "Пользователь",
          date: "14.01.2018",
        },
      ],
      functions: [
        {
          id: 0,
          title: "Управление пользователями",
        },
        {
          id: 1,
          title: "Управление ролями",
        },
        {
          id: 2,
          title: "Профиль",
        },
      ],
    },
    {
      id: 3,
      img: person1,
      name: "Анастасия",
      lastName: "Петрова",
      patronymic: "Фамилия",
      date: "21.01.1996",
      email: "sergei1234565@yandex.ru",
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
      tel: "9 999-999-9999",
      gender: "Ж",
      password: "",
      roles: [
        {
          id: 0,
          role: "Администратор",
          systemName: "admin",
          date: "18.02.2019",
        },
        {
          id: 1,
          systemName: "god",
          role: "Бог",
          date: "14.01.2020",
        },
        {
          id: 2,
          systemName: "user",
          role: "Пользователь",
          date: "14.01.2018",
        },
      ],
      functions: [
        {
          id: 0,
          title: "Управление пользователями",
        },
        {
          id: 1,
          title: "Управление ролями",
        },
        {
          id: 2,
          title: "Профиль",
        },
      ],
    },
    {
      id: 4,
      img: person1,
      name: "Сергей",
      lastName: "Родин",
      patronymic: "Дмитриевич",
      date: "20.01.1996",
      email: "sergei1234565@yandex.ru",
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
      tel: "9 999-999-9999",
      gender: "М",
      password: "",
      roles: [
        {
          id: 0,
          role: "Администратор",
          systemName: "admin",
          date: "18.02.2019",
        },
        {
          id: 1,
          systemName: "god",
          role: "Бог",
          date: "14.01.2020",
        },
        {
          id: 2,
          systemName: "user",
          role: "Пользователь",
          date: "14.01.2018",
        },
      ],
      functions: [
        {
          id: 0,
          title: "Управление пользователями",
        },
        {
          id: 1,
          title: "Управление ролями",
        },
        {
          id: 2,
          title: "Профиль",
        },
      ],
    },
    {
      id: 5,
      img: person1,
      name: "Ярослав",
      lastName: "Дуб",
      patronymic: "Дмитриевич",
      date: "19.01.1996",
      email: "sergei1234565@yandex.ru",
      lastDate: "14.05.2020",
      currentSession: "1224rcd2321",
      cart: cartImg,
      edit: editImg,
      tel: "9 999-999-9999",
      gender: "М",
      password: "",
      roles: [
        {
          id: 0,
          role: "Администратор",
          systemName: "admin",
          date: "18.02.2019",
        },
        {
          id: 1,
          systemName: "god",
          role: "Бог",
          date: "14.01.2020",
        },
        {
          id: 2,
          systemName: "user",
          role: "Пользователь",
          date: "14.01.2018",
        },
      ],
      functions: [
        {
          id: 0,
          title: "Управление пользователями",
        },
        {
          id: 1,
          title: "Управление ролями",
        },
        {
          id: 2,
          title: "Профиль",
        },
      ],
    },
  ];

  const [userState, setUserState] = React.useState(users);
  const [addSection, setAddSection] = React.useState(false);
  const [userName, setUserName] = React.useState({
    name: "",
    lastName: "",
    patronymic: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
    tel: "",
  });

  const [valueGender, setValueGender] = React.useState("");

  const [sortByLastName, setSortByLastName] = React.useState("");
  const [sortByDate, setSortByDate] = React.useState("");
  const [redactedUser, setRedactedUser] = React.useState(false);
  const [oneUser, setOneUser] = React.useState(userState.map((item) => item));

  const validName =
    userName.name &&
    userName.name.length >= 3 &&
    userName.name.length <= 20 &&
    userName.name === userName.name.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validEmail =
    userName.email &&
    userName.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const regexPassword =
    userName.password &&
    /[A-Z]/g.test(userName.password) &&
    /[a-z]/g.test(userName.password) &&
    /[^a-zA-Z]/g.test(userName.password);
  const validPassword =
    userName.password &&
    userName.password.length >= 6 &&
    userName.password.length <= 30 &&
    regexPassword;
  const validConfirmPassword =
    userName.confirmPassword && userName.password === userName.confirmPassword;
  const validPatronymic =
    userName.patronymic &&
    userName.patronymic.length >= 3 &&
    userName.patronymic.length <= 20 &&
    userName.patronymic ===
      userName.patronymic.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validLastName =
    userName.lastName &&
    userName.lastName.length >= 3 &&
    userName.lastName.length <= 20 &&
    userName.lastName === userName.lastName.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validTel =
    userName.tel &&
    userName.tel.replace(/[^0-9]+/g, "") &&
    userName.tel.length === 14;

  // Сортировка по фамилии и дате
  const searchUser = userState.filter((el) => {
    if (!sortByDate && !sortByLastName) {
      return userState;
    } else if (sortByLastName) {
      return el.lastName
        .toLowerCase()
        .includes(sortByLastName.toLocaleLowerCase());
    } else {
      return el.date.includes(sortByDate);
    }
  });

  const deleteUser = (e, item) => {
    e.preventDefault();
    const filterUser = userState.filter((i) => i.id !== item.id);
    setUserState(filterUser);
  };

  const openAddSection = (e) => {
    e.preventDefault();
    setAddSection(true);
    // Очищаю поля после открытия формы добавления пользователя
    setUserName({
      name: "",
      lastname: "",
      patronymic: "",
      email: "",
      password: "",
      confirmPassword: "",
      date: "",
    });
  };

  const [idToEdit, setIdToEdit] = React.useState(null);

  const openRedactedWindow = (e, item) => {
    e.preventDefault();
    setRedactedUser(true);
    setOneUser(item);
    setIdToEdit(item.id);
  };

  const editUser = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setOneUser({
        ...oneUser,
        name: e.target.value,
      });
    } else if (e.target.name === "last-name") {
      setOneUser({
        ...oneUser,
        lastName: e.target.value,
      });
    } else if (e.target.name === "patronymic") {
      setOneUser({
        ...oneUser,
        patronymic: e.target.value,
      });
    } else if (e.target.name === "date") {
      setOneUser({
        ...oneUser,
        date: e.target.value,
      });
    } else if (e.target.name === "tel") {
      setOneUser({
        ...oneUser,
        tel: e.target.value,
      });
    } else if (e.target.name === "password") {
      setOneUser({
        ...oneUser,
        password: e.target.value,
      });
    } else if (e.target.name === "email") {
      setOneUser({
        ...oneUser,
        email: e.target.value,
      });
    } else if (e.target.name === "confirm-password") {
      setOneUser({
        ...oneUser,
        confirmPassword: e.target.value,
      });
    }
  };

  // Изменение юзера
  const hundleSubmith = (e) => {
    e.preventDefault();
    setRedactedUser(false);
    setUserState(userState.map((obj) => (obj.id == idToEdit ? oneUser : obj)));
  };

  return (
    <div className="profile">
      <h2 className="profile__title">Управление пользователями</h2>
      {!addSection ? (
        <>
          {!redactedUser ? (
            <div className="card">
              <form className="filter-form">
                <img
                  className="filter-form__img"
                  src={filterImg}
                  alt="filter"
                ></img>
                <input
                  className="filter-form__input"
                  placeholder="Фамилия"
                  value={sortByLastName}
                  onChange={(e) => setSortByLastName(e.target.value)}
                ></input>
                <input
                  className="filter-form__input"
                  placeholder="Дата рождения"
                  value={sortByDate}
                  onChange={(e) => setSortByDate(e.target.value)}
                ></input>
                <button
                  className="filter-form__add-btn"
                  onClick={(e) => openAddSection(e)}
                >
                  <img className="change-img" src={plusImg} alt="icon"></img>
                  Добавить
                </button>
              </form>
              {userState.length > 0 && (
                <table className="table">
                  <thead>
                    <tr className="table__tr">
                      <th>Фото</th>
                      <th>Фамилия Имя Отчество</th>
                      <th>Дата рождения</th>
                      <th>Электронная почта</th>
                      <th>Дата последнего</th>
                      <th>Текущая сессия</th>
                    </tr>
                  </thead>
                  {searchUser.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td>
                          <img src={item.img} alt="user-logo"></img>
                          <span className="table__span">|</span>
                        </td>
                        <td>
                          {`${item.lastName} ${item.name} ${item.patronymic}`}
                          <span className="table__span">|</span>
                        </td>
                        <td>
                          {item.date}
                          <span className="table__span">|</span>
                        </td>
                        <td>
                          {item.email}
                          <span className="table__span">|</span>
                        </td>
                        <td>
                          {item.lastDate}
                          <span className="table__span">|</span>
                        </td>
                        <td>
                          {item.currentSession}
                          <span className="table__span">|</span>
                        </td>
                        <td>
                          <img
                            src={item.cart}
                            alt="cart"
                            onClick={(e) => deleteUser(e, item)}
                          ></img>
                          <img
                            src={item.edit}
                            alt="edit"
                            onClick={(e) => openRedactedWindow(e, item)}
                          ></img>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              )}
            </div>
          ) : (
            <>
              <div className="profile__switches">
                <button
                  className={`${!switchElem ? "switch" : "switch_not-active"}`}
                  onClick={clickFirstSwitch}
                >
                  Личные данные
                </button>
                <button
                  className={`${switchElem ? "switch" : "switch_not-active"}`}
                  onClick={clickFirstSwitch}
                >
                  Роли
                </button>
              </div>
              {switchElem ? (
                <RoleOneUser
                  activeRoleTwo={activeRoleTwo}
                  setActiveRoleTwo={setActiveRoleTwo}
                  redactedUser={redactedUser}
                  oneUser={oneUser}
                  setOneUser={setOneUser}
                />
              ) : (
                <RedactedUser
                  setRedactedUser={setRedactedUser}
                  checkbox={checkbox}
                  setCheckbox={setCheckbox}
                  oneUser={oneUser}
                  editUser={editUser}
                  hundleSubmith={hundleSubmith}
                  setValueGender={setValueGender}
                  visiblePassword={visiblePassword}
                />
              )}
            </>
          )}
        </>
      ) : (
        <>
          <div className="profile__switches">
            <button
              className={`${!switchElem ? "switch" : "switch_not-active"}`}
              onClick={clickFirstSwitch}
            >
              Личные данные
            </button>
            <button
              className={`${switchElem ? "switch" : "switch_not-active"}`}
              onClick={clickFirstSwitch}
            >
              Роли
            </button>
          </div>
          {switchElem ? (
            <Role
              activeRoleTwo={activeRoleTwo}
              setActiveRoleTwo={setActiveRoleTwo}
              roleInfo={roleInfo}
              setRoleInfo={setRoleInfo}
              setCurrentUser={setCurrentUser}
            />
          ) : (
            <AddUser
              redacted={redacted}
              checkbox={checkbox}
              setCheckbox={setCheckbox}
              setValueGender={setValueGender}
              setAddSection={setAddSection}
              setUserState={setUserState}
              userState={userState}
              userName={userName}
              setUserName={setUserName}
              validName={validName}
              validLastName={validLastName}
              validPassword={validPassword}
              validConfirmPassword={validConfirmPassword}
              validPatronymic={validPatronymic}
              validEmail={validEmail}
              validTel={validTel}
              visiblePassword={visiblePassword}
            />
          )}
        </>
      )}
    </div>
  );
}

export default UserManagement;
