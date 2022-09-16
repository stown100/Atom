import React from "react";
import person1 from "../../assets/images/person1.svg";
import person2 from "../../assets/images/person2.svg";
import person3 from "../../assets/images/person3.svg";

function Side({
  sideActive,
  setSideActive,
  setRedacted,
  setSwitchElem,
  roleInfo,
}) {
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


  return (
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
    </ul>
  );
}

export default Side;
