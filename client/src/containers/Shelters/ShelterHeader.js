import React from "react";
import { Link } from 'react-router-dom'
import SheltersDropDownList from "../../components/SheltersDropDownList";
import { withRouter } from 'react-router-dom'
import './style.css'

const ShelterHeader = props => {
  const shelter = props.shelter;
  const token = localStorage.getItem("jwtToken");

  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  return (
    <div className="header-wrapper">
      <div className="header-extra-info">
              <Link to="/organisations-register">Register Organisation</Link>
              {' '} | {' '}
              {!token && <Link to="/login">Login</Link>}
              {' '} | {' '}
              <SheltersDropDownList />
              {!!token && (
                <button className="btn btn-primary" onClick={logout}>
                  Logout
                </button>
              )}
            </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {
          shelter.shelter_id ? <a className="navbar-brand" href="#">
          <img className="logo-image" src={`/static/shelters/${shelter.shelter_id}/logo.png`} />
        </a> : null
        }
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
              <Link className="nav-link" to={`/shelters/${shelter.shelter_id}/who-we-are`}>Who we are</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/shelters/${shelter.shelter_id}/what-we-do`}>What we do</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={`/shelters/${shelter.shelter_id}/who-do-we-support`}>Who do we support</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href={`/shelters/${shelter.shelter_id}/donations`}>
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
