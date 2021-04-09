import React from "react";
import PropTypes from "prop-types";
import useWindowWidth from "../../hooks/useWindowWidth";

import "./Experience.css";
import WhiteBlockWrapper from "../WhiteBlockWrapper/WhiteBlockWrapper";
import DescriptionP from "../DescriptionP";

const experienceData = [
  {
    text:
      "Turan Group companies app. First Big app. MySQL interaction with express.js. HTTP headers",
    reverse: true,
  },
  {
    text:
      "T-Fit. e-commerce app. Have built the backend and frontend. Backend built with Firebase.",
    reverse: false,
  },
  {
    text:
      "My Cashier app. Helped to build to startup the frontend to scan QR codes by mobile devices.",
    reverse: true,
  },
  {
    text:
      "Canvas. I have experience in building games (2D) in canvas context. ",
    reverse: false,
  },
];

const Experience = (props) => {
  const width = useWindowWidth();

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
          let shiftLeft = 40,
            shiftRight = 40;
          if (width < 600) {
            shiftLeft = 10;
          }
          const translateX = reverse
            ? `translateX(-${shiftLeft}%)`
            : "translateX(40%)";
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
