import React from 'react';
import Cookie from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  let token = Cookie.get('vatoken');
  const isLogin = () => {
    if (!token) {
      return false;
    }
    return true;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
