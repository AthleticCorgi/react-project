import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationItems from "../component/Navigation/NavigationItems";
import Aux from "./Auxiliary";

class Layout extends Component {
  render() {
    const nav = this.props.isAuthenticated ? <NavigationItems /> : null;
    return (
      <Aux>
        {nav}
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(Layout);
