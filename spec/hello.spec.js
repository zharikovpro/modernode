const hello = require('./../src/hello.js');

describe('ModerNode', () => {
  describe('hello()', () => {
    test('returns greeting', () => {
      expect(hello()).toBe('Hello, world! Meet the ModerNode!');
    });
  });
});
