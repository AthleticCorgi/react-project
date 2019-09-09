import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/Layout";
import "./App.css";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Search from "./containers/Search";
import Profile from "./containers/Profile";
import * as actions from "./store/actions/index";
import classes from "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className={classes.gradient}>
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
