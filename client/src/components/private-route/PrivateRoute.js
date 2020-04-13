import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  console.log("route",isAuth);
  return (
    <Route
      {...rest}

      render={
        isAuth ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
