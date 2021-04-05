import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/gorilla.svg";

import "./Navbar.css";
import Container from "../Container";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Container className="navbar__container">
        <div className="navbar__left-block">
          <NavLink className="navbar__router-link" to="/">
            <div className="navbar__logo">
              <Logo className="navbar__logo-svg" />
              <div>
                <span className="navbar__logo-bold">MUNAR</span>
                <br />
                <span className="navbar__logo-light">ALYMOv</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="navbar__right-block">
          <ul className="navbar__links">
            <li className="navbar__link navbar__link--lower">Github</li>
            <li className="navbar__link navbar__link--lower">LinkedIn</li>
            <li className="navbar__link navbar__link--lower">Blog</li>
            <li className="navbar__link navbar__link--lower">about me</li>
            <li className="navbar__link">Contact Me</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
