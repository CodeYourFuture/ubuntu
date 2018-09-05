import React, { Component } from "react";
import { loginUser, getUserProfile } from "../../helpers/api";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await loginUser(email, password);

      window.location = "/";
    } catch (err) {
      this.setState({ message: "error happened" });
    }
  };

  render() {
    const { email, password, message } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== "" && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              {message}
            </div>
          )}
          <h2 className="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={this.onChange}
            required
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.onSubmit}
          >
            Login
          </button>
          <p>
            Not a member?{" "}
            <Link to="/organisations-register">
              <span
                className="glyphicon glyphicon-plus-sign"
                aria-hidden="true"
              />{" "}
              Register here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
