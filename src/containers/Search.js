import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../store/actions/index";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    let logout = null;
    if (this.props.isAuthenticated) {
      logout = () => {
        this.props.onLogout();
      };
    }
    return (
      <div>
        <p>Search pages works!</p>
        <button className="btn btn-primary" onClick={logout}>
          logout
        </button>
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
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
