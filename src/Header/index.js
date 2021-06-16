import React from 'react';
import "./index.css";

const Header = ({ title }) => (
  <header>
    <h2 className="section__title">{title}</h2>
  </header>
);

export default Header;