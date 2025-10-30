const { Pool } = require('pg');
 //creates a pool of open connections to the db

 const pool = new Pool({
    ssl: {
        rejectUnauthorized: false
    }
 });

 module.exports = {
    query: (text, params) => pool.query(text, params),
 };
 