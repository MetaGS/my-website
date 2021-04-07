import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import PropTypes from "prop-types";
import "./RotateCube.css";

const itemsToSpin = [
  "wahaha how are you",
  "make it real",
  "is everything is alright",
  "how Are you",
  "BRother",
];

const genuineRadian = 6.28319;

const RotateCube = ({ children = itemsToSpin, className = "" }) => {
  const permamentRadian = genuineRadian / children.length;
  const [radian, setRadian] = useState(0);
  const spinRadian = radian + permamentRadian;

  const initialSpin = children.map((item, index) => {
    const itemRadian = permamentRadian * index;
    const changeRadian = genuineRadian - itemRadian;
    return { x: 0, z: 0, itemRadian, changeRadian, id: item.id };
  });
  const [spinner, setSpinner] = useState(initialSpin);
  // const [canSpin, setCanSpin] = useState(true);

  useEffect(() => {
    setRadian(radian + permamentRadian);
    // const threeSecondsInterval = setInterval(() => {
    //   setRadian((radian) => {
    //     const newRadian = radian + permamentRadian;
    //     return newRadian;
    //   });
    // }, 8000);
    return () => {
      // clearInterval(threeSecondsInterval);
    };
  }, []);

  const clickOnBlock = (changeRadian) => {
    // setCanSpin(false);
    setRadian((prevRad) => {
      return changeRadian;
    });
  };

  const checkAndChangePositionZ = (radian) => {
    const cos = Math.cos(radian) * 1000 - 1000;
    return cos.toFixed();
  };
  const checkAndChangePositionX = (radian) => {
    const sin = Math.sin(radian) * 500;
    return sin.toFixed();
  };

  const calculateNewPositions = (radian) => {
    const newPositions = spinner.map(
      ({ itemRadian, name, changeRadian, id }, index) => {
        const positionRadian = radian + itemRadian;
        const newZ = checkAndChangePositionZ(positionRadian);
        const newX = checkAndChangePositionX(positionRadian);
        const active = newZ > -50;
        return { x: newX, z: newZ, itemRadian, id, name, active, changeRadian };
      }
    );
    return newPositions;
  };

  const newPositions = calculateNewPositions(radian);

  const swipeLeft = () => {
    setRadian(radian - permamentRadian);
  };

  const swipeRight = () => {
    setRadian(spinRadian);
  };

  return (
    <Swipe
      onSwipeLeft={swipeLeft}
      onSwipeRight={swipeRight}
      className="rotate-cube-main"
    >
      {newPositions.map(
        ({ x, z, id, active, itemRadian, changeRadian }, index) => {
          const activeX = active ? x + 100 : x;
          const activeZ = active ? 70 : z;
          const newPosition = {
            transform: `translateZ(${activeZ}px) translateX(${activeX}px)`,
          };
          return (
            <div className="cube__rotate" style={{ zIndex: z }} key={id}>
              <div
                className={`cube-self cube-self${index}`}
                // onMouseOver={() => {
                //   // canSpin && setCanSpin(false);
                // }}
                // onMouseLeave={() => {
                //   // setCanSpin(false);
                // }}
                onClick={() => {
                  console.log(changeRadian);
                  clickOnBlock(changeRadian);
                }}
                style={newPosition}
              >
                {children[index](active).jsx}
              </div>
            </div>
          );
        }
      )}
    </Swipe>
  );
};

RotateCube.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ),
};

export default RotateCube;
