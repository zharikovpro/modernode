const chai = require('chai');
chai.should();

const hello = require('./../src/hello.js');

describe('ModerNode', () => {
  describe('hello()', () => {
    it('should return greeting', () => {
      hello().should.equal('Hello, world! Meet the ModerNode!');
    });
  });
});
