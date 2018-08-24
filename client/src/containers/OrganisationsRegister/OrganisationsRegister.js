import React from "react";
import * as api from "../../helpers/api";
import "./OrganisationsRegister.css";

class RegisterOrganisation extends React.Component {
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
  };
  render() {
    return (
      <div className="register_form">
        <h1 className="heading">Register your organisation</h1>
        <form className="register_organisations">
          <label contact name>
            <input
              placeholder="Contact name"
              value={this.state.contactName}
              onChange={e => this.setState({ contactName: e.target.value })}
            />
          </label>
          <br />
          <label organisation name>
            <input
              placeholder="Organisation name"
              value={this.state.organisationName}
              onChange={e =>
                this.setState({ organisationName: e.target.value })
              }
            />
          </label>
          <br />
          <label address>
            <input
              placeholder="Address"
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </label>
          <br />
          <label email>
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </label>
          <br />
          <label phone number>
            <input
              placeholder="Phone number"
              value={this.state.phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </label>
          <br />
          <label password>
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </label>
          <br />

          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
          <button onFocus={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
export default RegisterOrganisation;
