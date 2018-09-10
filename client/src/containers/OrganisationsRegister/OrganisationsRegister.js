import React from "react";
import * as api from "../../helpers/api";

class OrganisationsRegister extends React.Component {
  state = {
    contactName: "",
    organisationName: "",
    address: "",
    email: "",
    phoneNumber: "",
    password: "",
    formValid: true
  };

  // componentDidMount() {
  //   api.getOrganisationsRegister().then(data => {
  //     this.setState({
  //       users: data
  //     });
  //   });
  // }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.contactName.length === 0) {
      // invalid
      this.setState({
        formValid: false
      });
    } else {
      //valid
      this.setState({ formValid: true });
      api.saveUser(this.state).then(() => {
        this.props.history.push("/login");
      });
    }
  };

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">
                Please provide all the information requested. Your registration
                cannot be completed without it.
              </p>
              <div className="form-group">
                <label htmlFor="contactName" className="sr-only">
                  Your name
                </label>
                <input
                  type="text"
                  name="contactName"
                  onChange={this.onChange}
                  id="contactName"
                  placeholder="Your name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="organisationName" className="sr-only" />
                <input
                  type="text "
                  id="organisationName"
                  name="organisationName"
                  onChange={this.onChange}
                  placeholder="Organisation name"
                  className="form-control"
                  required
                />
                <div class="invalid-feedback">
                  Please provide your organisation name
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address" className="sr-only">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={this.onChange}
                  placeholder="Address"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={this.onChange}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone number
                </label>
                <input
                  type="number"
                  id="number"
                  name="phoneNumber"
                  onChange={this.onChange}
                  placeholder="Phone number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={this.onChange}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              {!this.state.formValid ? (
                <div class="alert alert-danger" role="alert">
                  Form is not valid
                </div>
              ) : null}
              <div className="text-center mt-4">
                <button className="btn btn-large btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default OrganisationsRegister;
