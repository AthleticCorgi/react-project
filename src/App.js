import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import "./App.css";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
    return (
      <div className="container">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
