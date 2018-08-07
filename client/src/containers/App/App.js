import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import contactUs from "../ContactUs/ContactUs"

const App = () => (
  <Router>
    <div>
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
      </ul>
      <hr />

      <Router exact path="/" component={Home}/>
      <Router path="/about" component={About}/>
      <Router path="/contactUs" component={contactUs}/>
    </div>
  </Router>
);


export default App;
