import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Side from "../Side/Side";
import UserManagement from "../User-management/UserManagement";
import ManagingRoles from "../Managing-roles/ManagingRoles";

function Home({
  validName,
  validEmail,
  validPassword,
  validConfirmPassword,
  validPatronymic,
  validLastName,
  visiblePassword,
}) {
  const availableRoles = [
    {
      id: 0,
      name: "Бог",
    },
    {
      id: 1,
      name: "Администратор",
    },
    {
      id: 2,
      name: "Пользователь",
    },
  ];
  const availableRolesTwo = [
    {
      id: 0,
      name: "Управление пользователями",
    },
    {
      id: 1,
      name: "Управление ролями",
    },
    {
      id: 2,
      name: "Профиль",
    },
  ];
  const [sideActive, setSideActive] = React.useState(0);
  const [switchElem, setSwitchElem] = React.useState(false);

  const [activeRole, setActiveRole] = React.useState(1);
  const [activeRoleTwo, setActiveRoleTwo] = React.useState(null);
  const [title, setTitle] = React.useState("Администратор");
  const [arr, setArr] = React.useState(availableRoles);
  const [twoArr, setTwoArr] = React.useState(availableRolesTwo);
  const [redacted, setRedacted] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(false);
  const [valueTel, setValueTel] = React.useState("");
  const [valueGender, setValueGender] = React.useState("");
  const validTel = valueTel.replace(/[^0-9]+/g, "") && valueTel.length === 14;

  // Смена разделов
  const clickFirstSwitch = (e) => {
    e.preventDefault();
    if (e.target.className !== "switch") {
      setSwitchElem(!switchElem);
    }
  };

  return (
    <>
      <Header />
      <div className="home">
        <Side sideActive={sideActive} setSideActive={setSideActive} setRedacted={setRedacted} setSwitchElem={setSwitchElem} />
        {sideActive === 0 ? (
          <Profile
            validName={validName}
            validEmail={validEmail}
            validPassword={validPassword}
            validConfirmPassword={validConfirmPassword}
            validPatronymic={validPatronymic}
            validLastName={validLastName}
            switchElem={switchElem}
            clickFirstSwitch={clickFirstSwitch}
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
            redacted={redacted}
            setRedacted={setRedacted}
            valueTel={valueTel}
            setValueTel={setValueTel}
            valueGender={valueGender}
            setValueGender={setValueGender}
            validTel={validTel}
            visiblePassword={visiblePassword}
          />
        ) : sideActive === 1 ? (
          <UserManagement
            switchElem={switchElem}
            clickFirstSwitch={clickFirstSwitch}
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
            redacted={redacted}
            checkbox={checkbox}
            setCheckbox={setCheckbox}
            visiblePassword={visiblePassword}
          />
        ) : (
          <ManagingRoles />
        )}
      </div>
    </>
  );
}

export default Home;
