import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./RotateCube.css";

const itemsToSpin = [
  {
    z: 0,
    x: 0,
    name: "block A",
  },
  {
    z: 0,
    x: 0,
    name: "block B",
  },
  {
    z: 0,
    x: 0,
    name: "block C",
  },
  {
    z: 0,
    x: 0,
    name: "block D",
  },
  {
    z: 0,
    x: 0,
    name: "block E",
  },
];

const genuineRadian = 6.28319;

const RotateCube = ({ blocks = itemsToSpin, className = "" }) => {
  const permamentRadian = 6.28319 / blocks.length;

  const initialSpin = blocks.map((item, index) => {
    const itemRadian = permamentRadian * index;
    const changeRadian = genuineRadian - itemRadian;
    return { x: 0, z: 0, itemRadian, changeRadian };
  });
  const [spinner, setSpinner] = useState(initialSpin);
  const [canSpin, setCanSpin] = useState(true);

  const [radian, setRadian] = useState(0);

  useEffect(() => {
    setRadian(radian + permamentRadian);
    const threeSecondsInterval = setInterval(() => {
      setRadian((radian) => {
        const newRadian = radian + permamentRadian;
        return newRadian;
      });
    }, 7000);
    return () => {
      // clearInterval(threeSecondsInterval);
    };
  }, []);

  const clickOnBlock = (changeRadian) => {
    setCanSpin(false);
    setRadian(changeRadian);
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
      ({ itemRadian, name, changeRadian }, index) => {
        const positionRadian = radian + itemRadian;
        const newZ = checkAndChangePositionZ(positionRadian);
        const newX = checkAndChangePositionX(positionRadian);
        const active = newZ > -50;
        return { x: newX, z: newZ, itemRadian, name, active, changeRadian };
      }
    );
    return newPositions;
  };

  const newPositions = calculateNewPositions(radian);

  return (
    <div className="rotate-cube-main">
      {newPositions.map(
        ({ x, z, name, active, itemRadian, changeRadian }, index) => {
          const activeX = active ? x + 100 : x;
          const activeZ = active ? 70 : z;
          const newPosition = {
            transform: `translateZ(${activeZ}px) translateX(${activeX}px)`,
          };
          return (
            <div className="cube__rotate" style={{ zIndex: z }}>
              <div
                className={`cube-self cube-self${index}`}
                onMouseOver={() => {
                  canSpin && setCanSpin(false);
                  console.log("MouseOver");
                }}
                onMouseLeave={() => {
                  console.log("MouseLeave");
                  setCanSpin(false);
                }}
                onClick={() => {
                  clickOnBlock(changeRadian);
                }}
                style={newPosition}
              >
                <h2>{name}</h2>
              </div>
              <div>
                {/* {newPositions.map(({ changeRadian, name }) => {
                  return (
                    <button
                      onClick={() => {
                        console.log(`block ${name} clicked`);
                        clickOnBlock(changeRadian);
                      }}
                    >
                      {name}
                    </button>
                  );
                })} */}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

RotateCube.propTypes = {};

export default RotateCube;
