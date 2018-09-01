import React, { Component } from "react";
import ShelterHeader from "./ShelterHeader";
import ShelterFooter from "./ShelterFooter";

class Shelters extends Component {
  render() {
    return (
      <div>
        <ShelterHeader />
        <h1>Shelter home</h1>
        <ShelterFooter />
      </div>
    );
  }
}
export default Shelters;
