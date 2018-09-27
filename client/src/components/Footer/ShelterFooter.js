import React from "react";
import * as api from "../../helpers/api";

class ShelterFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="page-footer ">
          <div className="row">
            <div className=" col-3 col-md-4">
              <h5 className="title">Subscribe to our mailing list</h5>
            </div>
            <div className="col-3 col-md-4">
              <form className="input-group form">
                <label htmlFor="your_email" className="sr-only">
                  Your name
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your email"
                  id="email"
                  required
                />
                <div class="input-group-append">
                  <button class="btn btn-sm" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
              <div
                class="fb-login-button"
                data-size="medium"
                data-auto-logout-link="true"
                data-onlogin=" checkLoginState();"
              />
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <div className="container fluid">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.codeyourfuture.com"> CodeYourFuture.com </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default ShelterFooter;
