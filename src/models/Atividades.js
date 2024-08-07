const connection = require('../database/connection')
const { DataTypes } = require('sequelize')

const Atividades = connection.define('atividades', {

    nome: {
        type: DataTypes.ENUM('Caminhada', 'Corrida', 'Ciclismo', 'Natação', 'Musculação', 'Crossfit', 'Yoga', 'Pilates', 'Funcional', 'Dança', 'Artes Marciais', 'Outros'),
        allowNull: false
    },
},

    {
        paranoid: true
    })

module.exports = Atividades;
