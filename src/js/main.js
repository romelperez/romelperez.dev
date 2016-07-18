import render from './render.js';
import store from './store.js';
import ga from './ga.js';

store.subscribe(render);

render();

ga();

window.app = { version: '1.0.1' };
