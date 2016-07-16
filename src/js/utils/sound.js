import _ from 'lodash';
import constants from '../constants.js';
import store from '../store';

export default {

  play (id, conf={}) {
    const sound = createjs.Sound.play(id);
    sound.volume = conf.volume || store.getState().get('volume');
  }
};
