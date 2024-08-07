const { Router } = require('express');
// const locaisRoutes = require('./locais.routes');
// const usuariosRoutes = require('./usuarios.routes');
// const autenticador = require('../middlewares/autenticador');
// const { login } = require('../controllers/login.controller');

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello World!')
});


// routes.use('/usuario', usuariosRoutes);
// routes.use('/login', login);
// routes.use('/local', autenticador, locaisRoutes);

// routes.use('/locais', locaisRoutes);

module.exports = routes