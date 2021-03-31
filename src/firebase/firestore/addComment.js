import firebase from "firebase/app";

const addComment = (commentObject) => {
  const collection = firebase.firestore().collection("comments");

  const response = collection
    .add(commentObject)
    .then((snapshot) => {
      console.log(snapshot);
      return {
        ok: true,
      };
    })
    .catch((error) => {
      console.log("%cError happened", "color: red; font-size: 1.2rem");
      console.log(error.message);
      return {
        ok: false,
      };
    });

  return response;
};

export default addComment;
