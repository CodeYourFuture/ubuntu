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
    api.saveOrganisation(this.state);
  };
  render() {
    return (
      <div className="register_form">
        <h1 className="heading">Register your organisation</h1>
        <form onSubmit={this.onSubmit} className="organisation-details">
          <label htmlFor="contactName">Name</label>
          <input
            name="contactName"
            placeholder="Contact name"
            value={this.state.contactName}
            onChange={e => this.setState({ contactName: e.target.value })}
          />
          <br />
          <label htmlFor="organisationName">Organisation name</label>
          <input
            name="organisationName"
            placeholder="Organisation name"
            value={this.state.organisationName}
            onChange={e => this.setState({ organisationName: e.target.value })}
          />
          <br />
          <label htmlFor="address">Address</label>
          <input
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={e => this.setState({ address: e.target.value })}
          />

          <br />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <br />
          <label htmlFor="phone number">Phone number</label>
          <input
            name="phoneNumber"
            placeholder="Phone number"
            value={this.state.phoneNumber}
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          />

          <br />
          <label htmlFor="password">
            <input
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default OrganisationsRegister;
