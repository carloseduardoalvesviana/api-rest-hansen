const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const { email, cpf, newPassword } = req.body;

      const userExists = await User.find({ cpf: cpf, email: email });

      if (!userExists) {
        return res.status(200).json({ message: 'usuario nao existe' });
      }

      let p = await bcrypt.hash(newPassword, 8);

      await User.findOneAndUpdate({ cpf: cpf }, { password: p }, { new: true });

      return res.status(200).json({ message: 'Senha recuperada' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
