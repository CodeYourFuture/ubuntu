import React, { Component } from "react";
import "../App/App.css";
import Header from "../../components/Header/Header";
import * as api from "../../helpers/api";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="app-intro">Welcome to Ubuntu Shelter for Women</p>
      </div>
    );
  }
}

export default Home;
