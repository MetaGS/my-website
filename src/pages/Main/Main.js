import React from "react";
import PropTypes from "prop-types";

import "./Main.css";
import Container from "../../components/Container";
import RotateCube from "../../components/RotateCube/RotateCube";
import ChooseCube from "../../components/CheckTransform/CheckTransform";
const Main = (props) => {
  return (
    <div className="main-page">
      <section className="main-page__block main-page__first-block">
        <Container className="main-page__container">
          <section className="main-page__right">
            {/* <RotateCube className="main-page__rotate-cube" /> */}
            <ChooseCube />
          </section>
        </Container>
      </section>
    </div>
  );
};

Main.propTypes = {};

export default Main;
