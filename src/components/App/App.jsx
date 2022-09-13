import React from "react";
import Home from "../Home/Home";
import Preview from "../Preview/Preview";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../contexts/context";

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    lastName: "",
    patronymic: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
  });
  const [valueName, setValueName] = React.useState("");
  const [valueLastName, setValueLastName] = React.useState("");
  const [valuePatronymic, setValuePatronymic] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState("");
  const [valueDate, setValueDate] = React.useState("");

  const [checkbox, setCheckbox] = React.useState(false);

  React.useEffect(() => {
    setCheckbox(checkbox);
  }, [checkbox]);

  const validName =
    valueName !== null &&
    valueName.length >= 3 &&
    valueName.length <= 20 &&
    valueName === valueName.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validEmail = valueEmail.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const regexPassword =
    /[A-Z]/g.test(valuePassword) &&
    /[a-z]/g.test(valuePassword) &&
    /[^a-zA-Z]/g.test(valuePassword);
  const validPassword =
    valuePassword !== null &&
    valuePassword.length >= 6 &&
    valuePassword.length <= 30 &&
    regexPassword;
  const validConfirmPassword = valuePassword === valueConfirmPassword;
  const validPatronymic =
    valuePatronymic.length >= 3 &&
    valuePatronymic.length <= 20 &&
    valuePatronymic === valuePatronymic.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validLastName =
    valueLastName.length >= 3 &&
    valueLastName.length <= 20 &&
    valueLastName === valueLastName.replace(/[^a-zA-Zа-яА-Я]/gi, "");

    const visiblePassword = (e) => {
      e.preventDefault();
      if (e.target.parentElement.children[1].type === "password") {
        e.target.parentElement.children[1].type = "text"
      } else {
        e.target.parentElement.children[1].type = "password"
      }
    }

  return (
    <CurrentUserContext.Provider
      value={{
        valueName,
        setValueName,
        valueLastName,
        setValueLastName,
        valuePatronymic,
        setValuePatronymic,
        valueEmail,
        setValueEmail,
        valuePassword,
        setValuePassword,
        valueConfirmPassword,
        setValueConfirmPassword,
        valueDate,
        setValueDate,
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Preview
                validName={validName}
                validEmail={validEmail}
                validPassword={validPassword}
                validConfirmPassword={validConfirmPassword}
                validPatronymic={validPatronymic}
                validLastName={validLastName}
                checkbox={checkbox}
                setCheckbox={setCheckbox}
                visiblePassword={visiblePassword}
              />
            }
          />
          <Route
            path="home"
            element={
              <Home
                validName={validName}
                validEmail={validEmail}
                validPassword={validPassword}
                validConfirmPassword={validConfirmPassword}
                validPatronymic={validPatronymic}
                validLastName={validLastName}
                visiblePassword={visiblePassword}
              />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
