// backend-ft/db.js (erweitert)
const { Sequelize } = require('sequelize');
const config = require('./config');
const Transaction = require('./models/Transaction');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
    port: config.development.port,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      'Connection to the database has been established successfully.'
    );
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Synchronisierung der Models
sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = sequelize;
