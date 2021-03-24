import React from "react";
import PropTypes from "prop-types";
import {
  BsPencilSquare,
  BsPersonFill,
  BsPersonLinesFill,
  BsPersonSquare,
} from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import { FiMail } from "react-icons/fi";
// import {}

import "./Contacts.css";
import Container from "../Container/Container";
import Title from "../Title";
const Contacts = ({ className }) => {
  return (
    <section className={`contacts-block`}>
      <Container className="contacts-block__container">
        <article className="contacts-block__contacts-wrapper">
          <Title>
            {[
              "Contact",
              "Contact Me Anytime, if you want professional projects",
            ]}
          </Title>
          <ul className="contacts-block__contacts">
            <li className="contacts-block__contact">Munar Alymov</li>
            <li className="contacts-block__contact">
              marketdeal7788@gmail.com
            </li>
            <li className="contacts-block__contact">+996990127854</li>
            <li className="contacts-block__contact">+996555124717</li>
            <li className="contacts-block__contact">
              Bishkek, Kyrgyz Republic
            </li>
          </ul>
        </article>
        <form className="contacts-block__form form">
          <div className="form__input-wrapper">
            <BsPersonFill className="form__icon" />
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Your Name"
            />
          </div>
          <div className="form__input-wrapper">
            <FiMail className="form__icon form__icon-mail" />
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Your Email"
            />
          </div>
          <div className="form__input-wrapper form__input-wrapper3">
            <BsPencilSquare className="form__icon form__icon-text" />
            <textarea
              placeholder="Your Message"
              type="text"
              name="name"
              className="form__input form__textarea"
            />
          </div>
          <div className="form__input-wrapper">
            <button className="btn contacts-block__submit">Submit</button>
          </div>
        </form>
      </Container>
    </section>
  );
};

Contacts.propTypes = {};

export default Contacts;
