const { login } = require('./auth');

describe('Smoke Test - Đăng nhập', () => {
  test('Đăng nhập đúng (admin/123) trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
