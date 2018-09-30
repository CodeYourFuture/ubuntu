import React, { Component } from "react";
import img from "./image.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./style.css";

class ShelterHeader extends Component {
  render() {
    const shelter = this.props.shelter;
    const { shelterId } = this.props.match.params;

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a class="navbar-brand" href="/">
              <img
                src={`http://localhost:4000/static/shelters/${shelterId}/logo.png`}
                alt="logo"
              />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Who we are
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  What we do
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Who do we support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Donations
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(ShelterHeader);
