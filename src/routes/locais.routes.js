const { Router } = require('express')

const LocaisController = require('../controllers/local.controller')


const locaisRoutes = Router()

locaisRoutes.post('/', LocaisController.create
    /*#swagger.tags = ['Locais']
        #swagger.description = 'Endpoint para criar um novo local'
        #swagger.parameters['novoLocal'] = {
            in: 'body',
            description: 'Informações do novo local',
            required: true,
            schema: {
                $nome: 'Quinta da Boa Vista',
                $descricao: " Um grande parque urbano localizado na cidade do Rio de Janeiro, conhecido por seus jardins e o Museu Nacional.",
                $endereco: "Av. Pedro II",
                $cidade: "Rio de Janeiro",
                $estado: "RJ",
                $pais: "Brasil",
                $atividades: [
                    1,
                    2
                ]
            }
        }
        #swagger.responses[201] = {
            description: 'Local criado com sucesso!'
        }
        #swagger.responses[400] = {
            description: 'Dados incompletos!'
        }
        #swagger.responses[400] = {
            description: 'Local já cadastrado!'
        }
        #swagger.responses[400] = {
            description: 'Usuário não encontrado!'
        }
        #swagger.responses[400] = {
            description: 'Já existe um local com esse nome!'
        }
        #swagger.responses[404] = {
            description: 'Localização não encontrada!'
        }
        #swagger.responses[401] = {
            description: 'Token inexistente!'
        }
        #swagger.responses[500] = {
            description: 'Não foi possível criar o local'
        }*/
);
locaisRoutes.get('/', LocaisController.read/*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para listar todos os locais do usuario'
    #swagger.responses[200] = {
        description: 'Locais listados com sucesso!'
    }
    */);
locaisRoutes.get('/:local_id', LocaisController.readOne/*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para listar todos os locais do usuario'
    #swagger.parameters['local_id'] = {
        description: 'ID do local',
        in:'path',
        required: true,
        schema: {
            type: 'integer',
            example: 1
        }
    }
    #swagger.responses[200] = {
        description: 'Locais listados com sucesso!'
    }
    */);
locaisRoutes.put('/:local_id', LocaisController.update/*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para atualizar um local'
    #swagger.parameters['editarLocal'] = {
        in: 'body',
            description: 'Altera as informações do local informado',
            required: true,
            schema: {
                $nome: 'Quinta da Boa Vista',
                $descricao: " Um grande parque urbano localizado na cidade do Rio de Janeiro, conhecido por seus jardins e o Museu Nacional.",
                $endereco: "Av. Pedro II",
                $cidade: "Rio de Janeiro",
                $estado: "RJ",
                $pais: "Brasil",
                $atividades: [
                    1,
                    2
                ]
            }
            
    },
    {
        name: 'local_id',
        in: 'path',
        description: 'ID do local',
        required: true,
        schema: {
            type: 'integer',
            example: 1
        }
    }
    #swagger.responses[200] = {
        description: 'Local atualizado com sucesso!'
    }
    */);
locaisRoutes.delete('/:local_id', LocaisController.delete/*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para deletar um local'
    #swagger.parameters['local_id'] = {
        description: 'ID do local',
        in: 'path',
        required: true,
        schema: {
            type: 'integer',
            example: 1
        }
    },
    #swagger.responses[200] = {
        description: 'Local deletado com sucesso!'
    }

    */);

locaisRoutes.get('/:local_id/maps', LocaisController.getLink);


module.exports = locaisRoutes