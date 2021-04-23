import React from "react";
import jwt from "jsonwebtoken";
import Cookie from "js-cookie";
import { Route, Redirect } from "react-router-dom";

let token = Cookie.get("vatoken");
let tokened = jwt.decode(token);
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    if (tokened) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
    /*{ <Route
      {...rest}
      render={(props) =>
        isLogin() ? <h1>Login success</h1>: <Redirect to="/login" />
    }/> }*/
  );
};

export default PrivateRoute;
