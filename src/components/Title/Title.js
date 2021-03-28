import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

export const H1 = ({ className = "", children = null, text = null }) => (
  <h1 className={`title__header ${className}`}>
    {children}
    {text}
  </h1>
);

export const P = ({ className = "", children = null, text = null }) => {
  return (
    <p className={`title__description ${className}`}>
      {children}
      {text}
    </p>
  );
};

export const TitleWrapper = ({ className = "", children, ...props }) => {
  return <div className={`title ${className}`}>{children}</div>;
};

const Title = ({ children = [0, 0], className }) => {
  return (
    <TitleWrapper className={className}>
      <H1>{children[0]}</H1>
      <P>{children[1]}</P>
    </TitleWrapper>
  );
};

export const MainTitle = ({ children, className = "" }) => {
  return <h2 className={`main-title ${className}`}>{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Title;
