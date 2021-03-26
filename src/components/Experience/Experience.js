import React from "react";
import PropTypes from "prop-types";

import "./Experience.css";
import WhiteBlockWrapper from "../WhiteBlockWrapper/WhiteBlockWrapper";
import DescriptionP from "../DescriptionP";

const experienceData = [
  {
    text:
      "Recommendation from Dark Side Laboratories specialist: for better results use our protein between",
    reverse: true,
  },
  {
    text:
      "Recommendation from Dark Side Laboratories specialist: for better results use our protein between",
    reverse: false,
  },
  {
    text:
      "Recommendation from Dark Side Laboratories specialist: for better results use our protein between",
    reverse: true,
  },
  {
    text:
      "Recommendation from Dark Side Laboratories specialist: for better results use our protein between",
    reverse: false,
  },
];

const Experience = (props) => {
  return (
    <div className="experience__wrapper">
      <div className="experience__title">
        {/* <h1>Lorem Ipsum Vitae Means</h1> */}
      </div>
      <WhiteBlockWrapper
        reverse
        title="experience"
        titleClass="experience__white-block-title"
        className="experience__white-block"
      >
        {experienceData.map(({ text, reverse }) => {
          const translateX = reverse ? "translateX(-40%)" : "translateX(40%)";
          const styles = {
            transform: translateX,
          };

          return (
            <DescriptionP className="experience__text" style={styles}>
              {text}
            </DescriptionP>
          );
        })}
      </WhiteBlockWrapper>
    </div>
  );
};

Experience.propTypes = {};

export default Experience;
