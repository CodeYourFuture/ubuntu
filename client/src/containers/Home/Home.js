import React, { Component } from "react";
import "../App/App.css";
import Header from "../../components/Header/Header";
import * as api from "../../helpers/api";

class Home extends Component {
  state = {
    status: ""
  };

  componentDidMount() {
    api.getStatus().then(data => {
      this.setState({
        status: JSON.stringify(data)
      });
    });
  }
  render() {
    return (
      <div>
        <p className="app-intro">Welcome to Ubuntu Shelter for Women</p>
        <p>Status: {this.state.status} </p>
      </div>
    );
  }
}

export default Home;
