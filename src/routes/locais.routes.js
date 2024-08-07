const { Router } = require('express')

const LocaisController = require('../controllers/local.controller')


const locaisRoutes = Router()

locaisRoutes.post('/', LocaisController.create);
locaisRoutes.get('/', LocaisController.read);
locaisRoutes.get('/:local_id', LocaisController.readOne);
locaisRoutes.put('/:local_id', LocaisController.update);
locaisRoutes.delete('/:local_id', LocaisController.delete);

module.exports = locaisRoutes