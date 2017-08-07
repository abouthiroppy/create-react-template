'use strict';

const question = [
  {
    type    : 'input',
    name    : 'name',
    message : 'filename',
    validate: (s) => /^[a-zA-Z]/.test(s)
  },
  {
    type   : 'confirm',
    name   : 'isStateless',
    message: 'stateless'
  },
  {
    type   : 'confirm',
    name   : 'hasStyle',
    message: 'css'
  }
];

module.exports = question;
