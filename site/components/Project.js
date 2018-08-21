import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { rgba } from 'polished';
import { withStyles, Words, Project as ArwesProject, Appear } from 'arwes';
import arwesProjectStyles from 'arwes/lib/Project/styles';

const ArwesProjectImproved = withStyles(theme => {
  const styles = arwesProjectStyles(theme);
  return {
    ...styles,
    header: {
      ...styles.header,
      paddingRight: 110,
    },
    children: {
      ...styles.children,
      padding: 0,
    },
  };
})(ArwesProject);

const styles = theme => ({
  root: {
    margin: 0,
    textShadow: 'none',
    color: theme.color.primary.base,
    '& p': {
      margin: 0,
      padding: theme.padding,
    },
  },
  stats: {
    margin: [0, theme.margin, theme.margin],
  },
  statsSecondLine: {
    display: 'block'
  },
  stat: {
    display: 'inline-block',
    marginLeft: theme.margin / 2,
    '&:first-of-type': {
      marginLeft: 0,
    },
  },
  image: {
    width: '100%',
    height: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: rgba(theme.color.primary.dark, 0.25),
    verticalAlign: 'middle',
  },

  [`@media screen and (min-width: ${theme.responsive.small + 1}px)`]: {
    statsSecondLine: {
      display: 'inline-block',
      marginLeft: 10
    }
  }
});

function Project (props) {
  const {
    theme,
    classes,
    show,
    type,
    scale,
    date,
    lang,
    at,
    header,
    description,
    image,
    className,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  const icon = type === 'talk'
    ? 'account-multiple-outline'
    : type === 'guide'
      ? 'book'
      : 'code-brackets';

  return (
    <ArwesProjectImproved
      animate
      show={show}
      header={header}
      className={cls}
      icon={
        <span>
          <i className={`mdi mdi-${icon}`} />
          {' ' + type.charAt(0).toUpperCase() + type.substring(1)}
        </span>
      }
      {...etc}
    >
      {anim => (
      <div>
        <p><Words animate show={anim.entered}>
          {description}
        </Words></p>
        <Appear animate show={anim.entered} className={classes.stats}>
          <div className={classes.stat}>
            <i className={'mdi mdi-circle' + (scale > 0 ? '' : '-outline')} />
            <i className={'mdi mdi-circle' + (scale > 1 ? '' : '-outline')} />
            <i className={'mdi mdi-circle' + (scale > 2 ? '' : '-outline')} />
          </div>
          <div className={classes.stat}>
            <i className='mdi mdi-calendar' />
            {' '}
            {date}
          </div>
          <div className={classes.stat}>
            <i className='mdi mdi-file-document-box' />
            {' '}
            {lang.toUpperCase()}
          </div>
          <div className={classes.statsSecondLine}>
            {!!at && (
            <div className={classes.stat}>
              <i className='mdi mdi-map-marker' />
              {' '}
              {at}
            </div>
            )}
          </div>
        </Appear>
        {!!image && (
        <Appear
          style={{ backgroundImage: `url(${image})` }}
          className={classes.image}
          animate
          show={anim.entered}
        />
        )}
      </div>
      )}
    </ArwesProjectImproved>
  );
}

Project.propTypes = {
  show: PropTypes.bool,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['code', 'talk', 'guide']).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  scale: PropTypes.number,
  lang: PropTypes.string,
  at: PropTypes.string
};

Project.defaultProps = {
  scale: 0,
  lang: 'en',
};

export default withStyles(styles)(Project);
