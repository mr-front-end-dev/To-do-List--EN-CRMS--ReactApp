import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
