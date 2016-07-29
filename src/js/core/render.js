import React from 'react';
import { render as renderDOM } from 'react-dom';
import store from './store.js';
import Core from './components/Core';

const rootEl = document.createElement('div');
rootEl.setAttribute('id', 'core');
document.body.appendChild(rootEl);

export default function () {
  renderDOM(<Core />, rootEl);
}
