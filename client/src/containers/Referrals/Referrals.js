import React, { Component } from "react";
import * as api from "../../helpers/api";
import "./Referrals.css";

class Referrals extends Component {
  state = {
    referrals: []
  };
  componentDidMount() {
    api.getReferrals().then(data => {
      this.setState({
        referrals: data
      });
    });
  }
  render() {
    return (
      <div>
        <h1>List of referrals</h1>
        <div class="referrals-container">
          {this.state.referrals.map(referral => {
            return (
              <div className="referral-info">
                <h3>{referral.name}</h3>
                <p>{referral.city}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Referrals;
