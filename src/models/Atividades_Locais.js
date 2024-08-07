const connection = require('../database/connection')
const { DataTypes } = require('sequelize')
const Locais = require('./Locais')
const Atividades = require('./Atividades')

const Atividades_locais = connection.define('atividades_locais', {
    atividade_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'atividades',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    local_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'locais',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
},
    {
        paranoid: true
    });

Locais.belongsToMany(Atividades, { through: Atividades_locais, foreignKey: 'local_id', as: 'atividades' });
Atividades.belongsToMany(Locais, { through: Atividades_locais, foreignKey: 'atividade_id', as: 'locais_atividades' });

module.exports = Atividades_locais;
