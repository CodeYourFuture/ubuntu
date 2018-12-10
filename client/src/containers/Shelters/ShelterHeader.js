import React from "react";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './style.css'

const ShelterHeader = props => {
  const shelter = props.shelter;


  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img className="logo-image" src="https://image.ibb.co/eChbh0/Ubuntu-Logo-Website.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/shelters/who-we-are`}>Who we are</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/shelters/what-we-do`}>What we do</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={`/shelters/who-do-we-support`}>Who do we support</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/shelters/donations`}>
                Donations
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(ShelterHeader);
