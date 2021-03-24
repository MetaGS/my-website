import React, { useEffect, useRef, useState } from "react";
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

  return (
    <div className="check-transform__wrapper" ref={refContainer}>
      {transformStyles.map((cubeTransform, index) => {
        const {
          photo,
          title,
          description,
          alt,
          subtitle,
          photoClassName,
        } = blocks[index];

        return (
          <div
            className={`cube cube${index}`}
            style={{ zIndex: cubeTransform.zIndex ?? "auto" }}
          >
            <div
              className={`cube__face face${index}`}
              onClick={() => {
                onBoxClick(index);
              }}
              style={cubeTransform}
            >
              <article className="my-feature">
                <img
                  src={photo}
                  alt={alt}
                  className={`my-feature__photo my-feature__${photoClassName}`}
                />
                <h3 className="my-feature__title">{title}</h3>
                <span className="my-feature__subtitle">{subtitle}</span>
                <p className="my-feature__description">{description}</p>
              </article>
            </div>
          </div>
        );
      })}
    </div>
  );
};

CheckTransform.propTypes = {};

export default CheckTransform;
