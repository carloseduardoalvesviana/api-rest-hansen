const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const { cpf } = req.body;
      await User.findOneAndUpdate({ cpf: cpf }, { approved: true });
      return res.status(200).json({ message: 'Usuário aprovado!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
