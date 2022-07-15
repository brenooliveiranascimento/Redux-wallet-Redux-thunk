import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../../Pages/SignIn/SignIn';

function AuthRoutes() {
  return (
    <Route exact path="/" component={SignIn} />
  );
}

export default AuthRoutes;
