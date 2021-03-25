import React from "react";
import PropTypes from "prop-types";

import "./Container.css";
const Container = ({ children, className = "", style }) => {
  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {};

export default Container;
