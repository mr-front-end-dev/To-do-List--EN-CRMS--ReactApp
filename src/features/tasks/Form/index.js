import React, { useState, useRef } from 'react';
import { Input, Button, StyledForm } from './styled';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {

    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text" 
        placeholder="What is there to do?" 
        onChange={({ target }) => setNewTaskContent(target.value)}
        required 
      />
      <Button>Add new task</Button>
    </StyledForm>
  )
};

export default Form;