import React, { Component } from "react";
import { Link } from "react-router-dom";

class Users extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>The Users</h1>
          <p>Awesome users on board of this course!</p>
        </div>

        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    );
  }
}

export default Users;
