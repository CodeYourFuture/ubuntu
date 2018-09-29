import React from "react";
import * as api from "../../helpers/api";

class ShelterFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="title">Subscribe to our mailing list</h5>
            <p className="footer-info">
              to receive our monthly newsletter with updates about our work.
              <br />
              Together we can #ResistTheHostileEnvironment
            </p>

            <div className="fb-login-button" />
            <div className="twitter-link" />
          </div>

          <div className="col-12 col-md-6">
            <div className="row ml-4 mb-4 mt-2">
              <div className="col-20 offset-2 col-md-12 offset-md-0">
                <form className="form-inline">
                  <label htmlFor="your_email" className="sr-only">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control email mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Your email"
                    id="email"
                    required
                  />
                  <button
                    className="btn btn-sm  mb-2 mr-sm-2 mb-sm-0"
                    type="button"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <button className="exit-action">Cover tracks</button>
              </div>
              <div className="col-12 col-md-6">
                <button className="exit-action">Leave website</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="footer-text col-12 text-center">
                Ubuntu Womens's Shelter All Rights Reserved 2018 / Website
                developed by CYF students
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default ShelterFooter;
