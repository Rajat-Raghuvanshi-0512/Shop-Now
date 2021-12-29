import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoaderState } from './Context/Context';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderState>
        <App />
      </LoaderState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);