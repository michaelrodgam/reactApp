//basic
import React from 'react';
import ReactDOM from 'react-dom';

//style
import './index.css';

//components
import App from './App';

//I'm don't know what is a service-work, this come with the npm install create-react-app
import * as serviceWorker from './serviceWorker';

//this send all the components to the html id=root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
