require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/beer'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
