const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const tipoVeiculo = require('./tipoVeiculo.js');

const veiculo = sequelize.define('Veiculo', {
    placa:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    modelo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    perco:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

veiculo.belongsTo(proprietario, { foreignKey: 'cpfProprietario' });
veiculo.belongsTo(tipoVeiculo, { foreignKey: 'idTipo' });

module.exports = veiculo;