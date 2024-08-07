const Locais = require('../models/Locais')
const Atividades_locais = require('../models/Atividades_Locais')
const Atividades = require('../models/Atividades')
const axios = require('axios')
const { param } = require('../routes/locais.routes')


class LocalController {
    async create(req, res) {
        try {
            const { nome, descricao, endereco, cidade, estado, pais, atividades } = req.body

            const enderecoCompleto = `${endereco}, ${cidade}, ${estado}, ${pais}`

            const dadosNominatim = await axios.get('https://nominatim.openstreetmap.org/search', {
                params: {
                    q: enderecoCompleto,
                    format: 'json',
                    limit: 1
                }
            });
            if (dadosNominatim.data.length === 0) {
                return res.status(404).json({ error: 'Localização não encontrada!' });
            }

            const { lat, lon } = dadosNominatim.data[0];

            const linkGoogleMaps = `https://www.google.com/maps?q=${lat},${lon}`;


            const atividadesDetalhes = await Promise.all(atividades.map(async (atividade_id) => {
                const atividade = await Atividades.findOne({ where: { id: atividade_id } });
                if (!atividade) {
                    throw new Error('Uma ou mais atividades não foram encontradas!');
                }
                console.log(atividade.nome)
                return atividade.nome;
            }));


            const local = await Locais.create({
                nome,
                descricao,
                latitude: lat,
                longitude: lon,
                endereco,
                cidade,
                estado,
                pais,
                linkGoogleMaps,
                usuario_id: req.usuarioId
            })
            const atividadesLocaisPromises = atividades.map(async (atividade_id) => {
                console.log(atividade_id)
                return Atividades_locais.create({
                    atividade_id,
                    local_id: local.id
                });
            });

            await Promise.all(atividadesLocaisPromises);

            const resposta = {
                local,
                atividades: atividadesDetalhes
            };

            return res.json(resposta);

        } catch (err) {
            console.log(err.name)
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ error: 'Local já cadastrado!' })
            }
            if (err.name === 'SequelizeForeignKeyConstraintError') {
                return res.status(400).json({ error: 'Usuário não encontrado!' })
            }
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({ error: 'Dados incompletos!' })
            }
            return res.status(400).json({ error: err.message })
        }
    }

    async read(req, res) {
        try {
            const locais = await Locais.findAll({
                where: { usuario_id: req.usuarioId },
                attributes: ['id', 'nome', 'descricao', 'latitude', 'longitude', 'endereco', 'estado', 'cidade', 'pais', 'linkGoogleMaps'],
                include: {
                    association: 'atividades',
                    attributes: ['nome'],
                    through: {
                        attributes: []
                    }
                }
            });
            if (locais.length === 0) {
                return res.status(404).json({ mensagem: 'Nenhum local cadastrado ainda' })
            }
            res.status(200).json(locais)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao buscar locais' })

        }
    }

    async readOne(req, res) {
        const { local_id } = req.params
        try {
            const local = await Locais.findOne({
                where: {
                    id: local_id,
                    usuario_id: req.usuarioId
                },
                include: {
                    association: 'atividades',
                    attributes: ['nome'],
                    through: {
                        attributes: []
                    }
                }
            });
            if (!local) {
                return res.status(404).json({ mensagem: 'Local não encontrado!' })
            }

            return res.status(200).json(local)

        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar local' })

        }
    }

    async update(req, res) {
        try {
            const { local_id } = req.params
            const { nome, descricao, endereco, cidade, estado, pais, atividades } = req.body

            const local = await Locais.findOne({
                where: {
                    id: local_id,
                    usuario_id: req.usuarioId
                }
            })
            if (!local) {
                return res.status(404).json({ mensagem: 'Local não encontrado!' })
            }
            if (endereco || cidade || estado || pais) {
                console.log('entrou')
                const enderecoCompleto = `${endereco || local.endereco}, ${cidade || local.cidade}, ${estado || local.estado}, ${pais || local.pais}`
                const dadosNominatim = await axios.get('https://nominatim.openstreetmap.org/search', {
                    params: {
                        q: enderecoCompleto,
                        format: 'json',
                        limit: 1
                    }
                });

                if (dadosNominatim.data.length === 0) {
                    return res.status(404).json({ error: 'Localização não encontrada!' })
                }
                const { lat, lon } = dadosNominatim.data[0]
                const linkGoogleMaps = `https://www.google.com/maps?q=${lat},${lon}`

                await Locais.update({
                    nome: nome || local.nome,
                    descricao: descricao || local.descricao,
                    latitude: lat,
                    longitude: lon,
                    endereco: endereco || local.endereco,
                    cidade: cidade || local.cidade,
                    estado: estado || local.estado,
                    pais: pais || local.pais,
                    linkGoogleMaps
                }, {
                    where: {
                        id: local_id
                    }

                })
            } else {
                await local.update({
                    nome: nome || local.nome,
                    descricao: descricao || local.descricao
                })
            }
            if (atividades) {
                await Atividades_locais.destroy({
                    where: {
                        local_id: local.id
                    }
                })
                const atividadesLocaisPromises = atividades.map(async (atividade_id) => {
                    return Atividades_locais.create({
                        atividade_id,
                        local_id
                    })
                })
                await Promise.all(atividadesLocaisPromises)
            }
            return res.status(200).json({ mensagem: 'Local atualizado com sucesso!' })
        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { local_id } = req.params
            const local = await Locais.findOne({
                where: {
                    id: local_id,
                    usuario_id: req.usuarioId
                }
            })
            if (!local) {
                return res.status(404).json({ mensagem: 'Local não encontrado!' })
            }
            await Atividades_locais.destroy({
                where: {
                    local_id
                }
            })
            await local.destroy()
            return res.status(200).json({ mensagem: 'Local deletado com sucesso!' })
        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
        }
    }
}


module.exports = new LocalController()