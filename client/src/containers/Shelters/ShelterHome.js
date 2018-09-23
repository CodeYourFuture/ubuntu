import React, { Component } from "react";
import ShelterHeader from "./ShelterHeader";
import * as api from "../../helpers/api";

class Shelters extends Component {
  state = {
    shelter: {}
  };
  componentDidMount() {
    const shelterId = this.props.match.params.shelterId;
    api.getSingleShelter(shelterId).then(data => {
      this.setState({
        shelter: data
      });
    });
  }

  render() {
    return (
      <div>
        <ShelterHeader shelter={this.state.shelter} />
        <h1>Shelter home</h1>
      </div>
    );
  }
}
export default Shelters;
