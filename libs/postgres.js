const { Client } = require('pg');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

async function getConection()  {
    const client = new Client({connectionString: URI});
    await client.connect();
    return client;
}

module.exports = getConection;



// host: 'eie-database.cxyeuvetzdfd.sa-east-1.rds.amazonaws.com',
// port: 5432,
// user: 'rdo4',
// password: '12345eie',
// database: 'postgres'
