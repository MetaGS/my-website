import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

const CreateProject = (props) => {
  const [photoFiles, setPhotoFiles] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const title = useFormInput("");
  const description = useFormInput("");
  const githubLink = useFormInput("");
  const designLink = useFormInput("");
  const onlineLink = useFormInput("");
  const progress = useFormInput("");
  const [tag, tagList] = useInputList();

  return (
    <WrapperWithFooter>
      <div className="create-project">
        <Container className="create-project__container">
          <InputWithTitle {...title} type="text" name="title">
            Enter title
          </InputWithTitle>

          <Label>
            <Title>Enter Description</Title>
            <textarea
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
          <div className="create-project__list-block">
            <InputWithTitle type="text" name="tags" {...tag}>
              Add Tags
            </InputWithTitle>
            <button
              className="create-project__button btn"
              onClick={tagList.onClick}
            >
              add
            </button>
            <ul className="create-project__list-items">
              {tagList.items.map((item, index) => {
                return (
                  <li
                    className="create-project__list-item"
                    onClick={tagList.backToItem(index)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <Label>
            <Title>Enter Steps to be done</Title>
            <StepsToDo />
          </Label>

          <InputWithTitle
            type="range"
            name="progress"
            {...progress}
            max="100"
            min="0"
          >
            Where Are you now? (Progress)
          </InputWithTitle>
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
        </Container>
      </div>
    </WrapperWithFooter>
  );
};

CreateProject.propTypes = {};

export default CreateProject;
