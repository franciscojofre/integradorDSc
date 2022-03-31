const express = require('express');
const router = express.Router();
const heroeController = require('../controllers/heroeController')

router.get('/', heroeController.info);
router.get('/detalle/:id', heroeController.detalle);
router.get('/bio/id/:id/:ok?', heroeController.masDetalle);

module.exports = router;