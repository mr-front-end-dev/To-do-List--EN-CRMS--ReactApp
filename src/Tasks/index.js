import React from 'react';
import "./index.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li 
      // _______________
      key={task.id}
      // _______________
      className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
      >
        <button 
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__content${ task.done ? " tasks__content--done" : ""}`}>    
        {/* ___________ */}
         {task.id} - {task.content}
         {/* __________ */}
        </span>
        <button 
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
            🗑
        </button>
      </li>
    ))}
  </ul>
)

export default Tasks;