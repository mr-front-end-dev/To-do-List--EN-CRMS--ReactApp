import React, { useEffect, useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Projects from "./Projects";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks, 
    removeTask, 
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Projects />
      <Header title="To-do list" />
      <Section 
        title="Add new Task" 
        body={
          <Form 
            addNewTask={addNewTask}
          />
        } 
      />
      <Section 
        title="To-do list"
        body={
          <Tasks 
            tasks={tasks} 
            hideDone={hideDone} 
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
         />
        }
        extraHeaderContent={
         <Buttons 
            tasks={tasks} 
            hideDone={hideDone} 
            toggleHideDone={toggleHideDone} 
            setAllDone={setAllDone}
          />
        }
      />

      <section className="section section__stats">
        <div />
      </section>

  </Container>
  );
}

export default App;
