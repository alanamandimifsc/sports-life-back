const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
const Usuario = require('../models/Usuarios')
const bcrypt = require('bcryptjs');

class UsuarioController {
    async create(req, res) {
        try {
            const { nome, email, senha, data_nasc, cpf, sexo } = req.body



            if (!padraoEmail.test(email)) {
                return res.status(400).json({ error: 'Email inválido!' })
            }

            if (!(senha.length >= 8 && senha.length <= 16)) {
                return response
                    .status(400)
                    .json({ mensagem: 'A senha deve ter entre 8 e 16 dígitos' })
            }

            const senhaCriptografada = await bcrypt.hash(senha, 10)



            const usuario = await Usuario.create({
                nome,
                email,
                senha: senhaCriptografada,
                sexo: sexo || null,
                cpf,
                data_nascimento: data_nasc || null
            })
            usuario.senha = undefined;


            return res.status(201).json(usuario)

        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ error: 'Email ou CPF já cadastrado!' })
            }
            if (err.name === 'SequelizeValidationError') {
                console.log(err)
                return res.status(400).json({ error: 'Dados incompletos!' })
            }
            return res.status(400).json({ error: err.message })
        }
    }
}
module.exports = new UsuarioController()