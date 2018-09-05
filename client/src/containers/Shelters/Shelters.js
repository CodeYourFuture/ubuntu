import React, { Component } from "react";
import * as api from "../../helpers/api";
import "./Shelters.css";
import { Link } from "react-router-dom";

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
        <div class="shelters-container">
          {this.state.shelters.map(shelter => {
            return (
              <Link to={`/shelters/${shelter.shelter_id}`}>
                <div className="shelter-info">
                  <h3>{shelter.name}</h3>
                  <p>{shelter.city}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shelters;
