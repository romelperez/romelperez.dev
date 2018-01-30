import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, Appear, Words } from 'arwes';

const styles = () => ({
  root: {
    display: 'inline-block',
    textAlign: 'left',
  },
});

const TextIcon = props => {
  const {
    theme,
    classes,
    show,
    icon,
    className,
    children,
    ...etc
  } = props;
  const cls = cx(classes.root, className);

  return (
    <div className={cls} {...etc}>
      <Appear animate show={show}>
        <i className={`mdi mdi-${icon}`} />
      </Appear>
      {' '}
      <Words animate show={show}>{children}</Words>
    </div>
  );
};

TextIcon.propTypes = {
  show: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default withStyles(styles)(TextIcon);
