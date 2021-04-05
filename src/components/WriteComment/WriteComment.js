import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import useFormInput from "../../hooks/useFormInput";
import ReCAPTCHA from "react-google-recaptcha";
import { addComment } from "../../firebase/firestore";

import "./WriteComment.css";
import { MainTitle } from "../Title";
import DescriptionP from "../DescriptionP";
const recaptchaKey = "6LfxOpIaAAAAAPakUxYx65NQ4pVLRUCFvFI425Ip";
const WriteComment = ({ projectId }) => {
  const userName = useFormInput("");
  const userText = useFormInput("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [submitState, setSubmitState] = useState({
    submitted: false,
    submitting: false,
  });
  const [timeouts, setTimeouts] = useState([]);

  useEffect(() => {
    return () => {
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    setShowCaptcha(true);
  };

  const onCaptchaChange = (token) => {
    if (token) {
      setShowCaptcha(false);
      setSubmitState({ submitting: true, submitted: false, message: null });
      addComment({
        name: userName.value,
        text: userText.value,
        token,
        projectId,
        createdTime: firebase.firestore.FieldValue.serverTimestamp(),
      }).then((response) => {
        if (response.ok) {
          setSubmitState({
            submitted: true,
            submitting: false,
            message: "Your message submitted",
          });

          userName.clear();
          userText.clear();
        } else {
          setSubmitState({
            submitted: true,
            submitting: false,
            message: "Something went wrong!",
          });
        }

        setTimeout(() => {
          setSubmitState({
            submitted: false,
            submitting: false,
            message: null,
          });
        }, 10000);
      });
    }
  };

  const captcha = (
    <ReCAPTCHA
      sitekey={recaptchaKey}
      onChange={onCaptchaChange}
      className="write-comment__captcha"
    />
  );

  if (submitState.submitting) {
    //if submitting, then show loading state
    return (
      <DescriptionP className="write-comment__submit-state">
        Submitting
      </DescriptionP>
    );
  } else {
    //if is not loading, then show this
    return (
      <>
        {submitState.submitted && (
          <DescriptionP className="write-comment__submit-state">
            {submitState.message}
          </DescriptionP>
        )}
        {!submitState.submitted && (
          <form className="write-comment__inputs" onSubmit={onSubmit}>
            <input
              type="text"
              value={userName.value}
              onChange={userName.onChange}
              placeholder="Enter Name"
              required
              minLength="2"
              className="write-comment__input write-comment__input-name"
            />
            <textarea
              type="text"
              required
              minLength="2"
              value={userText.value}
              onChange={userText.onChange}
              placeholder="Enter Text"
              className="write-comment__input write-comment__input-text"
            ></textarea>
            {showCaptcha && captcha}
            <button
              type="submit"
              className="write-comment__input write-comment__input-submit"
            >
              submit
            </button>
          </form>
        )}
      </>
    );
  }
};

WriteComment.propTypes = {};

export default WriteComment;
