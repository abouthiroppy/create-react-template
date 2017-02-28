'use strict';

const configureStore = () => (
  `import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const configureStore = process.env.NODE_ENV !== 'production' ?
  configureStoreDev :
  configureStoreProd;

export default configureStore;`
);

const configureStoreDev = (obj) => (
  `import { createStore, applyMiddleware, compose } from 'redux';${obj.hasReduxLogger ? '\nimport createLogger from \'redux-logger\';' : ''}
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// e.g. redux-saga
const middlewares = [
  createLogger()
];

const enhancer = compose(
  composeWithDevTools(applyMiddleware(...middlewares))
);

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};

export default configureStore;`
);

const configureStoreProd = () => (
  `import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

// e.g. redux-saga
const middlewares = [
];

const enhancer = compose(applyMiddleware(...middlewares));

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};

export default configureStore;`
);

const router = (obj) => {
  return [
    {
      name: 'configureStore.js',
      code: configureStore()
    },
    {
      name: 'configureStore.dev.js',
      code: configureStoreDev(obj)
    },
    {
      name: 'configureStore.prod.js',
      code: configureStoreProd()
    }
  ];
};

module.exports = router;
