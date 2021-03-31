import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./StepsToDo.css";
import useFormInput from "../../hooks/useFormInput";

const initialSteps = [
  {
    name: "Figma. Draw design",
  },
  {
    name: "Detailed Plan",
  },
  {
    name: "jsx and css",
  },
  {
    name: "responsivness",
  },
  {
    name: "react logic",
  },
  {
    name: "firebase frontend logic",
  },
  {
    name: "firebase firestore. rules.",
  },
  {
    name: "firebase functions",
  },
];

const StepsToDo = (props) => {
  const [steps, setSteps] = useState(initialSteps);
  const newStep = useFormInput("");

  const onNewStep = (e) => {
    setSteps([...steps, { name: newStep.value }]);
    newStep.clear();
  };

  const onDeleteStep = (index) => (e) => {
    const newSteps = steps.slice();
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    const dragOverIndex = e.target.dataset.index;
    // console.log(dragOverIndex);
  };

  const onDrop = (e) => {
    const dragOverIndex = +e.target.dataset.index;
    let draggedIndex = +e.dataTransfer.getData("index");
    const itemToMove = steps[draggedIndex];
    const oldSteps = steps.slice();
    oldSteps.splice(dragOverIndex, 0, itemToMove);
    if (draggedIndex > dragOverIndex) {
      draggedIndex = draggedIndex + 1;
    }
    oldSteps.splice(draggedIndex, 1);
    setSteps(oldSteps);
    console.log(draggedIndex);
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData("index", e.target.dataset.index);
  };

  return (
    <div className="project-steps__wrapper">
      <ul className="project-steps">
        {steps.map(({ name }, index) => {
          return (
            <li
              key={name}
              className="project-step"
              data-index={index}
              draggable
              onDragOver={onDragEnter}
              onDrop={onDrop}
              onDragStart={onDragStart}
            >
              <input type="checkbox" className="project-steps__done" />
              {name}
              <button
                className="project-steps__delete"
                onClick={onDeleteStep(index)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div className="project-steps__new">
        <input
          type="text"
          name="new-step"
          className="project-steps__new-input"
          {...newStep}
        />
        <button className="project-steps__new-add btn" onClick={onNewStep}>
          add
        </button>
      </div>
    </div>
  );
};

StepsToDo.propTypes = {};

export default StepsToDo;
