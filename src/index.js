import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import {Greetings} from './App'



ReactDOM.render
   (
    <Greetings isLoggedIn={false}/>,
    document.getElementById('root')
  )
