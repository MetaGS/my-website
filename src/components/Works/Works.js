import React from "react";
import PropTypes from "prop-types";
import work1 from "../../assets/work-1.png";
import work2 from "../../assets/work-2.png";
import work3 from "../../assets/work-3.png";
import work4 from "../../assets/work-4.png";

import "./Works.css";
import Container from "../Container";
import Title from "../Title";

const worksData = [
  {
    reverse: true,
    photo: work4,
    jobTitle: "T-Fit ltd..",
    yearsOfWork: "2020 - 2021",
  },
  {
    reverse: false,
    photo: work3,
    jobTitle: "МойКассир",
    yearsOfWork: "2020 - 2020",
  },
  {
    reverse: true,
    photo: work2,
    jobTitle: "Turan Group",
    yearsOfWork: "2018-2020",
  },
  {
    reverse: false,
    photo: work1,
    jobTitle: "Stu.Life",
    yearsOfWork: "2015-2016",
  },
];

const Works = ({ className }) => {
  return (
    <section className={`works ${className}`}>
      <Container className="works__container">
        <Title className="works__title">
          {["Works", "A showcase of Developer History"]}
        </Title>
        <div className="works__tree">
          {worksData.map(({ reverse, photo, jobTitle, yearsOfWork }) => {
            const style = {
              [reverse ? "left" : "right"]: "20%",
            };

            return (
              <div className="works__branch" style={style}>
                <div className="works__branch-cover">
                  <h1 className="works__branch-title">{jobTitle}</h1>
                  <p className="works__branch-years">{yearsOfWork}</p>
                </div>
                <img src={photo} alt="worked before in this company" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

Works.propTypes = {};

export default Works;
