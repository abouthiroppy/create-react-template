'use strict';

const ucfirst = require('../../utils/ucfirst');

const common = () => (
  `import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => {
      dispatch(actions.updateName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(/* component's name */);`
);

const router = (fileName) => {
  return [{
    name: `${ucfirst(fileName)}.js`,
    code: common()
  }];
};

module.exports = router;
