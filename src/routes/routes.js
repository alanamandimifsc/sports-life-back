const { Router } = require('express');
const locaisRoutes = require('./locais.routes');
const usuariosRoutes = require('./usuarios.routes');
const autenticador = require('../middlewares/autenticador');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json');
const loginRoutes = require('./login.routes');
const routes = Router()

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes.get('/', (req, res) => {
    res.send('Hello World!')
});


routes.use('/usuario', usuariosRoutes);
routes.use('/login', loginRoutes);
routes.use('/local', autenticador, locaisRoutes);

// routes.use('/locais', locaisRoutes);

module.exports = routes