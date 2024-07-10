const express = require('express');
const router = express.Router();
const proprietario = require('../models/proprietario.js');
const proprietarioController = require('../controller/proprietarioController.js');

router.post('/', proprietarioController.criarProprietario);
router.get('/:cpf', proprietarioController.obterProprietario);
router.put('/:cpf', proprietarioController.atualizarProprietario);
router.delete('/:cpf', proprietarioController.removerProprietario);
router.get('/', async (req, res) => {
    try {
        const proprietario = await proprietario.findAll();
        res.json(proprietario);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

module.exports = router;