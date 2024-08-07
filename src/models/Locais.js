const connection = require('../database/connection')
const Usuarios = require('./Usuarios')
const { DataTypes } = require('sequelize')

const Locais = connection.define('locais', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkGoogleMaps: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
},
    {
        paranoid: true
    })
Usuarios.hasMany(Locais, { foreignKey: 'usuario_id', as: 'locais' });
Locais.belongsTo(Usuarios, { foreignKey: 'usuario_id', as: 'usuarios' });

module.exports = Locais;