import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Navbar from "../../components/NavBar/Navbar";

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
        
        <Navbar heading={"LOGIN"} />
        <br/>
        <form onSubmit={this.submitForm}>
        <div>
          <TextField
            id="outlined-required"
            label="Email" name="email"
            onChange={this.changeHandler}
            variant="outlined"
          /></div>
       <div>
          <TextField
            variant="outlined"
            label="password" name="password"
            onChange={this.changeHandler}
            variant="outlined"
          /></div>
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
