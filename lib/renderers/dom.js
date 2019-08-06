import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import App from 'components/App';
import StateApi from 'start-api';

// const initialData = {
//   articles: {},
//   authors: {}
// }
const store = new StateApi(window.initialData);
hydrate(<App store={store}/>, 
  document.getElementById('root'));