import React from 'react';
import ReactDOM from 'react-dom';
import Languages from './components/Languages';
import HelloKrisztina from './component/HelloKrisztina';
import HelloKenji from './component/HelloKenji';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Languages />
    <HelloKrisztina />
    <HelloKenji />
  </React.StrictMode>,
  document.getElementById('root')
);

