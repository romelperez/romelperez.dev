import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles, Footer as ArwesFooter, Row } from 'arwes';

import TextIcon from './TextIcon';
import Wrap from './Wrap';
import Link from './Link';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  wrap: {
    padding: [theme.padding, 0],
  },
  content: {},
  left: {
    marginBottom: theme.margin / 2,
  },
  right: {},
  // medium +
  [`@media screen and (min-width: ${theme.responsive.small + 1}px)`]: {
    root: {
      textAlign: 'left',
    },
    content: {
      display: 'flex',
    },
    left: {
      margin: 0,
      flex: '1 1 auto',
    },
    right: {
      flex: '1 1 auto',
      textAlign: 'right',
    },
  }
});

const Footer = props => {
  const {
    theme,
    classes,
    className,
    onLink,
    ...etc
  } = props;
  const cls = cx(classes.root, className);

  return (
    <ArwesFooter className={cls} {...etc}>
      {anim => (
      <Wrap className={classes.wrap}>
        <Row noMargin col s={12}>
          <div className={classes.content}>
            <div className={classes.left}>
                <Link href='https://github.com/romelperez/romelperez.dev/blob/master/LICENSE' target='license' onLink={onLink}>
                <TextIcon show={anim.entered} icon='copyright'>2021 Romel Pérez</TextIcon>
              </Link>
            </div>
            <div className={classes.right}>
              <Link href='https://arwes.dev' target='arwes' onLink={onLink}>
                <TextIcon show={anim.entered} icon='chemical-weapon'>Made with Arwes</TextIcon>
              </Link>
            </div>
          </div>
        </Row>
      </Wrap>
      )}
    </ArwesFooter>
  );
};

Footer.propTypes = {
  onLink: PropTypes.func,
};

export default withStyles(styles)(Footer);
