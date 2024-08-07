const { Router } = require('express');

const UsuarioController = require('../controllers/usuario.controller');


const usuariosRoutes = new Router();

usuariosRoutes.post('/', UsuarioController.create);


module.exports = usuariosRoutes;