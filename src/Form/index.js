import React from 'react';
import "./index.css";

const Form = () => (
  <form className="form">
    <input className="form__input" type="text" placeholder="What is there to do?" required />
    <button className="form__button">Add new task</button>
  </form>
)

export default Form;