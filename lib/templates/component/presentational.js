'use strict';

const ucfirst = require('../../utils/ucfirst');

const createStyle = (fileName) => (
  `import styles from './${fileName}.style.css';\n`
);

const stateless = (fileName, hasStyle) => (
  `import React from 'react';
${hasStyle ? createStyle(fileName) : ''}
const ${ucfirst(fileName)} = (props) => (
  <div>
  </div>
);

export default ${ucfirst(fileName)};
`
);

const common = (fileName, hasStyle) => (
  `import React from 'react';
${hasStyle ? createStyle(fileName) : ''}
class ${ucfirst(fileName)} extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
);

export default ${ucfirst(fileName)};
`
);

const index = (fileName) => (
  `export default './${ucfirst(fileName)}';`
);

const style = () => (
  `.container {
}`
);

const router = (fileName, hasStyle, isStateless) => {
  const indexFile = {
    name: 'index.js',
    code: index(fileName)
  };
  const viewFile = {
    name: `${ucfirst(fileName)}.js`,
    code: isStateless ? stateless(fileName, hasStyle) : common(fileName, hasStyle)
  };
  const styleFile = hasStyle ? {
    name: `${fileName}.style.css`,
    code: style()
  } : {};

  return [indexFile, viewFile, styleFile];
};

module.exports = router;
