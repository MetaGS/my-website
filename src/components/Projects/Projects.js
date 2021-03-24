import React from "react";
import PropTypes from "prop-types";
import { limitText } from "../../utils/limitText";

import RotateCube from "../RotateCube/RotateCube";
import BlockDescription from "../BlockDescription";
import "./Projects.css";
import projectsData from "./data";
import Container from "../Container";

const Projects = ({ children, className = "", ...props }) => {
  const handleProjectNumber = (projectNumber) => {
    if (isNaN(projectNumber)) return "00";
    if (projectNumber < 10) return `0${projectNumber}`;
  };

  return (
    <section className={`projects ${className}`}>
      <Container className="projects__container">
        <div className="projects__description">
          <BlockDescription />
        </div>
        <div className="projects__block">
          <RotateCube>
            {projectsData.map(({ name, photo, description }, index) => {
              const number = projectsData.length - index;

              return (
                <article className="projects__project project">
                  <h3 className="project__title">
                    <span className="project__title-number">
                      {handleProjectNumber(number)}
                    </span>
                    <span className="project__title-text">{name}</span>
                  </h3>
                  {/* <img className="project__photo" src={photo}></img> */}
                  <p className="project__description">
                    {limitText(description, 120)}
                  </p>
                </article>
              );
            })}
          </RotateCube>
        </div>
      </Container>
    </section>
  );
};

Projects.propTypes = {};

export default Projects;
