/* eslint-env browser, es6, eslint-sourceType module */
import 'babel-polyfill';
import helloWorld from './src/javascripts/lib/helloWorld';

document
  .querySelector('main')
    .textContent = helloWorld();

