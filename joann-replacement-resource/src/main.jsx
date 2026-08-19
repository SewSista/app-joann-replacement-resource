import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter } from 'react-router';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowerRouter>
      <App />
    </BrowerRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
