const Sequelize = require('sequelize');


var _sql = Sequelize.sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres');

//Connection test
_sql
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = _sql;
