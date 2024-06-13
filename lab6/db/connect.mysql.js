const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('romano', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;