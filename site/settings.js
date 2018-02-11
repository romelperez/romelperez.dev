const projects = require('./data/projects');
const talk1 = require('./data/testing-javascript');
const talk2 = require('./data/css-in-js-with-jss-and-react');

const baseTitle = 'Romel Pérez - Personal Website';
module.exports.titles = {
  '/projects': `Projects | ${baseTitle}`,
  '/': baseTitle,
};

module.exports.googleAnalytics = 'UA-50433259-1';

module.exports.projects = projects;

module.exports.talks = [talk1, talk2];

module.exports.default = {};
