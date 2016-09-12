/* eslint-env browser, es6, eslint-sourceType module */
import 'babel-polyfill';

import helloWorld from './src/javascripts/lib/helloWorld';
import render from './src/javascripts/lib/template';

document
  .querySelector('main')
    .textContent = helloWorld();

document
  .querySelector('main')
  .appendChild(render({
    label: 'First Name',
    id: 'first-name',
    value: 'James',
  }));

document
  .querySelector('main')
  .appendChild(render({
    checked: true,
    label: 'I agree to the terms and conditions',
    id: 'terms',
    value: 'yes',
    type: 'checkbox',
  }));

