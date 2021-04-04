import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./StepsToDo.css";
import useFormInput from "../../hooks/useFormInput";

const initialSteps = [
  {
    name: "Figma. Draw design",
    done: false,
  },
  {
    name: "Detailed Plan",
    done: false,
  },
  {
    name: "jsx and css",
    done: false,
  },
  {
    name: "responsivness",
    done: false,
  },
  {
    name: "react logic",
    done: false,
  },
  {
    name: "firebase frontend logic",
    done: false,
  },
  {
    name: "firebase firestore. rules.",
    done: false,
  },
  {
    name: "firebase functions",
    done: false,
  },
];

const StepsToDo = ({ clear, updateParent = () => {} }) => {
  const [steps, updateSteps] = useState(initialSteps);
  const newStep = useFormInput("");

  useEffect(() => {
    setSteps(initialSteps);
  }, [clear]);

  const setSteps = (newSteps) => {
    updateSteps(newSteps);
    updateParent(newSteps);
  };

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

  const onDoneChange = (stepIndex) => (e) => {
    const stepsCopy = steps.slice();
    const step = steps[stepIndex];
    const updatedStep = { ...step, done: !e.target.value };
    stepsCopy[stepIndex] = updatedStep;
    console.log(stepsCopy);
    setSteps(stepsCopy);
  };

  return (
    <div className="project-steps__wrapper">
      <ul className="project-steps">
        {steps.map(({ name, done }, index) => {
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
              <input
                type="checkbox"
                className="project-steps__done"
                value={done}
                onChange={onDoneChange(index)}
              />
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
