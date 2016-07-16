import render from './render.js';
import store from './store.js';

store.subscribe(render);

render();
