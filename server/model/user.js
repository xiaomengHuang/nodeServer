const Sequelize = require('sequelize');
var _sql = require('../pg');
var company = require('./company')

const User = _sql.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
    // references: {
    //   model: company,
    //   key:'user',
    //   // This declares when to check the foreign key constraint. PostgreSQL only.
    //  deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    // }
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
  },
  iconUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
  }
},{
  name:'User'
});


module.exports = User;
