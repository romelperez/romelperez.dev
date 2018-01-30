import React from 'react';
import cx from 'classnames';
import { withStyles, Header as ArwesHeader, Row, Col } from 'arwes';

import Wrap from './Wrap';
import Brand from './Brand';
import Navigation from './Navigation';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  wrap: {
    padding: [theme.padding, 0],
  },
  links: {
    marginTop: theme.padding / 2,
  },
  [`@media (min-width: ${theme.responsive.small + 1}px)`]: {
    root: {
      textAlign: 'left',
    },
    links: {
      marginTop: 0,
      textAlign: 'right',
    },
  },
});

const Header = props => {
  const {
    theme,
    classes,
    className,
    onLink,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  return (
    <ArwesHeader
      animate
      className={cls}
      {...etc}
    >
      {anim => (
      <Wrap className={classes.wrap}>
        <Row noMargin>
          <Col s={12} m={6}>
            <Brand show={anim.entered} onLink={onLink} />
          </Col>
          <Col s={12} m={6} className={classes.links}>
            <Navigation show={anim.entered} onLink={onLink} />
          </Col>
        </Row>
      </Wrap>
      )}
    </ArwesHeader>
  );
};

export default withStyles(styles)(Header);
