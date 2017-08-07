'use strict';

const fs = require('fs-extra');

/**
 * root
 * @param {Array<Object.name>} arr - filename
 * @param {Array<Object.code>} arr - code
 * @return {Promise}
 */
function createFile(codes) {
  if (Array.isArray(codes)) {
    const promises = codes.map((item) => outputFile(item));

    return Promise.all(promises);
  }
  return outputFile(codes);
}

/**
 * root
 * @param {Object.name} file - filename
 * @param {Object.code} file - code
 * @return {Promise}
 */
function outputFile(file) {
  if (!(Reflect.has(file, 'name') && Reflect.has(file, 'code'))) return;
  return new Promise((resolve, reject) => {
    fs.outputFile(file.name, file.code, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = createFile;
