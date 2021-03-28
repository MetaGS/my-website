import React from "react";
import PropTypes from "prop-types";

import "./ProjectPages.css";
import Container from "../../components/Container";
import ProjectPhoto from "../../components/ProjectPhoto";
import { MainTitle, P } from "../../components/Title";
import DescriptionP from "../../components/DescriptionP";
import Footer from "../../components/Footer/Footer";

const projectLinks = [
  {
    name: "github",
    url: "github/metags",
  },
  {
    name: "see psd ",
    url: "github/metags",
  },
  {
    name: "see online",
    url: "github/metags",
  },
];

const ProjectPage = (props) => {
  return (
    <main className="project-pages">
      <Container className="project-pages__container">
        <section className="project-pages__block project-pages__block1">
          <div className="project-pages__block1-left">
            <ProjectPhoto />
          </div>
          <div className="project-pages__block1-right">
            <MainTitle className="project-pages__title">
              T-FIT ONLINE store
            </MainTitle>
            <ul className="project-pages__project-links">
              {projectLinks.map(({ name, url }, index) => {
                //multiplying to 30% of link block width, index+1 because index start from 0, so
                // 30 * 0 = 0, but I want first block to move 30%, 2nd to 60% etc
                const styles = {
                  transform: `translateX(${(index + 1) * 15}%)`,
                };

                return (
                  <li className="project-pages__project-link" style={styles}>
                    <DescriptionP className="project-pages__project-link-text">
                      {name}
                    </DescriptionP>
                  </li>
                );
              })}
            </ul>
            <P className="project-pages__description">
              This project was ordered by the small business called t-fit. the
              slogan of the company - “Make the Stylish affordable”
            </P>

            <div className="project-pages__progress-wrapper">
              <div className="project-pages__subtitle-wrapper">
                <MainTitle className="project-pages__subtitle">
                  progress
                </MainTitle>
                <span className="project-pages__percentage">80%</span>
              </div>
              <div className="project-pages__progress-bar">
                <div
                  className="project-pages__progress"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="project-pages__block project-pages__block2">
          <div className="project-pages__steps-wrapper">
            <MainTitle className="project-pages__subtitle">Steps</MainTitle>
            <ul className="project-pages__steps">
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
              <li className="project-pages__step">
                <label className="project-pages__step-label">
                  <input type="checkbox" className="project-pages__input" />
                  <span className="project-pages__checkmark"></span>
                  <DescriptionP className="project-pages__step-name">
                    Stigma
                  </DescriptionP>
                </label>
              </li>
            </ul>
          </div>
        </section>
        <section className="project-pages__block project-pages__block3">
          <div className="project-pages__commentary-wrapper commentary">
            <div className="commentary__write">
              <MainTitle className="project-pages__subtitle commentary-title">
                Write comment
              </MainTitle>

              <form className="commentary__inputs">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="commentary__input commentary__input-name"
                />
                <textarea
                  type="text"
                  placeholder="Enter Text"
                  className="commentary__input commentary__input-text"
                ></textarea>
                <button
                  type="submit"
                  className="commentary__input commentary__input-submit"
                >
                  submit
                </button>
              </form>
            </div>
            <div className="commentary__comments">
              <MainTitle className="project-pages__subtitle commentary-title">
                Comments
              </MainTitle>
              <div className="commentary__comment">
                <DescriptionP className="commentary__comment-name">
                  Joldoshbek Sarygulov
                </DescriptionP>
                <date className="commentary__comment-date">12.02.2021</date>
                <P className="commentary__comment-text">
                  This is Commentary for the my website “commentary” block and
                  should be written first. lorem ipsum and then goes here.
                </P>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Container>
        <footer>
          <Footer />
        </footer>
      </Container>
    </main>
  );
};

ProjectPage.propTypes = {};

export default ProjectPage;
