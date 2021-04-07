import React from "react";
import PropTypes from "prop-types";
import { Element as ScrollElement } from "react-scroll";

import "./Main.css";
import Container from "../../components/Container";
import RotateCube from "../../components/RotateCube/RotateCube";
import ChooseCube from "../../components/CheckTransform/CheckTransform";
import Biography from "../../components/Biography";
import Projects from "../../components/Projects";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Works from "../../components/Works/Works";

const Main = (props) => {
  return (
    <main className="main-page">
      <section className="main-page__block main-page__first-block">
        <Container className="main-page__container">
          <section className="main-page__right">
            <div>
              <div>
                <span className="subtitle__text subtitle ">web developer</span>
              </div>
            </div>
            {/* <RotateCube className="main-page__rotate-cube" /> */}
            <ChooseCube />
          </section>
        </Container>
      </section>
      <section className="main-page__block main-page__second-block">
        <Biography />
      </section>
      <section className="main-page__block main-page__third-block">
        <Projects />
      </section>
      <ScrollElement
        name="main-works"
        className="main-page__block main-page__fourth-block"
      >
        <Works />
      </ScrollElement>
      <ScrollElement
        name="main-contacts"
        className="main-page__block main-page__third-block"
      >
        <Contacts />
      </ScrollElement>

      <footer className="main-page__footer">
        <Footer />
      </footer>
    </main>
  );
};

Main.propTypes = {};

export default Main;
