import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="About the author" />
      <Section 
        title="Nikita Rysiev" 
        body={
          <p contentEditable>
            <p>you can edit the text below</p>
            <p>Hej! My name a Nick, and I am a beginner Junior Front-End (React) Developer and 👶 Junior Manual Software Tester with introduction to automation.
            My native language is Russian, but I learn and practice more English language, Polish and some German.</p> 
            <p>Now I try to study software testing and some coding of simple web applications.</p>
            <p>I want to know coding and speaking English very well to be useful in the labor market. 
            </p>
          </p>
          } 
        />
  </Container>
);