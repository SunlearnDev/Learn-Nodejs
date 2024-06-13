const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect.mysql');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hashedPassword: {
        type: DataTypes.STRING(64),
        validate: {
            is: /^[0-9a-f]{64}$/i,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;
