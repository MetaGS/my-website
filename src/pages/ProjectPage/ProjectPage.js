import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import useGetOneProject from "../../firebase/hooks/useGetOneProject";
import useGetComments from "../../firebase/hooks/useGetComments";

import "./ProjectPage.css";
import Container from "../../components/Container";
import ProjectPhoto from "../../components/ProjectPhoto";
import { MainTitle, P } from "../../components/Title";
import DescriptionP from "../../components/DescriptionP";
import Footer from "../../components/Footer/Footer";
import WriteComment from "../../components/WriteComment";
import Caution from "../../components/Caution";
import ScrollToTop from "../../components/ScrollToTop";

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
  const { id } = useParams();
  const project = useGetOneProject(id);
  const comments = useGetComments(id);
  console.log(comments);
  const {
    title = "",
    description = "",
    links = [],
    photoUrls = [],
    progress = 0,
    steps = [],
    tags = [],
    isPrivate = false,
  } = project;

  console.log(project);

  return (
    <main className="project-pages">
      <ScrollToTop />
      <Container className="project-pages__container">
        <section className="project-pages__block project-pages__block1">
          <div className="project-pages__block1-left">
            <ProjectPhoto photos={photoUrls} />
          </div>
          <div className="project-pages__block1-right">
            <MainTitle className="project-pages__title">{title}</MainTitle>
            {isPrivate && (
              <Caution className="project-pages__caution">
                Due to the privacy the part or the full project can not be
                shown. For more information you can contact me. Anyway, detailed
                information can be given after project orderer allowance.
              </Caution>
            )}
            <ul className="project-pages__project-links">
              {Object.entries(links).map(([name, url], index) => {
                console.log(name);
                //multiplying to 30% of link block width, index+1 because index start from 0, so
                // 30 * 0 = 0, but I want first block to move 30%, 2nd to 60% etc
                const styles = {
                  transform: `translateX(${(index + 1) * 15}%)`,
                };
                if (!url) return null;

                return (
                  <li
                    className="project-pages__project-link"
                    style={styles}
                    key={name}
                  >
                    <a
                      href={url}
                      className={"project-pages__project-link-a"}
                      target="_blank"
                    >
                      <DescriptionP className="project-pages__project-link-text">
                        {name}
                      </DescriptionP>
                    </a>
                  </li>
                );
              })}
            </ul>
            <P className="project-pages__description">{description}</P>

            <div className="project-pages__progress-wrapper">
              <div className="project-pages__subtitle-wrapper">
                <MainTitle className="project-pages__subtitle">
                  progress
                </MainTitle>
                <span className="project-pages__percentage">{progress}%</span>
              </div>
              <div className="project-pages__progress-bar">
                <div
                  className="project-pages__progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="project-pages__block project-pages__block2">
          <div className="project-pages__steps-wrapper">
            <MainTitle className="project-pages__subtitle">Steps</MainTitle>
            <ul className="project-pages__steps">
              '
              {steps.map(({ name, done }) => {
                console.log(done);
                return (
                  <li className="project-pages__step">
                    <label className="project-pages__step-label">
                      <input
                        readOnly
                        type="checkbox"
                        className="project-pages__input"
                        checked={done}
                      />
                      <span className="project-pages__checkmark"></span>
                      <DescriptionP className="project-pages__step-name">
                        {name}
                      </DescriptionP>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="project-pages__block project-pages__block3">
          <div className="project-pages__commentary-wrapper commentary">
            <div className="commentary__write">
              <MainTitle className="project-pages__subtitle commentary-title">
                Write comment
              </MainTitle>
              <WriteComment projectId={id} />
            </div>
            <div className="commentary__comments">
              <MainTitle className="project-pages__subtitle commentary-title">
                Comments
              </MainTitle>

              {comments.map(({ name, text, createdTime, id }) => {
                return (
                  <div className="commentary__comment" key={id}>
                    <DescriptionP className="commentary__comment-name">
                      {name}
                    </DescriptionP>
                    <time className="commentary__comment-date">
                      {parseDate(createdTime.seconds)}
                    </time>
                    <P className="commentary__comment-text">{text}</P>
                  </div>
                );
              })}
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

function parseDate(seconds) {
  const time = new Date(null);
  time.setSeconds(seconds);
  console.log(time.getFullYear());
  return dateFormat(time, "fullDate");
}
