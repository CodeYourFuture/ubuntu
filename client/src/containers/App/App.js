import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../../components/Header/Header";
import Shelters from "../Shelters/Shelters";
import Referrals from "../Referrals/Referrals";
import Users from "../Users/Users";
import OrganisationsRegister from "../OrganisationsRegister/OrganisationsRegister";
import VolunteersForm from "../../components/VolunteersForm";
import Login from "../../components/Login/Login";
import axios from "axios";
import ShelterHome from "../Shelters/ShelterHome";

class App extends Component {
  state = {
    loggedIn: false
  };
  componentDidMount = async () => {
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // if (!token) {
    //   return this.props.history.push("/login");
    // }
  };

  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  render() {
    const token = localStorage.getItem("jwtToken");
    // if (!token) return null
    return (
      <Router>
        <div className="app">
          <Link to="/organisations-register">Register Organisation</Link> |{" "}
          {!token && <Link to="/login">Login</Link>}
          {!!token && (
            <button className="btn btn-primary" onClick={this.logout}>
              Logout
            </button>
          )}
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
          <Route exact path="/shelters" component={Shelters} />
          <Route path="/shelters/:shelterId" component={ShelterHome} />
          <Route path="/referrals" component={Referrals} />
          <Route path="/users" component={Users} />
          <Route path="/Volunteers" component={VolunteersForm} />
          <Route path="/login" component={Login} />
          <Route
            path="/organisations-register"
            component={OrganisationsRegister}
          />
          <Route path="/who-we-are" component={About} />
          <Route path="/what-we-do" component={About} />
          <Route path="/who-we-support" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
