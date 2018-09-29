import React from "react";

const ShelterHeader = props => {
  const shelter = props.shelter;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img className="logo-image" src={`/static/shelters/${shelter.shelter_id}/logo.png`} />
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
            <li className="nav-item active">
              <a className="nav-link" href="#/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/who-we-are">
                Who we are
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/what-we-do">
                What we do
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link"  href="#/who-do-we-support">
                Who do we support
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link"  href="#/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"  href="#/donations">
                Donations
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ShelterHeader;
