import React from "react";
import * as api from "../../helpers/api";

class ShelterFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div class="col-md-6 mb-4">
              <form class="input-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-sm btn-outline-white" type="button">
                    Sign up
                  </button>
                </div>
              </form>

              <div className="col sm=6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <div className="container fluid">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default ShelterFooter;
