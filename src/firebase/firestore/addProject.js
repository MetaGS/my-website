import firebase from "firebase/app";

const addProject = (projectData) => {
  const collection = firebase.firestore().collection("projects");

  projectData.createdTime = firebase.firestore.FieldValue.serverTimestamp();

  const response = collection
    .add(projectData)
    .then((ref) => {
      console.log(
        "%cSuccess addition project to firestore",
        "color: green;font-size:1.2rem"
      );
      console.log(ref);
      return ref;
    })
    .catch((error) => {
      console.log("%cError", "font-size: 1.2rem; color:red");
      return false;
    });

  return response;
};

export default addProject;
