import React from 'react';
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

const hideDoneTasks = false;

function App() {
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
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
      {/* ________________________________ */}
      <section className="section section__stats">
        <div>
          
        </div>
      </section>
      {/* ________________________________ */}
  </Container>
  );
}

export default App;
