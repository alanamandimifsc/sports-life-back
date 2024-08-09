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
        description: 'Local criado com sucesso!',
        schema: {
            $local:{
            $id:2,
            $nome: 'Quinta da Boa Vista',
            $descricao: " Um grande parque urbano localizado na cidade do Rio de Janeiro, conhecido por seus jardins e o Museu Nacional.",
            $endereco: "Av. Pedro II",
            $cidade: "Rio de Janeiro",
            $estado: "RJ",
            $pais: "Brasil",
            $linkGoogleMaps: "https://www.google.com/maps?q=-22.9020945,-43.2112776",
            $usuario_id: 1,
            $createdAt: "2024-08-07T01:35:08.991Z",
            $updatedAt: "2024-08-09T22:10:16.374Z",
            $deletedAt: null
            },
            $atividades: [
                "Natação",
                "Ciclismo"
            ]
        }
    }
    #swagger.responses[400] = {
        description: 'Erro de validação na requisição. Podem ocorrer vários tipos de erros, como dados incompletos, local já cadastrado, usuário não encontrado, ou local com nome duplicado.',
        schema: {
            error: 'Mensagem de erro específica como "Dados incompletos!", "Local já cadastrado!", "Usuário não encontrado!" ou "Já existe um local com esse nome!"'
        }
    }    
    #swagger.responses[404] = {
        description: 'Localização não encontrada!',
        schema: { error: 'Localização não encontrada!' }
    }
    #swagger.responses[401] = {
        description: 'Token inexistente!',
        schema: { error: 'Token inexistente!' }
    }
    #swagger.responses[500] = {
        description: 'Não foi possível criar o local',
        schema: { error: 'Não foi possível criar o local' }
    }*/
);
locaisRoutes.get('/', LocaisController.read/*
   #swagger.tags = ['Locais']
   #swagger.description = 'Endpoint para listar todos os locais do usuario'
   #swagger.responses[200] = {
        description: 'Locais listados com sucesso!',
        schema: [{
            id: 1,
            nome: 'Quinta da Boa Vista',
            descricao: 'Um grande parque urbano localizado na cidade do Rio de Janeiro, conhecido por seus jardins e o Museu Nacional.',
            latitude: '-22.9068',
            longitude: '-43.1729',
            endereco: 'Av. Pedro II',
            estado: 'RJ',
            cidade: 'Rio de Janeiro',
            pais: 'Brasil',
            linkGoogleMaps: 'https://www.google.com/maps?q=-22.9068,-43.1729',
            atividades: [
                { nome: 'Atividade 1' },
                { nome: 'Atividade 2' }
            ]
        }]
    }

    #swagger.responses[404] = {
        description: 'Nenhum local cadastrado ainda',
        schema: { mensagem: 'Nenhum local cadastrado ainda' }
    }

    #swagger.responses[500] = {
        description: 'Erro ao buscar locais',
        schema: { mensagem: 'Erro ao buscar locais' }
    }
    */);
locaisRoutes.get('/:local_id', LocaisController.readOne/*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para listar locail específico do usuario'
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
        description: 'Local encontrado com sucesso!',
        schema: {
            id: 1,
            nome: 'Quinta da Boa Vista',
            descricao: 'Um grande parque urbano localizado na cidade do Rio de Janeiro, conhecido por seus jardins e o Museu Nacional.',
            latitude: '-22.9068',
            longitude: '-43.1729',
            endereco: 'Av. Pedro II',
            estado: 'RJ',
            cidade: 'Rio de Janeiro',
            pais: 'Brasil',
            linkGoogleMaps: 'https://www.google.com/maps?q=-22.9068,-43.1729',
            atividades: [
                { nome: 'Atividade 1' },
                { nome: 'Atividade 2' }
            ]
        }
    }

    #swagger.responses[404] = {
        description: 'Local não encontrado!',
        schema: { mensagem: 'Local não encontrado!' }
    }

    #swagger.responses[500] = {
        description: 'Erro ao buscar local',
        schema: { mensagem: 'Erro ao buscar local' }
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
    #swagger.parameters['local_id'] = {
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
        description: 'Local atualizado com sucesso!',
        schema: {
            mensagem: 'Local atualizado com sucesso!'
        }
    }

    #swagger.responses[404] = {
        description: 'Local não encontrado!',
        schema: { mensagem: 'Local não encontrado!' }
    }

    #swagger.responses[500] = {
        description: 'Erro ao atualizar local',
        schema: { mensagem: 'Erro ao atualizar local' }
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
        description: 'Local deletado com sucesso!',
        schema: {
            mensagem: 'Local deletado com sucesso!'
        }
    }

    #swagger.responses[404] = {
        description: 'Local não encontrado!',
        schema: { mensagem: 'Local não encontrado!' }
    }

    #swagger.responses[500] = {
        description: 'Erro ao deletar local',
        schema: { mensagem: 'Erro ao deletar local' }
    }

    */);

locaisRoutes.get('/:local_id/maps', LocaisController.getLink/*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para obter o link do Google Maps de um local específico.'

    #swagger.parameters['local_id'] = {
        description: 'ID do local',
        in: 'path',
        required: true,
        schema: {
            type: 'integer',
            example: 1
        }
    }

    #swagger.responses[200] = {
        description: 'Link do Google Maps obtido com sucesso!',
        schema: {
            linkGoogleMaps: 'https://www.google.com/maps?q=-22.9068,-43.1729'
        }
    }

    #swagger.responses[404] = {
        description: 'Local não encontrado!',
        schema: {
            error: 'Local não encontrado!'
        }
    }

    #swagger.responses[500] = {
        description: 'Erro ao buscar o link do Google Maps.',
        schema: {
            error: 'Erro ao buscar o link do Google Maps.'
        }
    } */);


module.exports = locaisRoutes