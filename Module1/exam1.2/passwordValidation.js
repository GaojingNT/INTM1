// 65130500102 Natdanai tessapan
function isPasswordValid(password) {
  // Check for undefined or null
  if (password === undefined || password === null) {
    return false;
  }

  // Check length
  if (password.length < 8) {
    return false;
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Check for at least one special character
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }

  // All conditions satisfied
  return true;
}


module.exports = isPasswordValid
