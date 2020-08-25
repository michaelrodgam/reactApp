//basic
import React from 'react';
import ReactDOM from 'react-dom';

//style
import './index.css';

//components
import App from './App';

//this send all the components to the html id=root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
