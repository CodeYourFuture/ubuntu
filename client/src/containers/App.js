import React, { Component } from "react";
import "./App.css";
import "../components/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p className="app-intro">Welcome to Ubuntu Shelter for Women</p>
      </div>
    );
  }
}

export default App;
