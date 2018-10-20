const app = require('../index');

describe('main app', () => {
  it('should load app without errors', () => {
    expect(app).not.toBeNull();
  });
});
