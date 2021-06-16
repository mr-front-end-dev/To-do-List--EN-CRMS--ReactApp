import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Projects from "./Projects";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Switch to React.js", done: true },
  { id: 2, content: "Have lunch", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(!hideDone);
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
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
        <Buttons 
          tasks={tasks} 
          hideDone={hideDone} 
          toggleHideDone={toggleHideDone} 
        />}
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
