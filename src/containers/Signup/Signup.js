import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pwd: "",
      cnfpwd: "",
      signup: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSignup = event => {
    event.preventDefault()
    this.setState({ signup: true });
    this.props.history.push("/login");
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          <label>
            Enter Name:{" "}
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Enter Email:{" "}
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Enter Password:{" "}
            <input type="password" name="pwd" onChange={this.handleChange} />
          </label>
          <label>
            Confirm Password:{" "}
            <input type="password" name="cnfpwd" onChange={this.handleChange} />
          </label>
          <button type="submit">SignUp!</button>
        </form>
      </div>
    );
  }
}

export default Signup;
