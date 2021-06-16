import React from 'react';
import "./index.css";

const Buttons = (props) => (
  <div className="buttons">
    {props.tasks.length > 0 && (
      <>
        <button className="buttons__button">
          {props.hideDone ? "Show" : "Hide"} completed tasks
        </button>
        <button 
          className="buttons__button"
          // ___________
          autofocus
          // ___________
          disabled={props.tasks.every(({ done }) => done)}
        >
          Complete all tasks
        </button>
      </>
    )}
  </div> 
);

export default Buttons;