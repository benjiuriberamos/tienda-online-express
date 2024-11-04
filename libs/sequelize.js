const { Sequelize } = require('sequelize');
const { config } = require('../config/config')
const { stupModels } = require('../db/models')

const dbuser = encodeURIComponent(config.dbUser);
const dbpassword = encodeURIComponent(config.dbPassword);
const URI = `postgres://${dbuser}:${dbpassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

stupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
