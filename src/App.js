import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Users from "./containers/Users/Users";
import asyncComponent from "./hoc/asyncComponent";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";


const AsyncLibrary = asyncComponent(() => {
  return import("./containers/Library/Library.js");
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <NavLink to="/users" exact activeClassName="my-active">
              Users
            </NavLink>
            ||
            <NavLink to="/library" exact activeClassName="my-active">
              library
            </NavLink>
          </div>
          <div>
            <Switch>
              <Route path="/users" exact component={Users} />
              <Route path="/library" component={AsyncLibrary} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
