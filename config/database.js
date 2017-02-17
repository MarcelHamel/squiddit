let pgp           = require('pg-promise')();
let database      = pgp('postgres://localhost:5432/squiddit');

module.exports    = database;
