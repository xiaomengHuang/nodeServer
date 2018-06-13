const Sequelize = require('sequelize');
var _sql = require('../pg');

const Company = _sql.define('Company', {
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
  companyName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
  },
  miniName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '未查到相关信息',
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '未查到相关信息',
  },
  //法人
  faRen: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '未查到相关信息',
  },
  //企业类型
  qiYeLeiXing: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '未查到相关信息',
  },
  //经营范围
  jingYingFanWei: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '未查到相关信息',
  },
  //注册地址
  zhuCeDiZhi: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '未查到相关信息',
  }
},{
  name:'Company'
});


module.exports = Company;
