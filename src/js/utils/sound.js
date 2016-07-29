import constants from '../constants.js';

export default {

  play (id, conf={}) {
    const sound = createjs.Sound.play(id);
    sound.volume = conf.volume || constants.volume;
  }
};
