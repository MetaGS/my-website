import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";

import "./WrapperWithFooter.css";
const Main = ({ className, children }) => {
  return (
    <>
      <main className={`wrapper-with-footer ${className}`}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

Main.propTypes = {};

export default Main;
