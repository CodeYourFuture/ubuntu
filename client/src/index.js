import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";

class RootApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={App} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<RootApp />, document.getElementById("root"));
