import React from 'react';
import { render as renderDOM } from 'react-dom';
import store from './store.js';
import App from './components/App';

const rootEl = document.querySelector('#app');

export default function () {
  renderDOM(<App />, rootEl);
}
