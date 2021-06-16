import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Projects from "./Projects";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Switch to React.js", done: true },
    { id: 2, content: "Have lunch", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(!hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, 
      done: true,
    })))
  };

  return (
    <Container>
      <Projects />
      <Header title="To-do list" />
      <Section 
        title="Add new Task" 
        body={<Form />} 
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
      {/* ________________________________ */}
      <section className="section section__stats">
        <div />
      </section>
      {/* ________________________________ */}
  </Container>
  );
}

export default App;
