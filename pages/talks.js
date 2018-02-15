import React from 'react';
import Router from 'next/router';
import {
  withStyles,
  ThemeProvider,
  createTheme,
  Arwes,
  Appear as ArwesAppear,
  Words as ArwesWords,
  Image as ArwesImage,
  Heading,
  Paragraph,
  Link,
  List,
  Code
} from 'arwes';
import createSpectacleThemeScreen from 'spectacle/lib/themes/default/screen';
import createSpectacleThemePrint from 'spectacle/lib/themes/default/print';

import { projects, talks } from '../site/settings';
import createAppTheme from '../site/createAppTheme';
import withTemplate from '../site/withTemplate';

let Deck, Slide,
  Appear, BlockQuote, Cite, CodePane, Fill, Fit,
  Image, Layout, ListItem, Quote;

const styles = () => ({
  '@global': {
    'div.spectacle-slide': {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
  },
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  }
});

class Talks extends React.Component {

  constructor () {
    super(...arguments);
    this.state = {
      theme: {},
      spectacleTheme: null,
      animLvl1: false,
    };
  }

  componentDidMount () {
    this.defineTheme();
    this.defineSpectacleTheme();
    this.importSpectacle();

    const { talkKey } = this.props.url.query;
    const project = projects.find(item => item.key === talkKey);
    const talk = project && talks.find(item => item.id === project.talkId);

    if (project && talk) {
      this.setState({ animLvl1: true });
    } else {
      Router.push('/projects');
    }
  }

  render () {
    const { talkKey } = this.props.url.query;
    const { classes } = this.props;

    const { theme, spectacleTheme, animLvl1 } = this.state;

    const project = projects.find(item => item.key === talkKey);
    const talk = project && talks.find(item => item.id === project.talkId);

    return (
      <ThemeProvider theme={theme}>
        <Arwes
          animate
          show={animLvl1 && !!talk}
          puffsProps={{ animate: false }}
        >
          <div className={classes.root}>
            {animLvl1 && (
            <Deck progress='bar' theme={spectacleTheme} {...talk.deck}>

              {(talk.slides || []).map((slide, index) => (
              <Slide key={index} {...slide.props}>
                {(slide.children || []).map((child, index2) => (
                  this.createElement(child, `S${index}C${index2}`)
                ))}
              </Slide>
              ))}

            </Deck>
            )}
          </div>
        </Arwes>
      </ThemeProvider>
    );
  }

  createElements (elements, key) {
    return elements.map((item, index) => this.createElement(item, `${key}C${index}`));
  }

  createElement (opts, key) {
    if (Array.isArray(opts)) {
      return this.createElements(opts, key);
    }

    if (typeof opts === 'string') {
      return <ArwesWords animate>{opts}</ArwesWords>;
    }

    const { element, props, children } = opts;
    switch (element) {
      case 'ImagePlain': return (
        <ArwesAppear key={key} animate>
          <Image {...props} />
        </ArwesAppear>
      );
      case 'Image': return (
        <ArwesImage key={key} animate {...props} />
      );
      case 'Heading': return (
        <Heading key={key} {...props}>{this.createElement(children)}</Heading>
      );
      case 'Paragraph': return (
        <Paragraph key={key} {...props}>{this.createElement(children)}</Paragraph>
      );
      case 'Link': return (
        <Link key={key} {...props}>{this.createElement(children)}</Link>
      );
      case 'List': return (
        <List key={key} {...props}>{this.createElement(children)}</List>
      );
      case 'Code': return (
        <Code key={key} animate {...props}>{children}</Code>
      );
      default: return (
        React.createElement(element, { key, ...props }, this.createElement(children))
      );
    }
  }

  defineTheme () {
    const theme = createTheme(createAppTheme({
      typography: {
        headerSizes: {
          h1: 56,
          h2: 46,
          h3: 42,
          h4: 36,
          h5: 28,
          h6: 24,
        },
        fontSize: 36,
      },
      code: {
        fontSize: 26,
      },
    }));
    this.setState({ theme });
  }

  defineSpectacleTheme () {
    const { theme } = this.props;
    const fonts = {
      primary: theme.background.primary.level0,
      secondary: theme.color.primary.base,
      tertiary: theme.color.header.base,
      quarternary: theme.color.primary.dark,
    };
    const colors = {
      primary: theme.typography.fontFamily,
      secondary: theme.typography.headerFontFamily,
      tertiary: theme.code.fontFamily,
    };
    const spectacleTheme = {
      screen: createSpectacleThemeScreen(fonts, colors),
      print: createSpectacleThemePrint(),
    };
    spectacleTheme.screen = {
      ...spectacleTheme.screen,
      global: {
        body: {},
        '_:-moz-tree-row(hover), .spectacle-deck': {
          perspective: '1000px'
        },
        '_:-moz-tree-row(hover), ul .appear': {
          display: 'inline'
        },
      },
      components: {
        ...spectacleTheme.screen.components,
        image: {
          display: 'block',
          margin: '0 auto 20px',
        },
      },
    };
    this.setState({ spectacleTheme });
  }

  /**
   * Conditional importing in the client-side. due to problems in server-side.
   */
  importSpectacle () {
    const spectacle = require('spectacle');
    Deck = spectacle.Deck;
    Slide = spectacle.Slide;
    Appear = spectacle.Appear;
    BlockQuote = spectacle.BlockQuote;
    Cite = spectacle.Cite;
    CodePane = spectacle.CodePane;
    Fill = spectacle.Fill;
    Fit = spectacle.Fit;
    Image = spectacle.Image;
    Layout = spectacle.Layout;
    ListItem = spectacle.ListItem;
    Quote = spectacle.Quote;
  }
}

export default withTemplate(withStyles(styles)(Talks));
