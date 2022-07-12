import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
