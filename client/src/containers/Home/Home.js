import React, { Component } from "react";
import "../App/App.css";
import SheltersList from "../Shelters/Shelters";

class Home extends Component {
  render() {
    return (
      <div>
        <p className="app-intro">
          Shelters in Glasgow for People without recourse to public funds
        </p>
        <SheltersList />
      </div>
    );
  }
}

export default Home;
