const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'shuvo',
    port: 5432,
    database: 'bookDB',
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

module.exports = pool;
