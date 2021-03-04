import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Login, Navbar, Register } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main/:userId" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
