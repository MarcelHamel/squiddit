const pgp           = require('pg-promise')();

const database  = pgp(process.env.DATABASE_URL || {
host: 'localhost',
port: 5432,
database: 'squiddit'
});



module.exports    = database;
