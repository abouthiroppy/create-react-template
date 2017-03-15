'use strict';

const base = (fileName) => (
  `const ${fileName} = (store) => (next) => (action) => {
};

export default ${fileName};`
);

const router = (obj) => {
  const fileName = obj.name;

  const baseFile = {
    name: ~fileName.indexOf('.js') ? fileName : `${fileName}.js`,
    code: base(fileName)
  };

  return [baseFile];
};

module.exports = router;
