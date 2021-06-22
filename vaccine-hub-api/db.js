const { client, Client } = require("pg") 
const { getDataBaseUri, getDatabaseUri } = require('./config')

require("colors")

const db = new Client({ connectionString: getDatabaseUri() })

/** Connect to postgres and log a message to the terminal on success or failure. */
db.connect((err) => {
  if (err) {
    console.log("connection error".red, err.stack)
  } else {
    console.log("Successfully connected to postgres db!".blue)
  }
})

module.exports = db