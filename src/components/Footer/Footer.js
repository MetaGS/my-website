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
          <a
            target="_blank"
            href="https://wa.me/+996555124717/?text=Hi,Munar! I got your number from your website."
            className="footer__link"
          >
            <FaWhatsappSquare />
          </a>
        </li>
        <li className="social-link">
          <a href="https://t.me/meta_gs" className="footer__link">
            <FaTelegram />
          </a>
        </li>
        <li className="social-link">
          <a
            href="https://linkedin.com/in/munar-alymov-b49184119"
            className="footer__link"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
