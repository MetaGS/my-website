import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectPhoto.css";

import projectPhoto1 from "../../assets/project-photo-1.jpg";
import projectPhoto2 from "../../assets/project-photo-2.jpg";
import projectPhoto3 from "../../assets/project-photo-3.jpg";

const dummyPhotos = [projectPhoto1, projectPhoto2, projectPhoto3];

const ProductPhoto = ({ photos = dummyPhotos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showChosenPhoto, setShowChosenPhoto] = useState(false);

  const [mainPhoto = "https://via.placeholder.com/800", ...restPhotos] = photos;

  const showPhoto = (
    <div className="showBigPhoto">
      <img src={photos[selectedPhotoIndex]} />
      <button
        className="btn close-photo"
        onClick={() => {
          setShowChosenPhoto(false);
        }}
      >
        close
      </button>
    </div>
  );

  return (
    <>
      {/* {showChosenPhoto && showPhoto} */}
      {/* {!showChosenPhoto && ( */}
      <>
        <div
          className="product-page-photo"
          onClick={({ target }) => {
            if (target.className === "slide selected") setShowChosenPhoto(true);
            // document.body.overflow = 'unset'
          }}
        >
          <Carousel
            showStatus={false}
            renderThumbs={(childs) => {
              return;
            }}
            showArrows={false}
            onChange={(photoIndex) => {
              setSelectedPhotoIndex(photoIndex);
            }}
            selectedItem={selectedPhotoIndex}
            onClickItem={() => {
              console.log("clicked");
              return false;
            }}
            renderIndicator={(clickHandler, isSelected, index, label) => {
              return (
                <span
                  onClick={clickHandler}
                  className={`photo-thumb ${isSelected ? "active" : ""}`}
                ></span>
              );
            }}
          >
            {photos?.map((photoUrl) => {
              return (
                <img src={photoUrl} alt="product" data-photo-url={photoUrl} />
              );
            })}
          </Carousel>
        </div>
      </>
      {/* )} */}
    </>
  );
};

ProductPhoto.propTypes = {};

export default ProductPhoto;
