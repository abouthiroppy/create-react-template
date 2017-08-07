'use strict';

const question = [
  {
    type   : 'confirm',
    name   : 'hasSaga',
    message: 'Do you use redux-saga?'
  },
  {
    type   : 'confirm',
    name   : 'hasReduxDevTools',
    message: 'Do you use redux-devtools-extension at development?'
  }
];

module.exports = question;
