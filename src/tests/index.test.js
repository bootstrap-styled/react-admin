const exported = require('../index');

describe('exported', () => {
  Object.keys(exported).forEach((key) => {
    it(`${key} should be exported`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
  it('Admin should be exported', () => {
    expect(exported.Admin).toBeDefined();
  });
  it('AdminRouter should be exported', () => {
    expect(exported.AdminRouter).toBeDefined();
  });
});
