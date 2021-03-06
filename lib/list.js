'use strict';

const templates = [
  {
    name : 'Presentational Component',
    value: 'pComponent'
  },
  {
    name : 'Container Component',
    value: 'cComponent'
  },
  {
    name : 'Store',
    value: 'store'
  },
  {
    name : 'Middleware',
    value: 'middleware'
  }
];

const list = [
  {
    type   : 'list',
    name   : 'template',
    message: 'What do you want to make?',
    choices: templates
  }
];

module.exports = list;
