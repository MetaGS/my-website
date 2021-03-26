import React from "react";
import PropTypes from "prop-types";
import "./WhiteBlockWrapper.css";
const WhiteBlockWrapper = ({
  title = "",
  children,
  className = "",
  reverse = false,
  titleClass = "",
}) => {
  const wrapperInlineStyles = {
    [reverse ? "paddingRight" : "paddingLeft"]: "10000px",
    [reverse ? "marginRight" : "marginLeft"]: "-10000px",
  };
  return (
    <div className={`white-wrapper ${className}`} style={wrapperInlineStyles}>
      <h3 className={`white-wrapper__title ${titleClass}`}>{title}</h3>
      {children}
    </div>
  );
};

WhiteBlockWrapper.propTypes = {};

export default WhiteBlockWrapper;
