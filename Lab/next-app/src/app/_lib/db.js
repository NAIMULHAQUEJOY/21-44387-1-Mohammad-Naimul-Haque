// src/app/_lib/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'atpdb',
  password: 'admin',
  port: 5432,
});

module.exports = pool;
