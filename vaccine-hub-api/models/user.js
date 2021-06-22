const { UnauthorizedError } = require('../utils/errors')

class User {
  static async login(credentials) {
    // check for email and pw, else error
    // lookup user and compare pw, return if theres match, else error
    throw new UnauthorizedError("Invalid email/password error")
  }

  static async register(credentials) {
    // user should submit required fields, else error
    // check if email already exist, error
    // hash users pw, lowercase email
    // create new user, return
  }
}