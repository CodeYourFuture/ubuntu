import React, { Component } from "react";
import * as api from "../../helpers/api";

class Shelters extends Component {
  state = {
    shelters: []
  };
  componentDidMount() {
    api.getShelters().then(data => {
      this.setState({
        shelters: data
      });
    });
  }
  render() {
    return (
      <div>
        <h1>List of shelters</h1>
        {this.state.shelters.map(shelter => {
          return <h3>{shelter.name}</h3>;
        })}
      </div>
    );
  }
}

export default Shelters;
