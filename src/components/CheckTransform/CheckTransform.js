import React, { useEffect, useRef, useState } from "react";
import Swipe from "react-easy-swipe";
import PropTypes from "prop-types";
import "./CheckTransform.css";

import blocks from "./blocks.js";

const initialTransforms = Array(blocks.length).fill({});

const CheckTransform = (props) => {
  const [transforms, setTransforms] = useState(initialTransforms);
  const [containerWidth, setContainerWidth] = useState(500);
  const [activeBoxIndex, setActiveBoxIndex] = useState(
    Math.floor((transforms.length - 1) / 2)
  );
  const refContainer = useRef(null);

  useEffect(() => {
    setContainerWidth(refContainer.current?.clientWidth ?? 500);
    const updateOnResize = (e) => {
      setContainerWidth(refContainer.current?.clientWidth ?? null);
    };

    window.addEventListener("resize", updateOnResize);
    return () => {
      window.removeEventListener("resize", updateOnResize);
    };
  }, []);

  const onBoxClick = (index) => {
    setActiveBoxIndex(index);
  };

  const eachBoxWidth = containerWidth / transforms.length;
  const transformStyles = transforms.map((transformBox, index) => {
    const distance = activeBoxIndex - index;
    if (index < activeBoxIndex) {
      const z = distance * eachBoxWidth;
      const x = z / 2.5;
      return {
        transform: `rotateY(50deg) translateZ(-${z}px) translateX(${-x}px)`,
      };
    }
    if (index === activeBoxIndex) {
      return {
        transform: `rotateY(0deg) translateX(${0}px)`,
        transition: "transform ease 0.5s 2s;",
        active: true,
        zIndex: 100,
      };
    }

    if (index > activeBoxIndex) {
      const z = distance * eachBoxWidth;
      const x = z / 2.5;
      return {
        transform: `rotateY(-50deg) translateZ(${z}px) translateX(${-x}px)`,
        zIndex: -index,
      };
    }
  });
  //   const changePerspective = (e) => {
  //     const newTransform =
  //       styleBox.transform === "rotateY(0deg)"
  //         ? "rotateY(45deg)"
  //         : "rotateY(0deg)";

  //     setStyles({
  //       transform: newTransform,
  //     });
  //   };

  const swipeLeft = () => {
    if (activeBoxIndex < transforms.length - 1) {
      setActiveBoxIndex(activeBoxIndex + 1);
    }
  };

  const swipeRight = () => {
    if (activeBoxIndex > 0) {
      setActiveBoxIndex(activeBoxIndex - 1);
    }
  };

  return (
    <Swipe
      className="check-transform__swipe"
      onSwipeRight={swipeRight}
      onSwipeLeft={swipeLeft}
      onSwipeMove={() => {
        // return true;
      }}
      tolerance={50}
      onSwipeUp={() => {
        return false;
      }}
      onSwipeDown={() => {
        return false;
      }}
    >
      <div className="check-transform__wrapper" ref={refContainer}>
        {transformStyles.map((cubeTransform, index) => {
          //get data to fill content by children, by the same index
          const {
            photo,
            title,
            description,
            alt,
            subtitle,
            photoClassName,
            children,
          } = blocks[index];

          //set active class for active cubeTransform
          const activeClass = cubeTransform.active ? "cube__face--active" : "";

          return (
            <div
              className={`cube cube${index}`}
              style={{ zIndex: cubeTransform.zIndex ?? "auto" }}
            >
              <div
                className={`cube__face face${index} ${activeClass}`}
                onClick={() => {
                  onBoxClick(index);
                }}
                style={cubeTransform}
              >
                <article className="my-feature">
                  {!!!children ? (
                    <img
                      src={photo}
                      alt={alt}
                      className={`my-feature__photo my-feature__${photoClassName}`}
                    />
                  ) : (
                    children
                  )}
                  <h3 className="my-feature__title">{title}</h3>
                  <span className="my-feature__subtitle">{subtitle}</span>
                  <p className="my-feature__description">{description}</p>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </Swipe>
  );
};

CheckTransform.propTypes = {};

export default CheckTransform;
