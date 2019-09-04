import React, { component } from "react";
import Aux from "../Aux/Aux";

class Layout extends Component {
  state = {
    isAuthenticated: false
  };
  render() {
    return (
      <Aux>
        <NavigationItems />
        {this.props.children}
      </Aux>
    );
  }
}
export default Layout;
