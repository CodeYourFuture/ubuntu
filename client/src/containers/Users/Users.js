import React, { Component } from "react";
import * as api from "../../helpers/api";
import "./Users.css";

class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    api.getUsers().then(data => {
      this.setState({
        users: data
      });
    });
  }
  render() {
    return (
      <div>
        <h1>List of Users</h1>
        <div class="users-container">
          {this.state.users.map(user => {
            return (
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.city}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
