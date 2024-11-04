const { Pool } = require('pg');
const { config } = require('./../config/config')

const dbuser = encodeURIComponent(config.dbUser);
const dbpassword = encodeURIComponent(config.dbPassword);
const URI = `postgres://${dbuser}:${dbpassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI })
// const pool = new Pool({
//   host: config.DB_HOST,
//   port: 5433,
//   user: dbuser,
//   password: dbuser,
//   database: config.DB_NAME
// });


module.exports = { pool }
