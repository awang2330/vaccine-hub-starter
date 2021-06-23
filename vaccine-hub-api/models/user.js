const db = require('../db')
const { BadRequestError, UnauthorizedError } = require('../utils/errors')


class User {
  static async login(credentials) {
    // check for email and pw, else error
    // lookup user and compare pw, return if theres match, else error
    throw new UnauthorizedError("Invalid email/password error")
  }

  static async register(credentials) {
    const requiredFields = ["email", "first_name", "last_name", "password", "location"]
    requiredFields.forEach(field => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`)
      }
    })

    const existingUser = await User.fetchUserByEmail(credentials.email)
    if (existingUser) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`)
    }

    const lowercasedEmail = credentials.email.toLowerCase()

    const result = await db.query(`
    insert into users (
      email,
      first_name,
      last_name,
      password
    )
    values($1,$2,$3,$4)
    returning id, first_name, last_name, email, location;
    `
    ,[lowercasedEmail, credentials.password, credentials.first_name, credentials.last_name, credentials.location, credentials.date])

    const user = result.rows[0]

    return user
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided")
    }
    const query = `select * from users where email = $1`
    const result = await db.query(query, [email.toLowerCase()])
    const user = result.rows[0]
    return user
  }
}

module.exports = User