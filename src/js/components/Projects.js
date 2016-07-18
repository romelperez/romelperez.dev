import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Motion, spring, StaggeredMotion, presets } from 'react-motion';
import _ from 'lodash';
import { Card, Selector } from 'prhone-gui';
import constants from '../constants.js';
import store from '../store.js';
import sound from '../utils/sound.js';

const Projects = React.createClass({

  springHelper: {
    damping: 30,
    stiffness: 300
  },

  getInitialStyles (range) {
    return _.range(range).map((s, i) => {
      return {
        y: 100,
        o: 0
      };
    });
  },

  getStyles (prevStyles) {
    return prevStyles.map((s, i) => {
      return i === 0 ?
        {
          y: spring(0, this.springHelper),
          o: spring(1, this.springHelper)
        } :
        {
          y: spring(prevStyles[i-1].y, this.springHelper),
          o: spring(prevStyles[i-1].o, this.springHelper)
        };
    });
  },

  componentDidMount () {
    $('.rp-projects-header .pr-box').on('mouseenter', e => {
      sound.play('over', {volume: constants.volumeMinor});
    });
  },

  getCard (list, types, index, styles) {

    const project = list[index];

    if (project._hide) return;

    const star = project.weight === 1 ? 'star' : project.weight === 2 ? 'star-half' : 'star-outline';
    const date = project.date.substring(0, 7);
    const lang = project.lang.toUpperCase();
    const type = _(types).find(type => type.id === project.type);
    const setStyles = styles ? { transform: `translateY(${styles.y}px)`, opacity: styles.o } : null;
    const info = (
      <div>
        <i className={`mdi mdi-${star}`} />
        {' '}
        {project.lang === 'en' ? null : <span><i className='mdi mdi-note-text' /> {lang} </span>}
        {' '}
        <time dateTime={project.date}><i className='mdi mdi-calendar' /> {date}</time>
        {' '}
        <span><i className={`mdi mdi-${type.icon}`} /> {type.name}</span>
      </div>
    );

    const onMouseEnter = e => sound.play('over', {volume: constants.volumeMinor});

    return (
      <div key={project.id} style={setStyles} onMouseEnter={onMouseEnter}>
        <Card title={project.name} href={project.link} target='_blank'
        info={info} lang={project.lang === 'en' ? null : project.lang}>
          <p>{project.description}</p>
        </Card>
      </div>
    );
  },

  render () {

    const state = store.getState().toJS();
    const list = state.projects.reverse();
    const types = state.projectTypes;
    const range = list.length === 0 ? 0 : list.length;
    const headerAnim = state.loaded ? 'rp-projects-header_anim' : '';
    const cards = (
      state.loaded ? (
        <StaggeredMotion defaultStyles={this.getInitialStyles(range)} styles={this.getStyles}>
          {interpolatingStyles =>
            <div>
              {interpolatingStyles.map((styles, i) => {
                return this.getCard(list, types, i, styles);
              })}
            </div>
          }
        </StaggeredMotion>
      ) : (
        _.range(range).map((r, i) => {
          return this.getCard(list, types, i);
        })
      )
    );

    return (
      <main className='rp-projects'>

        <div className={`rp-projects-header row align-middle ${headerAnim}`}>
          <div className='column small-6'>
            <h2>Projects</h2>
          </div>
          <div className='rp-selector column small-6'>
            <Selector options={types} onChange={this.onFilter} />
          </div>
        </div>

        <div className='row'>
          <div className='column small-12'>
            {cards}
          </div>
        </div>

      </main>
    );
  },

  onFilter (e, id) {
    store.dispatch({ type: 'FILTER', id });
  }
});

export default Projects;
