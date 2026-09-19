// Danh sách các tài khoản bị khóa (demo)
const lockedAccounts = ['locked_user'];

/**
 * Kiểm tra thông tin đăng nhập.
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} true nếu đăng nhập hợp lệ, false nếu không
 */
function login(username, password) {
  // Username hoặc password rỗng/undefined -> luôn thất bại
  if (!username || !password) {
    return false;
  }

  // Tài khoản nằm trong danh sách bị khóa -> luôn thất bại
  if (lockedAccounts.includes(username)) {
    return false;
  }

  // Kiểm tra thông tin đăng nhập hợp lệ
  if (username === 'admin' && password === '123') {
    return true;
  }

  return false;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login, lockedAccounts };
}
// Update login validation
