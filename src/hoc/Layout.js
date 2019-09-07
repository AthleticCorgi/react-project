import React, { Component } from "react";
import NavigationItems from "../component/Navigation/NavigationItems";
import Aux from "./Auxiliary";

class Layout extends Component {
  state = {
    isAuthenticated: false
  };
  render() {
    return (
      <Aux>
        {/* <NavigationItems /> */}
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
