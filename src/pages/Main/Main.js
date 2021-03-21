import React from "react";
import PropTypes from "prop-types";

import "./Main.css";
import Container from "../../components/Container";
import RotateCube from "../../components/RotateCube/RotateCube";
const Main = (props) => {
  return (
    <div className="main-page">
      <section className="main-page__block main-page__first-block">
        <Container className="main-page__container">
          <article className="main-page__left">
            <h1 className="main-page__title title">
              <span>Hi, I'm</span> {<br />}{" "}
              <span className="main-page__name">Munarbek Alymov</span>
            </h1>
            <div className="main-page__subtitle subtitle">
              <span className="subtitle__text">Front-end developer</span>
            </div>
            <p className="main-page__description description">
              It is my personal website, here i post what I do sometimes, also
              you can see projects in which i work, or already finished
            </p>
          </article>
          <section className="main-page__right">
            <RotateCube className="main-page__rotate-cube" />
          </section>
        </Container>
      </section>
    </div>
  );
};

Main.propTypes = {};

export default Main;
