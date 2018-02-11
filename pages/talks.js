import React from 'react';
import Router from 'next/router';
import { Arwes } from 'arwes';

import withTemplate from '../site/withTemplate';

class Talks extends React.Component {

  constructor () {
    super(...arguments);
    this.state = {
      animLvl1: false
    };
  }

  componentDidMount () {
    const { talkId } = this.props.url.query;
    if (!talkId) {
      Router.push('/projects');
    } else {
      this.setState({ animLvl1: true });
    }
  }

  render () {
    const { talkId } = this.props.url.query;
    const { animLvl1 } = this.state;
    return (
      <Arwes
        animate
        show={animLvl1}
      >
        <div>Talks {talkId}!!!</div>
      </Arwes>
    );
  }
}

export default withTemplate(Talks);
