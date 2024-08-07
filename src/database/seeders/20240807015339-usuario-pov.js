'use strict';

const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);

    const users = [
      { nome: 'John Doe', email: 'john.doe@example.com', senha: 'password123', sexo: 'Masculino', data_nascimento: '1990-01-01', cpf: '12345678901' },
      { nome: 'Jane Doe', email: 'jane.doe@example.com', senha: 'password456', sexo: 'Feminino', data_nascimento: '1992-02-02', cpf: '98765432100' },
      { nome: 'Alice Smith', email: 'alice.smith@example.com', senha: 'password789', sexo: 'Feminino', data_nascimento: '1988-03-03', cpf: '11111111111' },
      { nome: 'Bob Johnson', email: 'bob.johnson@example.com', senha: 'password321', sexo: 'Masculino', data_nascimento: '1985-04-04', cpf: '22222222222' },
      { nome: 'Charlie Brown', email: 'charlie.brown@example.com', senha: 'password654', sexo: 'Masculino', data_nascimento: '1991-05-05', cpf: '33333333333' },
      { nome: 'David Wilson', email: 'david.wilson@example.com', senha: 'password987', sexo: 'Masculino', data_nascimento: '1982-06-06', cpf: '44444444444' },
      { nome: 'Eva Green', email: 'eva.green@example.com', senha: 'password111', sexo: 'Feminino', data_nascimento: '1993-07-07', cpf: '55555555555' },
      { nome: 'Frank Wright', email: 'frank.wright@example.com', senha: 'password222', sexo: 'Masculino', data_nascimento: '1987-08-08', cpf: '66666666666' },
      { nome: 'Grace Hill', email: 'grace.hill@example.com', senha: 'password333', sexo: 'Feminino', data_nascimento: '1995-09-09', cpf: '77777777777' },
      { nome: 'Henry Adams', email: 'henry.adams@example.com', senha: 'password444', sexo: 'Masculino', data_nascimento: '1983-10-10', cpf: '88888888888' },
    ];

    for (let user of users) {
      user.senha = await bcrypt.hash(user.senha, salt);
      user.createdAt = new Date();
      user.updatedAt = new Date();
    }

    await queryInterface.bulkInsert('usuarios', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
