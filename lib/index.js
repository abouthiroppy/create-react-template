'use strict';

const chalk         = require('chalk');
const inquirer      = require('inquirer');
const templatesList = require('./list');
const story         = require('./stories');
const template      = require('./templates');
const createFile    = require('./utils/createFile');

let templateName;

Promise
  .resolve()
  .then(() => inquirer.prompt(templatesList))
  .then((t) => selectStory(t))
  .then((ans) => templateRouter(ans))
  .then((arr) => createFile(arr))
  .then(() => console.log(chalk.cyan('finish!')))
  .catch((err) => console.error(chalk.red(err)));

/**
 * select the story
 * @param {Object} t - generated by inquirer
 * @return {Promise}
 */
function selectStory(t) {
  templateName = t.template;
  return inquirer.prompt(story[templateName]);
}

/**
 * the router for templates
 * @param {Object} ans - the story's reply
 * @return {Promise | Error} inquirer Object
 */
function templateRouter(ans) {
  const obj = Object.assign({
    type: templateName
  }, ans);

  switch(templateName) {
    case 'pComponent':
    case 'cComponent':
      return template.component(obj);
    default:
      throw new TypeError('Invalid argument');
  }
}