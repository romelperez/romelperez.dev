import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles, Image, Words } from 'arwes';

import Link from './Link';

const styles = theme => ({
  root: {
    display: 'inline-block',
    textAlign: 'left',
    '& h1': {
      display: 'inline-block',
      margin: [0, 0, 0, theme.padding / 2],
      paddingTop: 4,
      lineHeight: 1,
      fontSize: 28,
      verticalAlign: 'middle',
    }
  },
  profile: {
    display: 'inline-block',
    margin: 0,
    width: 45,
  },
});

function Brand (props) {
  const {
    theme,
    classes,
    show,
    onLink,
    className,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  return (
    <Link className={cls} href='/' onLink={onLink} {...etc}>
      <Image
        className={classes.profile}
        animate
        show={show}
        resources='/static/img/profile.jpg'
      />
      <h1><Words animate show={show}>
        Romel Pérez
      </Words></h1>
    </Link>
  );
}

Brand.propTypes = {
  onLink: PropTypes.func,
  show: PropTypes.bool,
};

export default withStyles(styles)(Brand);
