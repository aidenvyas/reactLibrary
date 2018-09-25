import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    return (
      <div>
        login!!
        <form>
          <input
            type="text"
            name="email"
            placeholder="Enter Email!"
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password!"
            onChange={this.changeHandler}
          />
          <button type="submit">Login!</button>
        </form>
      </div>
    );
  }
}

export default Login;
