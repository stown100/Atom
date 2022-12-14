import React from "react";
import backgroundImg from "../../assets/images/flying.jpg";

import Header from "../Header/Header";
import AuthorizationForm from "../Authorization-form/AuthorizationForm";
import Register from "../Register-popup/Register";

function Preview({
  validName,
  validEmail,
  validPassword,
  validConfirmPassword,
  validPatronymic,
  validLastName,
  checkbox,
  setCheckbox,
  visiblePassword,
  setCurrentUser,
  onRegister,
  enter
}) {
  const [visibleForm, setVisibleForm] = React.useState(false);

  const escFunction = React.useCallback((event) => {
    if (event.key === "Escape") {
      setVisibleForm(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const openRegisterPopup = (e) => {
    e.preventDefault();
    setVisibleForm(!visibleForm);
  };

  return (
    <>
      <Header />
      <div className="preview">
        <img className="preview__img" src={backgroundImg}></img>
        <div
          className="preview__background"
          onClick={() => setVisibleForm(false)}
        ></div>
      </div>
      <AuthorizationForm
        visibleForm={visibleForm}
        openRegisterPopup={openRegisterPopup}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        visiblePassword={visiblePassword}
        setCurrentUser={setCurrentUser}
        enter={enter}
      />
      <Register
        validName={validName}
        validEmail={validEmail}
        validPassword={validPassword}
        visibleForm={visibleForm}
        openRegisterPopup={openRegisterPopup}
        validConfirmPassword={validConfirmPassword}
        validPatronymic={validPatronymic}
        validLastName={validLastName}
        visiblePassword={visiblePassword}
        setCurrentUser={setCurrentUser}
        onRegister={onRegister}
      />
    </>
  );
}

export default Preview;
