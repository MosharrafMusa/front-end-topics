import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import { env } from './config';


ReactDOM.render
   (
    <App env={env}/>,
    document.getElementById('root')
  )
