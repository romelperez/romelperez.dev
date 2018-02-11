import React from 'react';
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds
} from 'arwes';

import createAppTheme from './createAppTheme';
import Template from './components/Template';

const resources = {
  background: {
    small: '/static/img/background-small.jpg',
    medium: '/static/img/background-medium.jpg',
    large: '/static/img/background-large.jpg',
    xlarge: '/static/img/background-xlarge.jpg'
  },
  pattern: '/static/img/glow.png',
};

const sounds = {
  shared: {
    volume: 0.6,
  },
  players: {
    click: {
      sound: { src: ['/static/sound/click.mp3'] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ['/static/sound/typing.mp3'] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ['/static/sound/deploy.mp3'] },
      settings: { oneAtATime: true }
    },
  }
};

export default (App) => {
  return (props) => (
    <ThemeProvider theme={createTheme(createAppTheme())}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Template>
          <App resources={resources} {...props} />
        </Template>
      </SoundsProvider>
    </ThemeProvider>
  );
};
