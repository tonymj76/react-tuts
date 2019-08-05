import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import App from 'components/App';

// const initialData = {
//   articles: {},
//   authors: {}
// }

hydrate(<App initialData={window.initialData}/>, 
  document.getElementById('root'));