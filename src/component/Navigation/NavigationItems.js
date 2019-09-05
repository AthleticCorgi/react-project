import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className="nav justify-content-end">
    <li className="nav-item">
      <NavigationItem link="/" exact>
        Log in
      </NavigationItem>
    </li>
    <li className="nav-item">
      <NavigationItem link="/signup">Sign up</NavigationItem>
    </li>
  </ul>
);
export default navigationItems;
