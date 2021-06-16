import React from 'react';
import "./index.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Show" : "Hide"} completed tasks
        </button>
        <button 
          className="buttons__button"
          // ___________
          autofocus
          // ___________
          disabled={tasks.every(({ done }) => done)}
        >
          Complete all tasks
        </button>
      </>
    )}
  </div> 
);

export default Buttons;