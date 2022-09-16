import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          rest.loggedIn ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </Routes>
  );
};

export default ProtectedRoute;
