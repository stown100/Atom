import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Side from "../Side/Side";
import UserManagement from "../User-management/UserManagement";
import ManagingRoles from "../Managing-roles/ManagingRoles";

function Home({ visiblePassword, setCurrentUser, setLoggedIn }) {
  const [sideActive, setSideActive] = React.useState(0);
  const [switchElem, setSwitchElem] = React.useState(false);
  const [redacted, setRedacted] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(false);
  const [activeRoleTwo, setActiveRoleTwo] = React.useState(null);
  const [roleInfo, setRoleInfo] = React.useState({
    id: 1,
    role: "Администратор",
    systemName: "admin",
    date: "18.02.2019",
    lastDate: "20.12.2020",
  });

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
          setLoggedIn={setLoggedIn}
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
