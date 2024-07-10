const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const tipoVeiculo = sequelize.define('TipoVeiculo', {
    id:{
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = tipoVeiculo;