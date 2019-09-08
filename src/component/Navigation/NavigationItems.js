import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import profile_pic from "../../assets/images/profile_pic.jpg";

const imgStyle = {
  height: "50px",
  width: "50px"
};
const navigationItems = props => (
  <ul className="nav justify-content-end">
    <li className="nav-item">
      <NavigationItem link="/profile">Projects</NavigationItem>
    </li>
    <li className="nav-item">
      <NavigationItem link="/profile">
        <img
          className="rounded-circle"
          src={profile_pic}
          alt="Hi"
          style={imgStyle}
        />
      </NavigationItem>
    </li>
  </ul>
);
export default navigationItems;
