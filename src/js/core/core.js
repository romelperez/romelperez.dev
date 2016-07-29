import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Immutable from 'immutable';
import render from './render.js';
import store from './store.js';
import ga from '../ga.js';

store.subscribe(render);

render();
ga();

window._ = _;
window.React = React;
window.ReactDOM = ReactDOM;
window.Redux = { createStore };
window.Immutable = Immutable;
window.RP = { store };
