import React from "react";
import classes from "./Logo.module.css";
import bgrLogo from "../../assets/image/burger-logo.png";

const logo = props => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height }}
    >
      <img src={bgrLogo} alt="My Burger" />
    </div>
  );
};

export default logo;
