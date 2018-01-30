import React from 'react';
import { lighten, darken } from 'polished';
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds
} from 'arwes';

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

const generateColor = color => ({
  base: color,
  light: lighten(0.2, color),
  dark: darken(0.2, color),
});
const generateBackground = color => ({
  level0: color,
  level1: lighten(0.015, color),
  level2: lighten(0.030, color),
  level3: lighten(0.045, color),
});
const theme = {
  animTime: 300,
  color: {
    primary: generateColor('#30fffe'),
  },
  background: {
    primary: generateBackground('#031212'),
  },
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
    <ThemeProvider theme={createTheme(theme)}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Template>
          <App resources={resources} {...props} />
        </Template>
      </SoundsProvider>
    </ThemeProvider>
  );
};
