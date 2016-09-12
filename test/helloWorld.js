/* eslint-env mocha, es6 eslint-sourceType module */

import helloWorld from '../src/javascripts/lib/helloWorld';

const assert = require('assert');

describe('#helloWorld()', () => {
  it('should be a function', () => {
    assert.equal(typeof helloWorld, 'function');
  });
  it('should return "Hello, world!"', () => {
    assert.equal(helloWorld(), 'Hello, world!');
  });
});
