import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import emergence from 'emergence.js';
import { withStyles, Arwes, Content, Row, Appear, Words } from 'arwes';

import { projects } from '../../site/settings';
import withTemplate from '../../site/withTemplate';
import { Header, Footer, Wrap, Link, Project } from '../../site/components';

const styles = theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    '& $project + $project': {
      marginTop: theme.margin,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  main: {
    flex: 1,
    overflowY: 'auto',
    padding: [theme.padding, 0],
    '& h2': {
      margin: 0,
    },
  },
  project: {
    display: 'block',
  },
  titleRight: {
    float: 'right',
  },
});

class Projects extends React.Component {

  // Reference to main element.
  mainEl: null;

  constructor () {
    super(...arguments);
    this.state = {
      shownIndex: 0,
      // Animations enabled by levels.
      animLvl0: false,
      animLvl1: false,
      animLvl2: false
    };
  }

  componentDidMount () {
    emergence.init({
      container: this.mainEl,
      throttle: 200,
      callback: (element, state) => {
        if (state === 'visible') {
          const newIndex = +element.getAttribute('data-index');
          if (newIndex > this.state.shownIndex) {
            this.setState({ shownIndex: newIndex });
          }
        }
      }
    });

    this.setState({ animLvl0: true });

    setTimeout(() => emergence.engage(), 0);
  }

  render () {
    const { shownIndex, animLvl0, animLvl1, animLvl2 } = this.state;
    const { classes, resources } = this.props;

    const list = projects.
      filter(item => !item.private).
      sort((a, b) => moment(b.date).format('x') - moment(a.date).format('x'));

    return (
      <Arwes
        animate
        show={animLvl0}
        showResources={animLvl0}
        background={resources.background}
        pattern={resources.pattern}
      >
        {anim => (
        <div className={classes.root}>
          <Content className={classes.content}>

            <Header
              animate
              show={anim.entered}
              animation={{
                onEntered: () => this.setState({ animLvl1: true })
              }}
              onLink={this.onLink}
            />

          <div ref={el => (this.mainEl = el)} className={classes.main}>
              <Wrap>
                <Row col s={12}>

                  <h2>
                    <Appear
                      className='mdi mdi-chevron-double-right'
                      animate
                      show={animLvl1}
                      animation={{
                        onEntered: () => this.setState({ animLvl2: true })
                      }}
                    />
                    {' '}
                    <Words animate show={animLvl1}>Projects</Words>
                    <Appear className={cx(classes.titleRight, 'mdi mdi-chevron-double-left')} animate show={animLvl1} />
                  </h2>

                </Row>
                <Row col noMargin s={12}>

                  {list.map((project, index) => (
                  <Link
                    key={project.id}
                    className={classes.project}
                    href={project.link}
                    onLink={this.onLink}
                    target='_blank'
                    data-index={index}
                    data-emergence='hidden'
                  >
                    <Project
                      show={index <= shownIndex && animLvl2}
                      headerSize='h3'
                      header={project.name}
                      description={project.description}
                      type={project.type}
                      scale={project.scale}
                      lang={project.lang}
                      date={moment(project.date).format('YYYY-MM')}
                      at={project.at}
                      image={project.image}
                    />
                  </Link>
                  ))}

                </Row>
              </Wrap>
            </div>

            <Footer
              animate
              show={anim.entered}
              onLink={this.onLink}
            />

          </Content>
        </div>
        )}
      </Arwes>
    );
  }

  onLink = () => {
    this.setState({ animLvl0: false });
  }
}

export default withTemplate(withStyles(styles)(Projects));
