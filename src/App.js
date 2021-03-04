import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Login } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
