const { Router } = require('express');

const LoginController = require('../controllers/login.controller');


const loginRoutes = new Router();

loginRoutes.post('/', LoginController.login/*
    #swagger.tags = ['Login']
    #swagger.description = 'Endpoint para realizar login de um usuário.'

    #swagger.parameters['login'] = {
        in: 'body',
        description: 'Credenciais de login',
        required: true,
        schema: {
            $email: 'john.doe@example.com',
            $senha: 'password123'
        }
    }

    #swagger.responses[200] = {
        description: 'Login realizado com sucesso!',
        schema: {
            token: 'string',
            usuario: 'string'
        }
    }

    #swagger.responses[400] = {
        description: 'Email e senha são obrigatórios.',
        schema: {
            mensagem: 'email e senha são obrigatórios'
        }
    }

    #swagger.responses[404] = {
        description: 'Conta não encontrada.',
        schema: {
            mensagem: 'Conta não encontrada'
        }
    }

    #swagger.responses[404] = {
        description: 'Conta não encontrada com esse email ou senha.',
        schema: {
            mensagem: 'Conta não encontrada com esse email ou senha'
        }
    }

    #swagger.responses[500] = {
        description: 'Erro ao realizar login.',
        schema: {
            mensagem: 'Erro ao realizar login'
        }
    } */);


module.exports = loginRoutes;