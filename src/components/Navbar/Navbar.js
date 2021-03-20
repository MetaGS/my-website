import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/gorilla.svg";

import "./Navbar.css";
import Container from "../Container";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Container className="navbar__container">
        <div className="navbar__left-block">
          <div className="navbar__logo">
            <Logo className="navbar__logo-svg" />
            <div>
              <span className="navbar__logo-bold">MUNAR</span>
              <br />
              <span className="navbar__logo-light">ALYMOV</span>
            </div>
          </div>
        </div>
        <div className="navbar__right-block">
          <ul className="navbar__links">
            <li className="navbar__link">Github</li>
            <li className="navbar__link">LinkedIn</li>
            <li className="navbar__link">Blog</li>
            <li className="navbar__link">Contact Me</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
