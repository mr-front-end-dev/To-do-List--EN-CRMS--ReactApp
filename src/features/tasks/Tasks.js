import React, { useEffect, useState } from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Projects from "../../common/Projects";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
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
      <Header title="ToDo list" />
      <Section 
        title="Add new Task" 
        body={
          <Form 
            addNewTask={addNewTask}
          />
        } 
      />
      <Section 
        title="ToDo list"
        body={
          <TaskList 
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
{/* __________________________________________ */}
      <section className="section section__stats">
        <div />
      </section>
{/* __________________________________________ */}

  </Container>
  );
}

export default Tasks;
