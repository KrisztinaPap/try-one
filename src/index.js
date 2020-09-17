import React from 'react';
import ReactDOM from 'react-dom';
import HelloKrisztina from './component/HelloKrisztina';
import HelloKenji from './component/HelloKenji';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <HelloKrisztina />
    <HelloKenji />
  </React.StrictMode>,
  document.getElementById('root')
);

