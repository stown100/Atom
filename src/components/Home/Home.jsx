import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Side from "../Side/Side";
import UserManagement from "../User-management/UserManagement";
import ManagingRoles from "../Managing-roles/ManagingRoles";

function Home({
  visiblePassword,
  setCurrentUser,
}) {
  const availableRoles = [
    {
      id: 0,
      systemName: "god",
      role: "Бог",
      date: "14.01.2020",
    },
    {
      id: 1,
      systemName: "admin",
      role: "Администратор",
      date: "14.01.2021",
    },
    {
      id: 2,
      systemName: "user",
      role: "Пользователь",
      date: "14.01.2018",
    },
  ];
  const availableRolesTwo = [
    {
      id: 0,
      role: "Управление пользователями",
    },
    {
      id: 1,
      role: "Управление ролями",
    },
    {
      id: 2,
      role: "Профиль",
    },
  ];
  const [sideActive, setSideActive] = React.useState(0);
  const [switchElem, setSwitchElem] = React.useState(false);

  const [activeRole, setActiveRole] = React.useState(1);
  const [activeRoleTwo, setActiveRoleTwo] = React.useState(null);
  const [title, setTitle] = React.useState("Администратор");
  const [roleInfo, setRoleInfo] = React.useState({
    id: 1,
    role: "Администратор",
    systemName: "admin",
    date: "18.02.2019",
    lastDate: "20.12.2020",
  });
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
        <Side
          sideActive={sideActive}
          setSideActive={setSideActive}
          setRedacted={setRedacted}
          setSwitchElem={setSwitchElem}
          roleInfo={roleInfo}
        />
        {sideActive === 0 ? (
          <Profile
            switchElem={switchElem}
            clickFirstSwitch={clickFirstSwitch}
            activeRoleTwo={activeRoleTwo}
            setActiveRoleTwo={setActiveRoleTwo}
            redacted={redacted}
            setRedacted={setRedacted}
            visiblePassword={visiblePassword}
            roleInfo={roleInfo}
            setRoleInfo={setRoleInfo}
            setCurrentUser={setCurrentUser}
          />
        ) : sideActive === 1 ? (
          <UserManagement
            switchElem={switchElem}
            clickFirstSwitch={clickFirstSwitch}
            activeRoleTwo={activeRoleTwo}
            setActiveRoleTwo={setActiveRoleTwo}
            redacted={redacted}
            checkbox={checkbox}
            setCheckbox={setCheckbox}
            visiblePassword={visiblePassword}
            roleInfo={roleInfo}
            setRoleInfo={setRoleInfo}
            setCurrentUser={setCurrentUser}
          />
        ) : (
          <ManagingRoles
            roleInfo={roleInfo}
            setRoleInfo={setRoleInfo}
            activeRoleTwo={activeRoleTwo}
            setActiveRoleTwo={setActiveRoleTwo}
            setCurrentUser={setCurrentUser}
          />
        )}
      </div>
    </>
  );
}

export default Home;
