'use strict';

const question = [
  {
    type    : 'input',
    name    : 'name',
    message : 'filename',
    validate: (s) => /^[a-zA-Z]/.test(s)
  }
];

module.exports = question;
