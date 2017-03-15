'use strict';

const inquirer = require('inquirer');

const question = [
  {
    type    : 'input',
    name    : 'name',
    message : 'filename',
    validate: (s) => /^[a-zA-Z]/.test(s)
  }
];

module.exports = question;
