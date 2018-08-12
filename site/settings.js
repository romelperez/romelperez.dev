const projects = require('./data/projects');

const baseTitle = 'Romel Pérez - Personal Website';
module.exports.titles = {
  '/projects': `Projects | ${baseTitle}`,
  '/': baseTitle,
};

module.exports.googleAnalytics = 'UA-50433259-1';

module.exports.projects = projects;

module.exports.default = {};
