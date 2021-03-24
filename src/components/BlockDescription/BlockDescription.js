import React from "react";
import PropTypes from "prop-types";
import "./BlockDescription.css";
const BlockDescription = (props) => {
  return (
    <div className="block-desc">
      <span
        className="block-desc__decor block-desc__decor1 "
        aria-label="decorative block"
      ></span>
      <span
        className="block-desc__decor block-desc__decor2 "
        aria-label="decorative block"
      ></span>
      <span
        className="block-desc__decor block-desc__decor3"
        aria-label="decorative block"
      ></span>
      <span
        className="block-desc__decor block-desc__decor4"
        aria-label="decorative block"
      ></span>
      <span
        className="block-desc__decor block-desc__decor5"
        aria-label="decorative block"
      ></span>
      <h3 className="block-desc__title">Projects</h3>
    </div>
  );
};

BlockDescription.propTypes = {};

export default BlockDescription;
