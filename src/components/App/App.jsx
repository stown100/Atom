import React from "react";
import Home from "../Home/Home";
import Preview from "../Preview/Preview";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../contexts/context";
import person1 from "../../assets/images/person1.svg";
import cartImg from "../../assets/images/bin-recycle-recycling-sorting-waste-2-svgrepo-com.svg";
import editImg from "../../assets/images/edit-hatch-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({
    id: null,
    img: person1,
    name: "",
    lastName: "",
    patronymic: "",
    date: "",
    email: "",
    lastDate: "",
    currentSession: "",
    cart: cartImg,
    edit: editImg,
    tel: "",
    gender: "",
    password: "",
    confirmPassword: "",
    roles: [
      {
        id: 0,
        role: "Бог",
        systemName: "god",
        date: "14.01.2020",
        lastDate: "20.12.2020",
      },
      {
        id: 1,
        role: "Администратор",
        systemName: "admin",
        date: "18.02.2019",
        lastDate: "20.12.2020",
      },
      {
        id: 2,
        systemName: "user",
        role: "Пользователь",
        date: "14.01.2018",
        lastDate: "20.12.2020",
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
  });

  const [checkbox, setCheckbox] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const validName =
    currentUser &&
    currentUser.name &&
    currentUser.name !== null &&
    currentUser.name.length >= 3 &&
    currentUser.name.length <= 20 &&
    currentUser.name === currentUser.name.replace(/[^a-zA-Zа-яА-Я]/gi, "");
  const validEmail =
    currentUser &&
    currentUser.email &&
    currentUser.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const regexPassword =
    currentUser &&
    /[A-Z]/g.test(currentUser.password) &&
    /[a-z]/g.test(currentUser.password) &&
    /[^a-zA-Z]/g.test(currentUser.password);
  const validPassword =
    currentUser &&
    currentUser.password &&
    currentUser.password !== null &&
    currentUser.password.length >= 6 &&
    currentUser.password.length <= 30 &&
    regexPassword;
  const validConfirmPassword =
    currentUser && currentUser.password === currentUser.confirmPassword;
  const validPatronymic =
    currentUser &&
    currentUser.patronymic &&
    (currentUser.patronymic !== null ||
      (currentUser.patronymic.length >= 3 &&
        currentUser.patronymic.length <= 20 &&
        currentUser.patronymic ===
          currentUser.patronymic.replace(/[^a-zA-Zа-яА-Я]/gi, "")));
  const validLastName =
    currentUser &&
    currentUser.lastName &&
    currentUser.lastName !== null &&
    currentUser.lastName.length >= 3 &&
    currentUser.lastName.length <= 20 &&
    currentUser.lastName ===
      currentUser.lastName.replace(/[^a-zA-Zа-яА-Я]/gi, "");

  const visiblePassword = (e) => {
    e.preventDefault();
    if (e.target.parentElement.children[1].type === "password") {
      e.target.parentElement.children[1].type = "text";
    } else {
      e.target.parentElement.children[1].type = "password";
    }
  };

  // Сохранить состояние пользователя
  React.useEffect(() => {
    const parseUser = JSON.parse(window.localStorage.getItem("currentUser"));
    if (parseUser) {
      setCurrentUser(parseUser);
      setLoggedIn(!!parseUser.name);
    }
  }, []);

  const onRegister = (e) => {
    e.preventDefault();
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setLoggedIn(true);
    navigate("/home");
  };

  // React.useEffect(() => {
  //   if (loggedIn) {
  //     return navigate("/home");
  //   } else {
  //     return navigate("/");
  //   }
  // }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            exact
            loggedIn={loggedIn}
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
                setCurrentUser={setCurrentUser}
                onRegister={onRegister}
              />
            }
          />
          {loggedIn ? (
            <Route
              exact
              loggedIn={loggedIn}
              path="/home"
              element={
                <Home
                  visiblePassword={visiblePassword}
                  setCurrentUser={setCurrentUser}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
          ) : (
            <Route
              exact
              loggedIn={loggedIn}
              path="/home"
              element={
                <div className="error">
                  <Link to="/" className="error__title">
                    Пожалуйста зарегестрируйтесь или войдите в аккаунт
                  </Link>
                </div>
              }
            />
          )}

          {/* <Route>
            {loggedIn ? <Redirect to="/home" /> : <Redirect to="/" />}
          </Route> */}
          {/* {(currentUser && currentUser.name) ||
          (JSON.parse(window.localStorage.getItem("currentUser")) &&
            JSON.parse(window.localStorage.getItem("currentUser")).name) ? (
            <Route
              loggedIn={loggedIn}
              path="home"
              element={
                <Home
                  visiblePassword={visiblePassword}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          ) : (
            <Route
              loggedIn={loggedIn}
              path="home"
              element={
                <div className="error">
                  <Link to="/" className="error__title">
                    Пожалуйста зарегестрируйтесь или войдите в аккаунт
                  </Link>
                </div>
              }
            ></Route>
          )} */}
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
