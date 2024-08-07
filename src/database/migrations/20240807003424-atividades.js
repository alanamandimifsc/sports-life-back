'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atividades', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.ENUM('Caminhada', 'Corrida', 'Ciclismo', 'Natação', 'Musculação', 'Crossfit', 'Yoga', 'Pilates', 'Funcional', 'Dança', 'Artes Marciais', 'Outros'),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
      }
    });
  },


  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('atividades');

  }
};
