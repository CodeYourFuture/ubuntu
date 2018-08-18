import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputvalue: event.target.value
    });
  }

  render() {
    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <label>Organisation name</label>
          <label>Contact name</label>
          <label>Address</label>
          <label>City</label>
          <label>Postcode</label>
          <label>Phone</label>
          <label>Email</label>

          <input
            type="text"
            value={this.state.inputvalue}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Register;
