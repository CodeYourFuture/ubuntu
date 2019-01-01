import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Who from "../Content/Who";
import What from "../Content/What";
import Support from "../Content/Support";
import Donations from "../Content/Donations";
import ContactUs from "../ContactUs/ContactUs";
import ShelterFooter from "../../components/Footer/ShelterFooter";
import axios from "axios";
import ShelterHome from "../ShelterHome";
import CoverYourTracks from "../../components/CoverYourTracks";
import "./App.css";


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
    console.log('appppp', this.props);

    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={ShelterHome} />
          <Route exact path="/:shelterId" component={ShelterHome} />
          <Route path="/contact" component={ContactUs} />
       {/*    <Route path="/referrals" component={Referrals} />
          <Route path="/users" component={Users} />
          <Route path="/Volunteers" component={VolunteersForm} />
          <Route path="/login" component={Login} />
          <Route
            path="/organisations-register"
            component={OrganisationsRegister}
          /> */}
          <Route path="/who-we-are" component={Who} />
          <Route path="/what-we-do" component={What} />
          <Route path="/who-we-support" component={Support} />
          <Route path="/donations" component={Donations} />
          <Route path="/ShelterFooter" component={ShelterFooter} />
          <Route path="/CoverYourTracks" component={CoverYourTracks} />
        </div>
      </Router>
    );
  }
}

export default App;
