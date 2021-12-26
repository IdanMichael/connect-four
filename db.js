const Pool = require ("pg").Pool

const pool = new Pool ({
  user: "postgres",
  password:"Xmm71717",
  port: 5432,
  database: "connectFour"
})

module.exports = pool;