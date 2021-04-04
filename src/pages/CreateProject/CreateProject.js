import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import addProject from "../../firebase/firestore/addProject";
import { uploadMultiplePhotos } from "../../firebase/storage/uploadPhoto";

import "./CreateProject.css";
import WrapperWithFooter from "../../components/WrapperWithFooter";
import Container from "../../components/Container";
import HandlePhotoInput from "./HandlePhotoInput";
import useFormInput from "../../hooks/useFormInput";
import useInputList from "../../hooks/useInputList";
import { MainTitle } from "../../components/Title";
import StepsToDo from "./StepsToDo";

const Label = ({ className, children }) => {
  return <label className="input-with-title">{children}</label>;
};

const Title = ({ className, children }) => {
  return <MainTitle className="input-with-title__title">{children}</MainTitle>;
};

const InputWithTitle = ({ children, element, ...props }) => {
  return (
    <Label>
      <Title>{children}</Title>
      <input {...props} className="input-with-title__input" />
    </Label>
  );
};

const initialTags = ["react", "firebase", "figma", "html", "css", "javascript"];

const CreateProject = (props) => {
  //state to send to firestore
  const [photoFiles, setPhotoFiles] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [steps, setSteps] = useState([]);
  const title = useFormInput("");
  const description = useFormInput("");
  const githubLink = useFormInput("");
  const designLink = useFormInput("");
  const onlineLink = useFormInput("");
  const progress = useFormInput(0);
  const [tag, tagList] = useInputList(undefined, { initialItems: initialTags });
  //state to control page
  const [uploading, setUploading] = useState(false);
  const [clearChildren, setClearChildren] = useState(false);

  const clear = () => {
    //I need to clear after successful submit, or leave it as is it if not.
    setClearChildren(!clearChildren);
    setPhotoFiles([]);
    setIsPrivate(false);
    setSteps([]);
    title.clear();
    description.clear();
    githubLink.clear();
    designLink.clear();
    onlineLink.clear();
    progress.clear();
    tagList.clear();
  };

  const submitDataToFirestore = async () => {
    setUploading(true);
    //send fields to firestore first
    const refToProjectDoc = await addProject({
      title: title.value,
      description: description.value,
      tags: tagList.items,
      githubLink: githubLink.value,
      onlineLink: onlineLink.value,
      designLink: designLink.value,
      steps,
      photoUrls: [],
      isPrivate,
      progress: +progress.value,
    });

    //if firestore responses with success
    if (refToProjectDoc) {
      const projectId = refToProjectDoc.id;
      console.log(projectId);

      //upload photos to firebase storage
      await uploadMultiplePhotos(projectId, photoFiles).then(
        async (photoUrls) => {
          console.log(
            "%cand then projectDoc updated with photoURls",
            "font-size: 1.2rem; color: green;"
          );
          console.log(photoUrls);
          refToProjectDoc.update({ photoUrls }).then((_) => {
            //if everything success, then clear the inputs;
            clear();
          });
        }
      );
    }
    //when upload is success or fail, setUploading to false
    setUploading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitDataToFirestore();
  };

  return (
    <WrapperWithFooter>
      {uploading && (
        <div className="create-project__uploading-state">
          <Title>Uploading...</Title>
        </div>
      )}
      <div className="create-project">
        <Container className="create-project__container">
          <form onSubmit={onSubmit}>
            <InputWithTitle {...title} type="text" name="title" required>
              Enter title
            </InputWithTitle>

            <Label>
              <Title>Enter Description</Title>
              <textarea
                required
                {...description}
                className="input-with-title__textarea"
              ></textarea>
            </Label>

            <InputWithTitle type="url" {...githubLink} name="github">
              Enter github link
            </InputWithTitle>

            <InputWithTitle type="text" {...designLink} name="figma">
              Enter Design link
            </InputWithTitle>
            <InputWithTitle type="url" name="online" {...onlineLink}>
              Project Link (published)
            </InputWithTitle>

            <div className="create-project__tag-block input-with-title">
              <InputWithTitle type="text" name="tags" {...tag}>
                Add Tags
              </InputWithTitle>
              <button
                className="create-project__button btn"
                onClick={tagList.onClick}
              >
                add
              </button>
              <ul className="create-project__tag-items">
                {tagList.items.map((item, index) => {
                  return (
                    <li
                      key={item}
                      className="create-project__tag-item"
                      onClick={tagList.onDeleteItem(index)}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="input-with-title">
              <Title>Enter Steps to be done</Title>
              <StepsToDo updateParent={setSteps} clear={clearChildren} />
            </div>

            <InputWithTitle
              type="range"
              name="progress"
              {...progress}
              max="100"
              min="0"
              required
            >
              Where Are you now? (Progress)
            </InputWithTitle>
            <Title>{+progress.value}</Title>
            <InputWithTitle
              type="checkbox"
              name="private"
              checked={isPrivate}
              onChange={(e) => {
                setIsPrivate(!isPrivate);
              }}
            >
              Private Project?
            </InputWithTitle>
            <div className="create-project__upload-photo">
              <HandlePhotoInput giveParentFiles={setPhotoFiles} />
            </div>

            <button className="btn create-project__submit-btn" type="submit">
              Submit
            </button>
          </form>
        </Container>
      </div>
    </WrapperWithFooter>
  );
};

CreateProject.propTypes = {};

export default CreateProject;
