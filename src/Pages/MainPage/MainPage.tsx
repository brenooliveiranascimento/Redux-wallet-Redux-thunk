import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wallet from '../Wallet/Wallet';
import { Container } from './MainComponents';

function MainPage() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Wallet} />
      </Switch>
    </Container>
  );
}

export default MainPage;
