const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

// Las rutas ya tienen el prefijo '/tareas' por la configuración en index.js
router.post('/', tareaController.createTarea);
router.get('/:id', tareaController.getTarea);

module.exports = router;