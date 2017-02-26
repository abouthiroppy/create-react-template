'use strict';

const inquirer = require('inquirer');

const question = [
  {
    type   : 'confirm',
    name   : 'hasReduxLogger',
    message: 'Do you use redux-logger at development?'
  },
  {
    type   : 'confirm',
    name   : 'hasReduxDevTools',
    message: 'Do you use redux-devtools-extension at development?'
  }
];

module.exports = question;
