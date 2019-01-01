import React from "react";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './style.css'

const ShelterHeader = props => {


  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="">
          <img className="logo img-fluid" src="https://image.ibb.co/eChbh0/Ubuntu-Logo-Website.png" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
          <ul className="navbar-nav">
          <div className="emergency">
            <li className="nav-item">
              <Link className="nav-link cover" to={"/cover-your-tracks"}>Cover tracks</Link>
            </li>
            <li className="nav-item">
              <a href="http://www.google.co.uk" className="nav-link leave" to={"/cover-your-tracks"}>Leave website</a>
            </li>
            </div>
          <div className="menu">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/who-we-are`}>Who we are</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/what-we-do`}>What we do</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={`/who-do-we-support`}>Who do we support</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to={`/donations`}> Donations </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>Contact</Link>
            </li>
          </div>
       
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(ShelterHeader);
