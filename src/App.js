// @flow

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/index';
import Login from './components/login/index';
import Register from './components/register/index';
import NotFound from './components/404/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Register}/>
            <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
