'use strict';

const fs         = require('fs-extra');
const Handlebars = require('handlebars');

/**
 * create a real code
 * @param {string} fileName
 * @param {string} templatePath
 * @param {Object} data
 * @return {string}
 *
 */
function createCode(fileName, templatePath, data = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(templatePath, 'utf8', (err, code) => {
      if (err) reject(err);

      const template = Handlebars.compile(code);
      const createdCode = template(Object.assign({}, data));

      resolve({
        name: fileName,
        code: createdCode
      });
    });
  });
}

module.exports = createCode;
