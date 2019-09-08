import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/Layout";
import "./App.css";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Search from "./containers/Search";
import Profile from "./containers/Profile";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          {/* <Redirect to="/search" /> */}
        </Switch>
      );
    }
    return (
      <div className="container">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(App);
