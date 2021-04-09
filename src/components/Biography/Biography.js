import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import PropTypes from "prop-types";
import star from "../../assets/star.svg";

import "./Biography.css";
import Container from "../Container";
import Title from "../Title";
const Biography = (props) => {
  return (
    <Container className="biography__container">
      {/* <Title className="biography__header">
        {[
          "About Me",
          `
          Biography`,
        ]}
      </Title> */}
      <div className="biography__main-content">
        <nav className="biography__links-wrapper">
          <Title className="biography__title">
            {[
              "Munar Alymov",
              `
          Front-End Developer, ux designer I help designers, small agencies and
          businesses bring their ideas to life.`,
            ]}
          </Title>
          <ul className="biography__links">
            <li className="biography__link">
              <NavLink className="biography__navlink" to="/about">
                <h4 className="biography__link-title">About</h4>
                <img src={star} alt="" className="biography__link-icon" />
                <p className="biography__link-description">My Biography</p>
              </NavLink>
            </li>
            <li className="biography__link">
              <ScrollLink
                className="biography__navlink"
                to="main-works"
                smooth={true}
              >
                <h4 className="biography__link-title">WORK</h4>
                <img src={star} alt="" />
                <p className="biography__link-description">View Case Studies</p>
              </ScrollLink>
            </li>
            <li className="biography__link">
              <ScrollLink
                className="biography__link"
                to="main-contacts"
                smooth={true}
              >
                <h4 className="biography__link-title">CONTACT</h4>
                <img src={star} alt="" />
                <p className="biography__link-description">
                  Let's Get In Touch
                </p>
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <article className="biography__about">
          <header>
            <p className="biography__about-text">
              My name is Munarbek. My surname is Alymov. I was born in
              Kyrgyzstan. I am a web developer. More than 4 years of experience.
            </p>
            <p className="biography__about-text">
              I like challenges. It makes you better developer and improves
              skills. Challenges make you think critically, find alternative
              ways of solution. In future I plan to dive to Three.js world.
              Where will be a lot of new, and make me better programmer.
            </p>
            <p className="biography__about-text">
              I like read docs. In docs you can find subtle parts which is not
              covered in most tutorials. I spent about 3-4 to read docs. Most of
              the time a spent in mdn, javascript.info, w3schools and in other
              targeted libraries as react-spring and others...
            </p>
            <p className="biography__about-text">
              I prefer quality over speed. For it is better to make solid app,
              be in good relationship with customer and have long term
              cooperation, than destroying my reputation by delivering
              unfinished apps. Anyway we can not totally prevent bugs, so I try
              to maintain apps after delivery as well.
            </p>
          </header>
        </article>
      </div>
    </Container>
  );
};

Biography.propTypes = {};

export default Biography;
