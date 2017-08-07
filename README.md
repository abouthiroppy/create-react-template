# create-react-template

Create various templates.

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->
<!-- npm version badge: https://badge.fury.io/ -->

## Install
```
$ npm install create-react-template
```

## Usage
```
$ create-react-template
```

## Templates
- Container Component
- Presentational Component
- Store
- Middleware

### Container
```javascript
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(actions.updateName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(/* component's name */);
```

### Component
Create `index.js`, `Component.js`, `style.css`(optional).

#### index.js
```javascript
export default from './Componet';
```

#### style.css
```css
.container {
}
```

#### Component(stateless)
```javascript
import React from 'react';
import styles from './style.css';

const Component = (props) => (
  <div className={styles.container}>
  </div>
);

export default Component;
```

#### Component
```javascript
import React from 'react';
import styles from './style.css';

class Component extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
      </div>
    );
  }
}

export default Component;
```

### Middleware
```javascript
const middleware = (store) => (next) => (action) => {
};

export default middleware;
```

### Store
You can select redux-saga and redux-devtools.

Create `configureStore.js`, `configureStore.dev.js`, `configureStore.prod.js`.

#### configureStore.js
```javascript
import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const configureStore = process.env.NODE_ENV !== 'production' ?
  configureStoreDev :
  configureStoreProd;

export default configureStore;
```

#### configureStore.dev.js
```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import rootReducer from '../reducers';
import mySaga from '../sagas';

const saga = createSaga();

const createEnhancer = () => {
  const appliedMiddlewares = applyMiddleware(
    saga
  );

  const reduxDevtoolsExtensionsCompose
    = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (reduxDevtoolsExtensionsCompose) {
    const devtoolsExtensionCompose = reduxDevtoolsExtensionsCompose({
      actionsBlacklist: []
    });

    return compose(devtoolsExtensionCompose(appliedMiddlewares));
  }
  else {
    return compose(appliedMiddlewares);
  }
};

const configureStore = (initialState) => {
  const enhancer = createEnhancer();
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);
  return store;
};

export default configureStore;
```

#### configureStore.prod.js
```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import createSaga from 'redux-saga';
import rootReducer from '../reducers';
import mySaga from '../sagas';

const saga = createSaga();

const enhancer = compose(applyMiddleware(
  saga
));

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(mySaga);
  return store;
};

export default configureStore;
```
