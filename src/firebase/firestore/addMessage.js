import firebase from "firebase/app";

const addMessage = (messageObject) => {
  const collection = firebase.firestore().collection("messages");
  const snapShot = collection
    .add(messageObject)
    .then((response) => {
      console.log(response);
      return { ok: true };
    })
    .catch((error) => {
      console.log("%c Error", "color: red; font-size: 1.2rem");
      console.log(error.message);
      return { ok: false };
    });
  return snapShot;
};

export default addMessage;
