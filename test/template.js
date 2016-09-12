/* eslint-env browser, mocha, es6 */
import 'jsdom-global/register';
import render from '../src/javascripts/lib/template';

const assert = require('assert');

describe('#render()', () => {
  it('should be a function', () => {
    assert.equal(typeof render, 'function');
  });
  it('should return a DocumentFragment', () => {
    assert.ok(render({
      id: 1,
      label: 'Name',
      type: 'text',
    }) instanceof DocumentFragment);
  });
});
