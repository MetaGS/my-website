import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { limitText } from "../../utils/limitText";
import { Link } from "react-router-dom";

import RotateCube from "../RotateCube/RotateCube";
import BlockDescription from "../BlockDescription";
import "./Projects.css";
import projectsData from "./data";
import Container from "../Container";
import getProjects from "../../firebase/firestore/getProjects";
import useGetProjects from "../../firebase/hooks/useGetProjects";

const handleProjectNumber = (projectNumber) => {
  if (isNaN(projectNumber)) return "00";
  if (projectNumber < 10) return `0${projectNumber}`;
};

const Projects = ({ children, className = "", ...props }) => {
  const history = useHistory();
  let projects = useGetProjects();
  // projects = projects.slice().reverse();

  // projects.sort((a, b) => {
  //   if (a.createdTime.seconds < b.createdTime.seconds) return -1;
  // });
  // projects.reverse();

  return (
    <section className={`projects ${className}`}>
      <Container className="projects__container">
        <div className="projects__description">
          <BlockDescription />
        </div>
        <div className="projects__block">
          {projects.length > 0 && (
            <RotateCube>
              {projects.map(({ title, photoUrls, description, id }, index) => {
                const number = projectsData.length - index;
                const activeClass = "";
                // return (active) => {
                //   const activeClass = active ? "active" : "";
                return (
                  <article
                    className="projects__project project"
                    // onClick={(e) => {
                    //   if (active) {
                    //     history.push(`/projects/${id}`);
                    //   }
                    // }}
                  >
                    <h3 className={`project__title`}>
                      <span className="project__title-number">
                        {handleProjectNumber(number)}
                      </span>
                      <span className={`project__title-text ${activeClass}`}>
                        {title}
                      </span>
                    </h3>
                    {/* <img className="project__photo" src={photo}></img> */}
                    <p className={`project__description ${activeClass}`}>
                      {limitText(description, 120)}
                    </p>
                  </article>
                );
                // };
              })}
            </RotateCube>
          )}
        </div>
      </Container>
    </section>
  );
};

Projects.propTypes = {};

export default Projects;
