const { login } = require('./auth');

describe('Regression Test - Đăng nhập (các trường hợp ngoại lệ)', () => {
  test('Mật khẩu sai -> trả về false', () => {
    expect(login('admin', 'saipass')).toBe(false);
  });

  test('Username sai -> trả về false', () => {
    expect(login('user_la', '123')).toBe(false);
  });

  test('Username rỗng -> trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng -> trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Cả username và password đều rỗng -> trả về false', () => {
    expect(login('', '')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt nhưng không khớp -> trả về false', () => {
    expect(login('admin', '!@#$%^&*()')).toBe(false);
  });

  test('Tài khoản bị khóa (locked_user) -> luôn trả về false dù đúng định dạng', () => {
    expect(login('locked_user', '123')).toBe(false);
  });

  test('Username/password undefined -> trả về false', () => {
    expect(login(undefined, undefined)).toBe(false);
  });

  test('Username đúng nhưng viết hoa/thường khác (Admin) -> trả về false', () => {
    expect(login('Admin', '123')).toBe(false);
  });
});
