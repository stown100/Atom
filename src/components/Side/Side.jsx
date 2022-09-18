import React from "react";
import { useNavigate } from "react-router";
import person1 from "../../assets/images/person1.svg";
import person2 from "../../assets/images/person2.svg";
import person3 from "../../assets/images/person3.svg";
import exitImg from "../../assets/images/door-svgrepo-com.svg";

function Side({
  sideActive,
  setSideActive,
  setRedacted,
  setSwitchElem,
  roleInfo,
  setLoggedIn
}) {
  const navigate = useNavigate();
  const sideArr = [
    {
      id: 0,
      img: person1,
      title: "Профиль",
    },
    {
      id: 1,
      img: person2,
      title: "Управление пользователями",
    },
    {
      id: 2,
      img: person3,
      title: "Управление ролям",
    },
  ];

  const toggleSide = (e, item) => {
    if (roleInfo.role === "Администратор" && item.id === 2) e.preventDefault();
    setSideActive(item.id);
    setRedacted(false);
    setSwitchElem(false);
  };

  const clickExit = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("currentUser");
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      <ul className="side">
        {sideArr.map((item) => (
          <button
            key={item.id}
            onClick={(e) => toggleSide(e, item)}
            className={sideActive !== item.id ? "chapter" : "chapter_active"}
            disabled={roleInfo.role !== "Администратор" && item.id === 2}
          >
            <li className="chapter__li">
              <img className="chapter__img" src={item.img} alt="user"></img>
              <p className="chapter__text">{item.title}</p>
            </li>
          </button>
        ))}
        <button className="exit" onClick={(e) => clickExit(e)}>
          <img className="exit__img" src={exitImg} alt="door"></img>
          <span className="exit__text">Выход</span>
        </button>
      </ul>
    </>
  );
}

export default Side;
