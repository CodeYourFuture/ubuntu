import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../../components/Header/Header";
import Shelters from "../Shelters/Shelters";
import Referrals from "../Referrals/Referrals";
import Users from "../Users/Users";
import VolunteersForm from "../../components/VolunteersForm";

import axios from "axios";

class App extends Component {
  state = {
    loggedIn: false
  };
  componentDidMount = async () => {
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    if (!token) {
      return this.props.history.push("/login");
    }
  };

  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  render() {
    const token = localStorage.getItem("jwtToken");
    if (!token) return null;
    return (
      <Router>
        <div className="app">
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/shelters">Shelters</Link>
            </li>
            <li>
              <Link to="/referrals">Referrals</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
      <li>
          <Link to="/Volunteers">Volunteers</Link>
        </li>
            <li>
              {localStorage.getItem("jwtToken") && (
                <button className="btn btn-primary" onClick={this.logout}>
                  Logout
                </button>
              )}
            </li>
          </ul>
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/shelters" component={Shelters} />
          <Route path="/referrals" component={Referrals} />
          <Route path="/users" component={Users} />
            <Route path="/Volunteers" component={VolunteersForm} />
        </div>
      </Router>
    );
  }
}

export default App;
