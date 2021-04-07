import React from "react";
import PropTypes from "prop-types";
import WrapperWithFooter from "../../components/WrapperWithFooter";
import Contacts from "../../components/Contacts";

import "./ContactMe.css";
const ContactMe = (props) => {
  return (
    <WrapperWithFooter className="contact-me__wrapper ">
      <Contacts className="contact-me__contact"></Contacts>
    </WrapperWithFooter>
  );
};

ContactMe.propTypes = {};

export default ContactMe;
