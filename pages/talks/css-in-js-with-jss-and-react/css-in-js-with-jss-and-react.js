export default {
  slides: [
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/css-in-js-with-jss-and-react.jpg' }
      }, {
        element: 'Heading',
        props: { 'node': 'h1' },
        children: 'CSS in JS with JSS and React'
      }, {
        element: 'Paragraph',
        children: 'Style scalable web applications with the CSS in JavaScript implementation JSS using ReactJS components.'
      }, {
        element: 'Paragraph',
        children: [{
          element: 'Link',
          props: { 'href': 'https://medium.com/jobsity/css-in-javascript-with-jss-and-react-54cdd2720222', 'target': '_blank' },
          children: 'Written version'
        }, {
          element: 'span',
          children: ' & '
        }, {
          element: 'Link',
          props: { 'href': 'https://www.youtube.com/watch?v=ktitn27MfpI', 'target': '_blank' },
          children: 'Spoken Version'
        }]
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/shack.jpg' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2' },
        children: 'Styling Static Pages'
      }, {
        element: 'Paragraph',
        children: "Back in the 90's when CSS was created, pages were static and the web was not so popular. Using simple selectors and a couple of properties were pretty much enough."
      }]
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/altavista-2001.png' }
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/city.jpg' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Times Have Changed'
      }, {
        element: 'Paragraph',
        children: 'Nowadays we have \'web applications\' with complex user interfaces giving immersive experiences to users.'
      }]
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/real-apps.jpg' }
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/bear.jpg' },
      children: [{
        element: 'Heading',
        props: { 'node': 'h1' },
        children: '\"CSS is like a bear, cute when baby but will eat you when grown up\"'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Modularity'
      }, {
        element: 'Paragraph',
        children: 'Global pollution and specificity management.'
      }, {
        element: 'Code',
        props: { type: 'pre', language: 'sass' },
        children: `// Your modular code
.button {
  border: 1px solid cyan;
  background-color: black;
  color: cyan;
  font-size: 1rem;
}
// Fixing problems like a boss
.accordion .container .button {
  color: blue;
  font-size: 0.875rem;
}`
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/package.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Publishing'
      }, {
        element: 'Paragraph',
        children: 'Extra setup and workflow process with preprocessors or build tools. Lack of dependency management. Still global pollution.'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/rocket.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Optimizations'
      }, {
        element: 'Paragraph',
        children: 'Critical CSS, dead code elimination, vendor prefixing and factorization.'
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'Theming'
      }, {
        element: 'Paragraph',
        children: 'Dynamic settings and runtime interaction.'
      }, {
        element: 'Code',
        props: { type: 'pre', language: 'sass' },
        children: `$theme-primary: cyan;
$theme-secondary: blue;
.button {
  border: 1px solid $theme-primary;
  background-color: black;
  color: $theme-primary;
  font-size: 1rem;
}
.button--secondary {
  color: $theme-secondary;
  border-color: $theme-secondary;
}`
      }]
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h3' },
        children: 'And more...'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/css-enhancing-tools.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2' },
        children: 'CSS Enhancing Tools'
      }, {
        element: 'Paragraph',
        children: 'So, what are the current solutions to those new problems?'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/react.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2' },
        children: 'HTML in JavaScript'
      }, {
        element: 'Paragraph',
        children: 'The full potential of JavaScript to generate the markup!'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/technologies.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2' },
        children: 'CSS in JavaScript'
      }, {
        element: 'Paragraph',
        children: 'The full potential of JavaScript to generate the styles!'
      }]
    },
    {
      children: [{
        element: 'ImagePlain',
        props: { src: '/static/talks/css-in-js-with-jss-and-react/jss-and-react.png' }
      }, {
        element: 'Heading',
        props: { 'node': 'h2' },
        children: 'JSS in React'
      }, {
        element: 'Paragraph',
        children: 'CSSinJS is a concept kinda open. JSS is one solution with many powerful and extensive features along with React.'
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());
const styles = {
  button: {
    background: 'red',
    color: 'white',
    fontSize: 12
  },
  ctaButton: {
    composes: '$button',
    background: 'blue',
    fontWeight: 'bold'
  }
};
const { classes } = jss.createStyleSheet(styles).attach();
document.body.innerHTML = \`
  <button class=\'\${classes.button}\'>Button</button>
  <button class=\'\${classes.ctaButton}\'>CTA Button</button>
\`;`
      }]
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/css-in-js-1.jpg' }
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `// index.js
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-jss';
import Button from './Button';
const mainTheme = {
  colorPrimary: 'blue',
  colorActive: 'red'
};
const App = () => (
  <ThemeProvider theme={mainTheme}>
    <div>
      <Button>Button</Button>
      <Button active>Active Button</Button>
    </div>
  </ThemeProvider>
);
render(<App />, document.querySelector('#root'));`
      }]
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `// Button.js
import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';
const styles = theme => ({
  root: {
    background: theme.colorPrimary,
    color: 'white',
    fontSize: 16
  },
  active: {
    background: theme.colorActive,
    fontWeight: 'bold'
  }
});
class Button extends React.Component {
  render () {
    const {
      classes, theme,
      className, children, active,
      ...etc
    } = this.props;
    const cls = cx(
      classes.root,
      active && classes.active,
      className
    );
    return (
      <button className={cls} {...etc}>
        {children}
      </button>
    );
  }
}
export default withStyles(styles)(Button);`
      }]
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/css-in-js-2.jpg' }
    },
    {
      children: [{
        element: 'Code',
        props: { 'type': 'pre', 'language': 'javascript' },
        children: `const styles = theme => ({
  root: {
    color: 'white',
    fontSize: 16,
    background: props => props.active
      ? theme.colorActive
      : theme.colorPrimary,
    fontWeight: props => props.active && 'bold'
  }
});
class Button extends React.Component {
  render () {
    const {
      classes, theme,
      className, children, active,
      ...etc
    } = this.props;
    const cls = cx(classes.root, className);
    return (
      <button className={cls} {...etc}>
        {children}
      </button>
    );
  }
}`
      }]
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/css-in-js-3.jpg' }
    },
    {
      children: [{
        element: 'Heading',
        props: { 'node': 'h2' },
        children: 'UI Frameworks'
      }]
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/material-ui.png' }
    },
    {
      props: { bgImage: '/static/talks/css-in-js-with-jss-and-react/arwes.jpg' }
    },
    {
      children: [{
        element: 'Link',
        props: {
          'href': 'https://romelperez.com',
          'target': '_blank',
          'style': {
            'fontSize': '80px',
            'fontWeight': 'bold'
          }
        },
        children: 'RomelPerez.com'
      }]
    }
  ]
};
