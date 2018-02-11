import { lighten, darken } from 'polished';

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

export default (theme = {}) => ({
  ...theme,
  color: {
    primary: generateColor('#30fffe'),
    ...theme.color
  },
  background: {
    primary: generateBackground('#031212'),
    ...theme.background
  },
});
