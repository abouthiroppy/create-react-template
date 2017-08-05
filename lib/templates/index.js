'use strict';

const fs         = require('fs-extra');
const Handlebars = require('Handlebars');

function createCode(fileName, name, templatePath, data) {
  return new Promise((resolve, reject) => {
    fs.readFile(templatePath, 'utf8', (err, code) => {
      if (err) reject(err);

      const template = Handlebars.compile(code);
      const createdCode = template(Object.assign({}, data, { name }));

      resolve({
        name: fileName,
        code: createdCode
      });
    });
  });
}

module.exports = createCode;
