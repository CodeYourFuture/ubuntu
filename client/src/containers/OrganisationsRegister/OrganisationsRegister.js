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
      <form onSubmit={this.onSubmit} className="organisation-details">
        <p className="h4 text-center mb-4">Register your organisation</p>
        <label htmlFor="organisationName" className="grey-text">
          Organisation name
        </label>
        <input type="text" id="organisationName" className="form-control " />
        <br />
        <label htmlFor="Name" className="grey-text">
          Your name
        </label>
        <input type="text" id="yourName" className="form-control" />
        <br />
        <label htmlFor="address" className="grey-text">
          Your address
        </label>
        <input type="text" id="address" className="form-control" />
        <br />
        <label htmlFor="email" className="grey-text">
          Email
        </label>
        <input type="email" id="email" className="form-control" />
        <br />
        <label htmlFor="phoneNumber" className="grey-text">
          Phone number
        </label>
        got
        <input type="number" id="number" className="form-control" />
        <br />
        <label htmlFor="password" className="grey-text">
          Password
        </label>
        <input type="password" id="password" className="form-control" />
        <div className="text-center mt-4">
          <button className="btn btn-unique" type="submit">
            Register
          </button>
        </div>
      </form>
    );
  }
}
export default OrganisationsRegister;
