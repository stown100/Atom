import React from "react";
import Card from "../Card/Card";
import Role from "../Role/Role";

function Profile({
  switchElem,
  clickFirstSwitch,
  activeRoleTwo,
  setActiveRoleTwo,
  redacted,
  setRedacted,
  visiblePassword,
  roleInfo,
  setRoleInfo,
  setCurrentUser,
}) {

    return (
    <div className="profile">
      <h2 className="profile__title">Мой профиль</h2>
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
        <Card
          redacted={redacted}
          setRedacted={setRedacted}
          visiblePassword={visiblePassword}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
}

export default Profile;
