'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('atividades', [
      { nome: 'Caminhada', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Corrida', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ciclismo', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Natação', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Musculação', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Crossfit', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Yoga', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Pilates', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Funcional', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Dança', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Artes Marciais', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Outros', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atividades', null, {});

  }
};
