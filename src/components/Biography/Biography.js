import React from "react";
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
          <Title>
            {[
              "Munar Alymov",
              `
          Front-End Developer, ux designer I help designers, small agencies and
          businesses bring their ideas to life.`,
            ]}
          </Title>
          <ul className="biography__links">
            <li className="biography__link">
              <h4 className="biography__link-title">About</h4>
              <img src={star} alt="" className="biography__link-icon" />
              <p className="biography__link-description">My Biography</p>
            </li>
            <li className="biography__link">
              <h4 className="biography__link-title">WORK</h4>
              <img src={star} alt="" />
              <p className="biography__link-description">View Case Studies</p>
            </li>
            <li className="biography__link">
              <h4 className="biography__link-title">CONTACT</h4>
              <img src={star} alt="" />
              <p className="biography__link-description">Let's Get In Touch</p>
            </li>
          </ul>
        </nav>
        <article className="biography__about">
          <header>
            <p className="biography__about-text">
              My name is Munarbek. My surname is Alymov. I was born in
              Kyrgyzstan. I live in a small town Osh in the . My address is Flat
              116, 19, Pionerskaya Street. My phone number is 41-5-81. I am a
              pupil. I go to school Number 1. I am a good pupil. I do well in
              all subjects. They say that I am a hard-working person. To tell
              the truth, all school subjects come easy to me but sometimes I
              have to work long hours, for example, to do lessons in Physics or
              Chemistry, to write a composition or to learn a poem by heart. But
              my favourite subject is English. I spend a lot of time on it
              reading books, doing tests etc. Maybe English and learning it will
              be a part of my future carreer. I like reading. I think comics and
              detective stories are much easier to read but I prefer to read
              novels - historical or
            </p>
          </header>
        </article>
      </div>
    </Container>
  );
};

Biography.propTypes = {};

export default Biography;
