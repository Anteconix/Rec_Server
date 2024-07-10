const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const proprietario = sequelize.define('Proprietario', {
    cpf:{
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING(11),
        allowNull: false
    }
});

module.exports = proprietario;