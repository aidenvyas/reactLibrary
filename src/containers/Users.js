import React, { Component } from "react";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class Users extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>The Users</h1>
          <p>Awesome users on board of this course!</p>

          <div>
            <Link to="/login">Login</Link> || <Link to="/signup">Signup</Link>
          </div>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Users;
