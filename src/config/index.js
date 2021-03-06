const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  sqlite: {
    database: process.env.DB_NAME || 'cano',
    user: process.env.DB_USER || 'cano',
    password: process.env.DB_PASS || 'cano',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../cano.sqlite'), // SQLite only
    },
  },
  pg: process.env.DATABASE_URL,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
