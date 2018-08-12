import React from 'react';
import Router from 'next/router';

class Talks extends React.Component {
  componentDidMount () {
    Router.push('/projects');
  }

  render () {
    return <div />;
  }
}

export default Talks;
