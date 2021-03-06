import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopBar from './topbar';
import './App.css';
import Welcome from './welcome';
import Register from './register'
import Login from './login'
import AdminLogin from './adminlogin'
import AdminDesk from './admindesk'
import Selection from './selection'
import UserDesk from './userdesk'

import Main from './main'
import Pizza from './pizza'
import Checkout from './checkout'


function App() {

  return (
    <>
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Route path="/" exact="true"><Welcome /></Route>
          <Route path="/login" exact="true"><Login /></Route>
          <Route path="/adminlogin" exact="true"><AdminLogin /></Route>
          <Route path="/admindesk/:id" exact="true"><AdminDesk /></Route>
          <Route path="/selection/:id" exact="true"><Selection /></Route>
          <Route path="/userdesk/:id" exact="true"><UserDesk /></Route>
          <Route path="/register" exact="true"><Register /></Route>
          <Route path="/main/:id" exact="true"><Main></Main></Route>
          <Route path="/pizza/:id" exact="true"><Pizza></Pizza></Route>
          <Route path="/checkout/:id" exact="true"><Checkout></Checkout></Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
