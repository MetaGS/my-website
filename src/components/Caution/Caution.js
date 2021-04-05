import React from "react";
import PropTypes from "prop-types";

import "./Caution.css";
const Caution = ({ className, children, ...props }) => {
  return <p className={`caution-message ${className}`}>{children}</p>;
};

Caution.propTypes = {};

export default Caution;
