import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./RotateCube.css";

const initialSpin = [
  {
    transform: "translateX(10%) translateZ(-10%)",
  },
];

const RotateCube = (props) => {
  const [spinner, setSpinner] = useState({
    z: { value: -200, direction: "back" },
    x: { value: 0, direction: "forward" },
  });

  const [radian, setRadian] = useState(0);

  useEffect(() => {
    const startAnimation = () => {
      const animationInterval = setInterval(spin, 100);
      setTimeout(() => {
        console.log("cleared");
        clearInterval(animationInterval);
      }, 500);
    };
    const threeSecondsInterval = setInterval(startAnimation, 5000);

    return () => {
      clearInterval(threeSecondsInterval);
    };
  }, []);

  //determine new position based on +100 -100, so when reached > reverse;
  const checkAndChangePositionZ = ({ value, direction }) => {
    let newValue;
    let newDirection = direction;
    if (direction === "forward") {
      if (value < 100) {
        newValue = value + 10;
      } else {
        newDirection = "back";
        newValue = value - 10;
      }

      return { value: newValue, direction: newDirection };
    } else {
      if (value > -400) {
        newValue = value - 10;
      } else {
        newValue = value + 10;
        newDirection = "forward";
      }

      return { value: newValue, direction: newDirection };
    }
  };
  const checkAndChangePositionX = ({ value, direction }) => {
    let newValue;
    let newDirection = direction;
    if (direction === "forward") {
      if (value < 200) {
        newValue = value + 5;
      } else {
        newDirection = "back";
        newValue = value - 5;
      }

      return { value: newValue, direction: newDirection };
    } else {
      if (value > -200) {
        newValue = value - 5;
      } else {
        newValue = value + 5;
        newDirection = "forward";
      }

      return { value: newValue, direction: newDirection };
    }
  };

  const translations = {
    transform: `translateZ(${spinner.z.value}px) translateX(${spinner.x.value}px)`,
  };

  const spin = () => {
    setSpinner((spinner) => {
      const { z, x } = spinner;
      console.log(z, x);
      const newZ = checkAndChangePositionZ(z);
      const newX = checkAndChangePositionX(x);
      return { x: newX, z: newZ };
    });
  };

  return (
    <div className="rotate-cube-main">
      <div className="cube__rotate">
        <div className="cube-self" style={translations}></div>
      </div>
    </div>
  );
};

RotateCube.propTypes = {};

export default RotateCube;
