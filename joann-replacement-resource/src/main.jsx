import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter } from 'react-router';
import './index.css'
import App from './App.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowerRouter>
      <App />
    </BrowerRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
