const password = require('./passfolder/password.js')
const Pool = require ("pg").Pool

const pool = new Pool ({
  user: "postgres",
  password: password,
  port: 5432,
  database: "connectFour"
})

module.exports = pool;