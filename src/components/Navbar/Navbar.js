import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/gorilla.svg";

import "./Navbar.css";
import Container from "../Container";
import { NavLink } from "react-router-dom";

const scrollLinks = ["#main-contacts"];

const Navbar = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  console.log(scrollLinks.includes(location.hash));

  const [sidebar, setSidebar] = useState(false);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = (e) => {
      setWindowScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollLinks.includes(location.hash)) {
      console.log("it runs");
      scroller.scrollTo("main-contacts", {
        smooth: true,
      });
    }
  }, [location.pathname]);

  const sidebarClick = (e) => {
    setSidebar(!sidebar);
  };

  const linkClick = (e) => {
    const isLink = e.target.className.includes("navbar__navlink");
    if (isLink) {
      setSidebar(false);
    }
  };

  const onContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scroller.scrollTo("main-contacts", {
        smooth: true,
      });
    } else {
      history.push("/#main-contacts");
    }
  };

  const navbarBlack = windowScrollY > 50 ? "navbar--black" : "";
  const sidebarOpenClass = sidebar ? "open" : "";
  const [activeLinkClassName, setActiveLinkClassName] = useState("");

  return (
    <nav className={`navbar ${navbarBlack}`}>
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
        <div className={`navbar__right-block sidebar ${sidebarOpenClass}`}>
          <ul className="navbar__links sidebar__links" onClick={linkClick}>
            <li className="navbar__link navbar__link--lower sidebar__link">
              <a
                href="https://github.com/MetaGS"
                target="_blank"
                className="navbar__navlink"
              >
                Github
              </a>
            </li>
            <li className="navbar__link navbar__link--lower sidebar__link">
              <a
                href="https://linkedin.com/in/munar-alymov-b49184119"
                className="navbar__navlink"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="navbar__link navbar__link--lower sidebar__link">
              <NavLink
                className="navbar__navlink"
                to="/about"
                activeClassName="navbar__navlink--active"
              >
                about me
              </NavLink>
            </li>
            <li className="navbar__link">
              <a
                className={`navbar__navlink ${activeLinkClassName}`}
                onClick={onContactClick}
                to="/contact-me"
                activeClassName="navbar__navlink--active"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`navbar__burger ${sidebarOpenClass}`}
          onClick={sidebarClick}
        >
          <span className={`navbar__burger-line ${sidebarOpenClass}`}>
            <span
              className={`navbar__burger-line-mid ${sidebarOpenClass}`}
            ></span>
          </span>
        </div>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
