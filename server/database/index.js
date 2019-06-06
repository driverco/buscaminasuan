var { Pool } = require('pg');

//Conexion local
//const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres:Hranmc9bb8**@localhost:5432/buscaminasuan';

//Conexion Heroku
const CONNECTION_STRING = process.env.DATABASE_URL || 'postgres://mmghqjqteuawyt:a965501d9a71f6d0c31f194d0a6c858d0ca51751cf477dde5dc20adab0907e53@ec2-54-163-230-199.compute-1.amazonaws.com:5432/dbni9feinhid75';

//const SSL = process.env.NODE_ENV === 'production';
const SSL = true;

class Database {
  constructor () {
    this._pool = new Pool({
      connectionString: CONNECTION_STRING,
      ssl: SSL
    });

    this._pool.on('error', (err, client) => {
      console.error('Unexpected error on idle PostgreSQL client.', err);
      process.exit(-1);
    });

  }

  query (query, ...args) {
    this._pool.connect((err, client, done) => {
      
      const params = args.length === 2 ? args[0] : [];
      const callback = args.length === 1 ? args[0] : args[1];

      client.query(query, params, (err, res) => {
        done();
        if (err) {
          console.log(err.stack);
          return callback({ error: 'Database error.' }, null);
        }
        callback({}, res.rows);
      });
    });

  }

  end () {
    this._pool.end();
  }
}

module.exports = new Database();