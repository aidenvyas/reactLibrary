import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent";

const AsyncLibrary = asyncComponent(() => {
  return import("./containers/Library.js");
});

class App extends Component {
  render() {
    return (
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
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
