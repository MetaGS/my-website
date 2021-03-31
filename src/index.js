import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";
import { StorageInitialize } from "./storage";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBqGgBh_iMX9hCAuXt-jZXshCbbd9YcTCQ",
  authDomain: "my-website-50d3b.firebaseapp.com",
  projectId: "my-website-50d3b",
  storageBucket: "my-website-50d3b.appspot.com",
  messagingSenderId: "651603994321",
  appId: "1:651603994321:web:049b4bd5ab10f4ecaf07f0",
  measurementId: "G-XPFW6ZSMVV",
};
let app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StorageInitialize>
        <App />
      </StorageInitialize>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
