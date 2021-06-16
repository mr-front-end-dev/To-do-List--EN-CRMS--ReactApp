import React from 'react';
import "./index.css";

const Container = (props) => (
  <main className="container">
    {props.children}
  </main>
);

export default Container;