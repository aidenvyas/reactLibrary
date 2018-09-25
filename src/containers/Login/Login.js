import React, { Component } from "react";
import {Button}  from 'reactstrap'
// import { Button } from "react-bootstrap";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      login: false,
      errors: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm = e => {
    e.preventDefault();
    this.setState({ login: true });
    this.props.history.push("/library");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        login!!
        <form onSubmit={this.submitForm}>
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
          <button className={Button}>Login!</button>
          <Button color="secondary" size="lg">Large Button</Button>
        </form>
      </div>
    );
  }
}
export default Login;
