const Usuario = require('../models/Usuarios')
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')


class LoginController {
    async login(req, response) {
        try {
            const { email, senha } = req.body
            if (!email || !senha) {
                return res.status(400).json({ mensagem: 'email e senha são obrigatórios' })
            }
            const usuario = await Usuario.findOne({
                where: { email: email }
            })
            if (!usuario) {
                return response.status(404).json({ mensagem: 'Conta não encontrada' })
            }
            const senhaEstaCorreta = compareSync(senha, usuario.senha)

            if (senhaEstaCorreta === false) {
                return response.status(404).json({ mensagem: 'Conta não encontrada com esse email ou senha' })
            }

            const token = sign({
                id: usuario.id
            },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d'
                }
            )

            response.json({
                token: token,
                usuario: usuario.nome
            })

        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao realizar login' })
        }
    }

}


module.exports = new LoginController()