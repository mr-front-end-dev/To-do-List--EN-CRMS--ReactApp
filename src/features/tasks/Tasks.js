import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Projects from "../../common/Projects";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  
  return (
    <Container>
      <Projects />
      <Header title="ToDo list" />
      <Section 
        title="Add new Task" 
        body={<Form />} 
        />
      <Section 
        title="ToDo list"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        />
{/* __________________________________________ */}
      <section className="section section__stats">
        <div />
      </section>
{/* __________________________________________ */}

  </Container>
  );
};


export default Tasks;
