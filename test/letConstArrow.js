/* eslint-env mocha, es6 eslint-sourceType module */

const assert = require('assert');

describe('var', () => {
  it('should have function scope', () => {
    /* eslint-disable no-lone-blocks, vars-on-top, no-var */
    {
      var a = 1;
    }
    /* eslint-enable no-lone-blocks, vars-on-top, no-var */

    /* eslint-disable block-scoped-var */
    assert.equal((() => a)(), 1);
    /* eslint-enable block-scoped-var */
  });
});

describe('let', () => {
  it('should have block scope', () => {
    /* eslint-disable no-unused-vars, prefer-const, no-undef */
    {
      let a = 1;
    }

    assert.throws(() => a, ReferenceError);
    /* eslint-enable block-scoped-var, prefer-const, no-undef */
  });
});

describe('const', () => {
  it('should be immutable', () => {
    const a = 1;

    // assert.throws(() => a = 2, SyntaxError); // Error gets thrown at compile time
  });
});

describe('=>', () => {
  it('should return its statement return value', () => {
    assert.equal((() => 1)(), 1);
    assert.equal((() => 'a' && 'b')(), 'b');
    assert.equal((a => [a, 'bar'].join(', '))('foo'), 'foo, bar');
  });
});
