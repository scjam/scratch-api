const { Pool } = require("pg");

const pool = new Pool ({
  connectionString: process.env.DataBASE_URL,
})

module.exports = pool;