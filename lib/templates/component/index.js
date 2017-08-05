'use strict';

const container      = require('./container');
const presentational = require('./presentational');

const router = (obj) => {
  switch (obj.type) {
    case 'pComponent':
      return presentational(obj.name, obj.hasStyle, obj.isStateless);
    case 'cComponent':
      return container(obj.name);
  }
};

module.exports = router;
