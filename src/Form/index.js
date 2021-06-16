import React, { useState } from 'react';
import "./index.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input 
        value={newTaskContent}
        className="form__input" 
        type="text" 
        placeholder="What is there to do?" 
        onChange={({ target }) => setNewTaskContent(target.value)}
        required 
      />
      <button className="form__button">Add new task</button>
    </form>
  )
};

export default Form;