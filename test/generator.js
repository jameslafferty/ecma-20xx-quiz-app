/* eslint-env mocha, es6 eslint-sourceType module */
import generator from '../src/javascripts/lib/generator';

const assert = require('assert');

describe('#generator()', () => {
  let g;
  beforeEach(() => {
    g = generator();
  });
  it('should be a function', () => {
    assert.equal(typeof generator, 'function');
  });
  it('should return an object', () => {
    assert.equal(typeof g, 'object');
  });
  it('should return 1, 2, 3', () => {
    assert.equal(g.next().value, 1);
    assert.equal(g.next().value, 2);
    assert.equal(g.next().value, 3);
  });
});
