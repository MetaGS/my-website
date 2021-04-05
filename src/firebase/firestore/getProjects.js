import firebase from "firebase/app";

const getProjects = () => {
  const projectsCollection = firebase.firestore().collection("projects");

  return projectsCollection
    .get()
    .then((docsSnapshot) => {
      return docsSnapshot.docs.map((doc) => {
        const id = doc.id;
        const withId = { ...doc.data(), id };

        return withId;
      });
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

export default getProjects;
