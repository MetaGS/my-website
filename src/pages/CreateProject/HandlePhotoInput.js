import firebase from "firebase/app";
import { useState, useEffect, useRef, Fragment } from "react";
import React from "react";

import uploadPhoto from "../../firebase/storage/uploadPhoto";
import "./HandlePhotoInput.css";

export default ({ giveParentFiles, urls = [], uploadProgress }) => {
  const ref = useRef();

  const [showPhotos, setShowPhotos] = useState([]);

  const onPhotosChange = (e) => {
    const files = Array.from(ref.current.files);
    setShowPhotos(files);
    giveParentFiles(files);
  };

  return (
    <div>
      <input
        type="file"
        ref={ref}
        accept=".jpeg, .jpg, .png, .svg"
        multiple
        className="upload-photo__input"
        onChange={onPhotosChange}
      />
      {/* <button type="button" className="btn secondary sm" onClick={onUpload}>
        Upload Photo
      </button> */}
      <div className="upload-photo__image-list">
        {showPhotos.map((photo, index) => {
          return (
            <div key={photo.name} className="upload-photo__thumb-progress">
              <img
                src={URL.createObjectURL(photo)}
                onLoad={() => {
                  console.log("urlObject revoke");
                  URL.revokeObjectURL(photo);
                }}
                className="upload-photo__thumb"
                alt=""
              />
              <div className="upload-photo__progress">
                <span
                  className="upload-photo__progress-bar"
                  style={{
                    transform: `translateX(-${100 - uploadProgress[index]}%)`,
                  }}
                ></span>
                progress {uploadProgress[index]}
              </div>
            </div>
          );
        })}
      </div>
      <div className="uploaded-through-url">
        {urls.map((url) => {
          return <img src={url} />;
        })}
      </div>
    </div>
  );
}; /* next when i will have have time, need to update create product functions so, i send json to db [title,des,price]
      concurrently with product photos, but i attach temp id to both, create on create evnt in firease funcs when file will be created, 
      so i can move photos to dir named by PID, get photos downloadUrl and attach it to product in db as property
*/

// const Download = () => {
//   const storageRef = firebase.storage().ref();

//   const [url, setUrl] = useState("");

//   useEffect(() => {
//     storageRef
//       .child("public/productImages/testStorage.jpg")
//       .getDownloadURL()
//       .then((url) => {
//         setUrl(url);
//       });
//   });

//   return (
//     <div>
//       <img src={url} alt="" />
//     </div>
//   );
// };
