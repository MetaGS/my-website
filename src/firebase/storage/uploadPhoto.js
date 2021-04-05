import firebase from "firebase/app";

const uploadPhoto = (directory, file, progressUpdater) => {
  const storageRef = firebase.storage().ref();

  const uploadDir = storageRef.child(`projects/${directory}/${file.name}`);

  const metaData = {};

  const controlUpload = uploadDir.put(file, metaData);

  const flipToPromise = new Promise((resolve, reject) => {
    controlUpload.on(
      "state_changed",
      //handle upload progress
      function controlProgress(snapshot) {
        // show progress
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`upload is ${progress}%`);

        //notify state
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log("paused");
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log("running......");
            break;
        }

        //inform progress by caller
        progressUpdater.setProgress((allProgresses) => {
          const progressesCopy = allProgresses.slice();
          progressesCopy[progressUpdater.index] = progress;
          return progressesCopy;
        });
      },

      //handle error
      function controlError(error) {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permiss
            consoleLog("authorize first");
            break;

          case "storage/canceled":
            // User canceled the upload
            consoleLog("user cancelled");
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            consoleLog("no such storage");
            break;
        }

        reject(error.message);
      },

      //handle success
      function controlSuccess() {
        const refToUploadedFile = controlUpload.snapshot.ref;
        consoleLog("Success", false);
        refToUploadedFile
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  }).catch((error) => {
    console.log(
      "%cIt is catched Errorororororo",
      "color: red; font-size: 1.2rem;"
    );
  });

  return flipToPromise;
};
const consoleLog = (message, warning = true) => {
  console.log(
    `%c${message}`,
    `color: ${warning ? "red" : "green"}; font-size: 1.2rem;`
  );
};

export const uploadMultiplePhotos = (id, photos = [], setProgress) => {
  return Promise.all(
    photos.map((photo, index) => {
      return uploadPhoto(id, photo, { setProgress, index });
    })
  );
};

export default uploadPhoto;
