import firebase from "firebase/app";

const getOneProject = (id) => {
  const docRef = firebase.firestore().collection("projects").doc(id);

  return docRef
    .get()
    .then((doc) => {
      const docWithId = { ...doc.data(), id };
      return docWithId;
    })
    .catch((error) => {
      console.log(
        "%cError happaned in getOneProject",
        "color:red; font-size: 1.2rem;"
      );
      console.log(error.message);
      return false;
    });
};

export default getOneProject;
