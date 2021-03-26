import React from "react";
import PropTypes from "prop-types";

import "./DescriptionP.css";
const DescriptionP = ({ className = "", children, ...props }) => {
  return (
    <p className={`description-p ${className}`} {...props}>
      {children}
    </p>
  );
};

DescriptionP.propTypes = {};

export default DescriptionP;
