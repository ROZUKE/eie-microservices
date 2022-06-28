const { Pool } = require('pg');

    const pool = new Pool({
        host: 'eie-database.cxyeuvetzdfd.sa-east-1.rds.amazonaws.com',
        port: 5432,
        user: 'rdo4',
        password: '12345eie',
        database: 'postgres'
    });
    
module.exports = pool;