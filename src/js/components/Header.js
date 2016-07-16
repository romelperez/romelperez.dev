import React from 'react';
import { Img, Btn } from 'prhone-gui';
import constants from '../constants.js';
import store from '../store.js';
import sound from '../utils/sound.js';

const Header = React.createClass({

  componentDidMount () {
    $('.rp-header .pr-box').on('mouseenter', e => {
      sound.play('over', {volume: constants.volumeMinor});
    });
  },

  render () {

    const state = store.getState().toJS();
    const loadedCls = state.loaded ? 'rp-header_loaded' : '';
    const cls = `rp-header ${loadedCls}`;
    const user = state.user;
    const links = user.links.map((link, i) => {
      return <Btn key={i} icon={link.icon} href={link.href} target='_blank'>{link.name}</Btn>;
    });

    return (
      <header className={cls}>
        <div className='row'>
          <div className='column small-12'>
            <h1>{user.name}</h1>
            <Img src={user.profile} anim={state.loaded} />
            <p>{user.bio}</p>
            <p>
              {
                user.company.name ?
                  <a href={user.company.href} target='_blank'>
                    <i className='mdi mdi-account-multiple' /> {user.company.name}{' '}
                  </a> :
                  null
              }
              <a href={user.location.map} target='_blank'>
                <i className='mdi mdi-map-marker' /> {user.location.name}
              </a>
              {' '}
              <a href='mailto:ronelprhone@gmail.com'>
                <i className='mdi mdi-email' /> ronelprhone@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='column small-12'>
            {links}
          </div>
        </div>
      </header>
    );
  }
});

export default Header;
