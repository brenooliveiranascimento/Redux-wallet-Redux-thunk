import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import SignIn from '../../Pages/SignIn/SignIn';

class AppRoutes extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/Home" component={ Home }/>
        <Route exact path="/" component={ SignIn }/>
      </>
    )
  }
}

export default AppRoutes;