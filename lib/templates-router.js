'use strict';

const path = require('path');
const template = require('./templates');

/**
 * the router for templates
 * @param {Object} ans - the story's reply
 * @return {Promise | Error} inquirer Object
 */
function router(templateName, ans) {
  switch (templateName) {
    case 'store':
      console.log('Create 3 files for configureStore.');

      return Promise.all([
        template(
          'configureStore.js',
          path.join(__dirname, './templates/store/configureStore')
        ),
        template(
          'configureStore.dev.js',
          path.join(__dirname, './templates/store/configureStoreDev'),
          ans
        ),
        template(
          'configureStore.prod.js',
          path.join(__dirname, './templates/store/configureStoreProd'),
          ans
        )
      ]);
    case 'pComponent':

      // console.log('Create 3 files.');

      const common = [
        template(
          `${ans.name}.js`,
          path.join(__dirname, './templates/component/presentational'),
          ans
        ),
        template(
          'index.js',
          path.join(__dirname, './templates/component/index')
        )
      ];

      if (ans.hasStyle) {
        common.push(template(
          'style.css',
          path.join(__dirname, './templates/component/style')
        ));
      }

      return Promise.all(common);
    case 'cComponent':
      return template(
        `${ans.name}.js`,
        path.join(__dirname, './templates/component/container')
      );
    case 'middleware':
      return template(
        `${ans.name}.js`,
        path.join(__dirname, './templates/middleware/middleware'),
        ans
      );
    default:
      throw new TypeError('Invalid argument');
  }
}

module.exports = router;
