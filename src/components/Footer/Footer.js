import React from "react";
import PropTypes from "prop-types";
import { FaWhatsappSquare, FaTelegram, FaLinkedin } from "react-icons/fa";

import "./Footer.css";
import Container from "../Container";
const Footer = (props) => {
  return (
    <Container className="footer__container">
      <ul className="social-links">
        <li className="social-link">
          <FaWhatsappSquare />
        </li>
        <li className="social-link">
          <FaTelegram />
        </li>
        <li className="social-link">
          <FaLinkedin />
        </li>
      </ul>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
