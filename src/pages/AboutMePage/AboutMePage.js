import React from "react";
import PropTypes from "prop-types";

import "./AboutMePage.css";
import Container from "../../components/Container/";
import { MainTitle } from "../../components/Title/";
import Skills from "../../components/Skills44/";
import Experience from "../../components/Experience/Experience";
import Achievements from "../../components/Achievements/Achievements";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const AboutMePage = (props) => {
  return (
    <main key="about-page" className="about-page">
      <ScrollToTop />
      <section className="about-page__block about-page__block1">
        <Container className="about-page__container">
          <MainTitle className="about-page__section-title">
            About msasdae{" "}
          </MainTitle>
          <Skills />
        </Container>
      </section>
      <section className="about-page__block about-page__block2">
        <Container className="about-page__container">
          <Experience />
        </Container>
      </section>
      <section className="about-page__block about-page__block3">
        <Container className="about-page__container">
          <Achievements />
        </Container>
      </section>
      <footer className="about-page__footer">
        <Footer />
      </footer>
    </main>
  );
};

AboutMePage.propTypes = {};

export default AboutMePage;
