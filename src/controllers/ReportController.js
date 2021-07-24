const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const cpf = req.body.cpf;

    const user = await User.findOne({ cpf: cpf });

    if (!user) return res.status(400).json({ message: 'paciente não existe!' });

    return res.status(200).json(user);
  },
};
