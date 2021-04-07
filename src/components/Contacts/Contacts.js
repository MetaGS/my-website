import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import addMessage from "../../firebase/firestore";
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
import Title, { MainTitle } from "../Title";
import useFormInput from "../../hooks/useFormInput";

const recaptchaKey = "6LfxOpIaAAAAAPakUxYx65NQ4pVLRUCFvFI425Ip";
const Contacts = ({ className }) => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitText, setSubmitText] = useState(
    "Thank you! Your message was sent."
  );
  const [timeouts, setTimeouts] = useState([]);

  const userName = useFormInput("");
  const userEmail = useFormInput("");
  const userText = useFormInput("");

  useEffect(() => {
    return () => {
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setShowCaptcha(true);
    }
  };

  const onCaptchaChange = (token) => {
    if (token) {
      setCaptchaToken(token);
      setShowCaptcha(false);

      setSubmitting(true);

      addMessage({
        token: token,
        name: userName.value,
        email: userEmail.value,
        text: userText.value,
      }).then((response) => {
        if (response.ok) {
          console.log("submitted");
        } else {
          setSubmitText("Something went wrong");
          const timeout = setTimeout(() => {
            setSubmitted(false);
          }, 3000);

          setTimeout([...timeouts, timeout]);
        }

        setSubmitted(true);
        setSubmitting(false);
      });
    } else {
      setCaptchaToken(null);
    }
  };

  const recaptcha = (
    <ReCAPTCHA
      sitekey={recaptchaKey}
      onChange={onCaptchaChange}
      className="google-recaptcha"
    />
  );

  const submitButtonStyle = {
    backgroundColor: captchaToken ? "green" : "transparent",
  };

  return (
    <section className={`contacts-block `}>
      <Container className={`contacts-block__container ${className}`}>
        <article className="contacts-block__contacts-wrapper">
          <Title className="contacts-block__title">
            {[
              "Contact",
              "Contact Me Anytime, if you want professional projects",
            ]}
          </Title>
          <ul className="contacts-block__contacts">
            <li className="contacts-block__contact">Munar Alymov</li>
            <li className="contacts-block__contact">
              <a
                href="emailto:marketdeal7788@gmail.com"
                className="contacts-block__link"
                target="_blank"
              >
                marketdeal7788@gmail.com
              </a>
            </li>
            <li className="contacts-block__contact">
              <a
                target="_blank"
                href="https://wa.me/+996555124717/?text=Hi,Munar! I got your number from your website."
                className="contacts-block__link"
              >
                +996555124717 (WhatsApp)
              </a>
            </li>
            <li className="contacts-block__contact">
              Bishkek, Kyrgyz Republic
            </li>
          </ul>
        </article>
        {submitted && (
          <div className="contacts-block__submitted-wrapper">
            <MainTitle className="contacts-block__submitted">
              {submitText}
            </MainTitle>
          </div>
        )}
        {!submitted && (
          <form className="contacts-block__form form" onSubmit={onSubmit}>
            <div className="form__input-wrapper">
              <BsPersonFill className="form__icon" />
              <input
                type="text"
                name="name"
                minLength="2"
                value={userName.value}
                onChange={userName.onChange}
                className="form__input"
                name="user-name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form__input-wrapper">
              <FiMail className="form__icon form__icon-mail" />
              <input
                type="email"
                required
                name="user-email"
                value={userEmail.value}
                onChange={userEmail.onChange}
                className="form__input"
                placeholder="Your Email"
              />
            </div>
            <div className="form__input-wrapper form__input-wrapper3">
              <BsPencilSquare className="form__icon form__icon-text" />
              <textarea
                placeholder="Your Message"
                required
                type="text"
                value={userText.value}
                onChange={userText.onChange}
                name="uset-text"
                className="form__input form__textarea"
              />
            </div>
            <div className="form__input-wrapper form-input-submit-wrapper">
              {showCaptcha && recaptcha}
              {!submitting && (
                <button
                  type="submit"
                  style={submitButtonStyle}
                  className="btn contacts-block__submit"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </Container>
    </section>
  );
};

Contacts.propTypes = {};

export default Contacts;
