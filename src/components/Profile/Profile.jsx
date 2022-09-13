import React from "react";
import Card from "../Card/Card";
import Role from "../Role/Role";

function Profile({
  validName,
  validEmail,
  validPassword,
  validConfirmPassword,
  validPatronymic,
  validLastName,
  switchElem,
  clickFirstSwitch,
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
  redacted,
  setRedacted,
  valueTel,
  setValueTel,
  valueGender,
  setValueGender,
  validTel,
  visiblePassword,
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
          activeRole={activeRole}
          setActiveRole={setActiveRole}
          activeRoleTwo={activeRoleTwo}
          setActiveRoleTwo={setActiveRoleTwo}
          title={title}
          setTitle={setTitle}
          arr={arr}
          setArr={setArr}
          twoArr={twoArr}
          setTwoArr={setTwoArr}
        />
      ) : (
        <Card
          validName={validName}
          validEmail={validEmail}
          validPassword={validPassword}
          validConfirmPassword={validConfirmPassword}
          validPatronymic={validPatronymic}
          validLastName={validLastName}
          redacted={redacted}
          setRedacted={setRedacted}
          valueTel={valueTel}
          setValueTel={setValueTel}
          valueGender={valueGender}
          setValueGender={setValueGender}
          validTel={validTel}
          visiblePassword={visiblePassword}
        />
      )}
    </div>
  );
}

export default Profile;
