const connection = require('../database/connection')
const { DataTypes } = require('sequelize')

const Usuarios = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('Masculino', 'Feminino'),
        allowNull: true
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

},
    {
        paranoid: true
    }
)

module.exports = Usuarios;