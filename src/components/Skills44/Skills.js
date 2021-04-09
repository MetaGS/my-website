import React from "react";
import PropTypes from "prop-types";

import WhiteBlockWrapper from "../WhiteBlockWrapper/WhiteBlockWrapper";
import "./Skills.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiJavascript } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const Skills = (props) => {
  return (
    <WhiteBlockWrapper className="skills__white-block" title="skills">
      <div className="skills__body">
        <div className="skills__icons">
          <SiJavascript className="skills__icon" />
          <FaReact className="skills__icon" />
          <IoLogoHtml5 className="skills__icon" />
          <IoLogoCss3 className="skills__icon" />
          <SiFirebase className="skills__icon" />
          <CgFigma className="skills__icon" />
        </div>
        <div className="skills__description">
          <p>
            Experienced in JavaScript. Love React, the way it makes easy to
            control app by splitting difficult to more simpler parts. I have
            very good experience in HTML and CSS. In my projects I write all css
            and jsx by myself. Try to follow accessability and semantic rules.
            Have experience in Figma and in Express.js and Node.js. Sharpening
            Firebase and build few projects on that already.
          </p>
        </div>
      </div>
    </WhiteBlockWrapper>
  );
};

Skills.propTypes = {};

export default Skills;
