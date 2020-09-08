const Hello = require('../src');

describe('Hello', () => {
  it('should get write return', async () => {
    expect(Hello()).toBe(true);
  });
});
