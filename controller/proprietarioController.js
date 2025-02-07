const proprietario = require('../models/proprietario.js');

exports.criarProprietario = async (req, res) => {
    try {
      const proprietario = await proprietario.create(req.body);
      res.status(201).json(proprietario);
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
};

exports.obterProprietario = async (req, res) => {
    try {
      const proprietario = await proprietario.findByPk(req.params.cpf);
      if (proprietario) {
        res.json(proprietario);
      } else {
        res.status(404).json({ erro: 'Proprietário não encontrado' });
      }
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
};

exports.atualizarProprietario = async (req, res) => {
    try {
      const [atualizou] = await proprietario.update(req.body, {
        where: { cpf: req.params.cpf }
      });
      if (atualizou) {
        const proprietarioAtualizado = await proprietario.findByPk(req.params.cpf);
        res.json(proprietarioAtualizado);
      } else {
        res.status(404).json({ erro: 'Proprietário não encontrado' });
      }
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
};
  
exports.removerProprietario = async (req, res) => {
    try {
      const proprietario = await proprietario.findByPk(req.params.cpf);
      if (proprietario) {
        await proprietario.destroy();
        res.json({ mensagem: 'Proprietário removido com sucesso' });
      } else {
        res.status(404).json({ erro: 'Proprietário não encontrado' });
      }
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
};