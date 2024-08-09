const { Router } = require('express');

const UsuarioController = require('../controllers/usuario.controller');


const usuariosRoutes = new Router();

usuariosRoutes.post('/', UsuarioController.create/*
    #swagger.tags = ['Usuários']
    #swagger.description = 'Endpoint para criar um novo usuário.'

    #swagger.parameters['novoUsuario'] = {
        in: 'body',
        description: 'Dados para criação do novo usuário',
        required: true,
        schema: {
            $nome: 'João Silva',
            $email: 'joao.silva@example.com',
            $senha: 'senhaSegura123',
            cpf: '123.456.789-00',
            data_nasc: '1983-10-09 21:00:00-03',
            sexo: 'Masculino'
        }
    }

    #swagger.responses[201] = {
        description: 'Usuário criado com sucesso!',
        schema: {
            id: 1,
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            cpf: '123.456.789-00',
            data_nascimento: '1983-10-09 21:00:00-03',
            sexo: 'Masculino',
            createdAt: '2024-08-09T12:00:00.000Z',
            updatedAt: '2024-08-09T12:00:00.000Z'
        }
    }

    #swagger.responses[400] = {
    description: 'Erro de validação na criação do usuário. Podem ocorrer diversos tipos de erros como email inválido, senha fora do padrão, ou dados incompletos.',
    schema: {
        error: 'Mensagem de erro específica como "Email ou CPF já cadastrado!", "Email inválido!", "Dados incompletos!" ou "A senha deve ter entre 8 e 16 dígitos".'
    }
}
*/);


module.exports = usuariosRoutes;