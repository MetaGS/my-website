import React from "react";
import PropTypes from "prop-types";

import "./Achievements.css";
import DescriptionP from "../DescriptionP";
import { TitleWrapper, MainTitle, P } from "../Title";
const Achievements = (props) => {
  return (
    <div className="achievements">
      <TitleWrapper className="achievements__wrapper">
        <MainTitle className="achievements__title">My Achievements</MainTitle>
        <DescriptionP className="achievements__desc">
          Unless you were actively keeping track of your results at your job,
          you probably don’t know how much impact, exactly, did your work have.
        </DescriptionP>
        <div className="achievements__point-blocks">
          <div className="point-block__row">
            <div className="point-block point-block__1">
              <h4 className="point-block__point">4+</h4>
              <span className="point-block__title">Frameworks</span>
            </div>
            <div className="point-block point-block__2">
              <h4 className="point-block__point">5+</h4>
              <span className="point-block__title">Projects</span>
            </div>
          </div>
          <div className="point-block__row"></div>
          <div className="point-block point-block__3">
            <h4 className="point-block__point">4y.+</h4>
            <span className="point-block__title">experience</span>
          </div>
        </div>
      </TitleWrapper>
    </div>
  );
};

Achievements.propTypes = {};

export default Achievements;
