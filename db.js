const { Pool } = require("pg");

const pool = new Pool({
    // host: 'localhost',
    // user: 'postgres',
    // port: 5432,
    // database: 'bookexpress',
    connectionString: "postgres://postgres@localhost:5432/bookexpres",
});

module.exports = pool;
