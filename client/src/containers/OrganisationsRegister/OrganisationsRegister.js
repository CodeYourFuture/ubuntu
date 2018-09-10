import React from "react";
import * as api from "../../helpers/api";

class OrganisationsRegister extends React.Component {
  state = {
    contactName: "",
    organisationName: "",
    address: "",
    email: "",
    phoneNumber: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    api.saveUser(this.state);
  };
  render() {
    return (
      <div className="container form-group">
        <form
          className="needs-validation organisation-details"
          onSubmit={this.onSubmit}
        >
          <p className="h4 text-center mb-4">
            Please provide all the information requested. Your registration
            cannot be completed without it.
          </p>
          <label htmlFor="formCompletionInformation" />

          <div>
            <label htmlFor="Name required" />
            <input
              type="text required value"
              id="yourName"
              placeholder="Your name"
              className="form-control col-center"
            />
          </div>

          <div>
            <label htmlFor="organisationName required" />
            <input
              type="text "
              id="organisationName"
              placeholder="Organisation name"
              className="form-control col-center "
              required
            />
            <div class="invalid-feedback">
              Please provide your organisation name
            </div>
          </div>

          <div>
            <label htmlFor="address required" />
            <input
              type="text"
              id="address"
              placeholder="Address"
              className="form-control col-center"
            />
          </div>

          <div>
            <label htmlFor="email required" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control col-center"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber required" />
            <input
              type="number"
              id="number"
              placeholder="Phone number"
              className="form-control col-center"
            />
          </div>

          <div>
            <label htmlFor="password required" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control col-center "
            />
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-large btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default OrganisationsRegister;
