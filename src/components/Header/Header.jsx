import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { CurrentUserContext } from "../contexts/context";

function Header() {
  const { valueName, valuePassword, setValueName, setValuePassword } =
    React.useContext(CurrentUserContext);

  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo}></img>
        <h2 className="header__text">Dron taxi</h2>
      </Link>
    </div>
  );
}

export default Header;
