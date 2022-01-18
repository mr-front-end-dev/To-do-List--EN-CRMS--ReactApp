import React from 'react';
import { Wrapper, Button } from './styled';

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Show" : "Hide"} completed tasks
        </Button>
        <Button 
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Complete all tasks
        </Button>
      </>
    )}
  </Wrapper> 
);

export default Buttons;