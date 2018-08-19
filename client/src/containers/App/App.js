import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../../components/Header/Header";
import Shelters from "../Shelters/Shelters";
import Referrals from "../Referrals/Referrals";
import Users from "../Users/Users";
import VolunteersForm from "../../components/VolunteersForm";


const App = () => (
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
          <Link to="/VolunteersForm">Volunteers form</Link>
        </li>
      </ul>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/shelters" component={Shelters} />
      <Route path="/referrals" component={Referrals} />
      <Route path="/users" component={Users} />
      <Route path="/VolunteersForm" component={VolunteersForm} />
    </div>
  </Router>
);

export default App;
