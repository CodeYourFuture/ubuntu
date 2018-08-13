import React, { Component } from "react";
import * as api from "../../helpers/api";

class Addresses extends Component {
  state = {
    addresses: []
  };
  componentDidMount() {
    api.getAddresses().then(data => {
      this.setState({
        addresses: data
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Addresses</h1>
        <div class="addresses_list">
          {this.state.addresses.map(address => {
            return (
              <div className="addresses">
                <p>{address.House_number}</p>
                <p>{address.Street_name}</p>
                <p>{address.City}</p>
                <p>{address.Postcode}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Addresses;
