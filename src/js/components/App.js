import React from 'react';
import { Loading, Separator } from 'prhone-gui';
import constants from '../constants.js';
import store from '../store.js';
import sound from '../utils/sound';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';

const App = React.createClass({

  componentDidMount () {

    const body = document.querySelector('body');
    body.className = 'rp-body-loading';
    body.addEventListener('click', e => {
      sound.play('click');
    });

    this.loadResources();
  },

  render () {
    const state = store.getState();
    const loaded = state.get('loaded');
    const status = state.get('status');
    return (
      <div>
        <Loading done={loaded} status={status} />
        <Header />
        <Separator anim={loaded} />
        <Projects />
        <Footer />
      </div>
    );
  },

  onResourcesComplete () {

    store.dispatch({ type: 'STATUS', status: 'success' });

    setTimeout(() => {
      document.querySelector('body').className = '';
      store.dispatch({ type: 'LOAD', loaded: true });
      sound.play('started');
    }, constants.animTime);
  },

  loadResources () {

    this._queue = new createjs.LoadQueue();
    this._queue.installPlugin(createjs.Sound);

    this._queue.on("complete", this.onResourcesComplete);

    const sounds = _(constants.resources).
      chain().
      filter(res => res.type === createjs.AbstractLoader.SOUND).
      groupBy(res => res.name).
      map((files, name) => {
        const src = _(files).reduce((memo, current) => {
          memo[current.ext] = current.src;
          return memo;
        }, {});
        return { id: name, src, type: createjs.AbstractLoader.SOUND };
      }).
      value();

    const otherFiles = constants.resources.
      filter(res => res.type !== createjs.AbstractLoader.SOUND).
      map((file, id) => {
        file.id = id;
        return file;
      });

    this._queue.loadManifest(otherFiles.concat(sounds));
  }
});

export default App;
