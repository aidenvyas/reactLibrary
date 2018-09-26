import React, { Component } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
    event.preventDefault();
    this.setState({ signup: true });
    this.props.history.push("/login");
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <Navbar heading="Signup!" />
        <form onSubmit={this.handleSignup}>
          <div>
            <TextField
              id="outlined-required"
              label="name"
              onChange={this.changeHandler}
              variant="outlined"
              name="name"
            />
          </div>
          <div>
            <TextField
              id="outlined-required"
              label="Email"
              onChange={this.changeHandler}
              variant="outlined"
              name="email"
            />
          </div>
          <div>
            <TextField
              id="outlined-required"
              label="password"
              onChange={this.changeHandler}
              variant="outlined"
              name="pwd"
            />
          </div>
          <div>
            <TextField
              id="outlined-required"
              label="confirm password"
              onChange={this.changeHandler}
              name="cnfpwd"
              variant="outlined"
            />
          </div>
          <Button variant="outlined" color="primary">
            SignUp
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
