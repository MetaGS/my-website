import firebase from "firebase/app";

const getComments = (projectId) => {
  const commentsCollection = firebase.firestore().collection("comments");

  return commentsCollection
    .where("projectId", "==", projectId)
    .get()
    .then((commentsSnapshot) => {
      const comments = commentsSnapshot.docs.map((comment) => {
        return { ...comment.data(), id: comment.id };
      });

      return comments;
    })
    .catch((error) => {
      console.log(
        "%c Error happened in getComments.js",
        "color:red; font-size: 1.2rem;"
      );
      console.log(error.message);
      return false;
    });
};

export default getComments;
