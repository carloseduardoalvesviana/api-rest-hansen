const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const { email, cpf, newPassword } = req.body;

      const userOk = await User.find({ email: email, cpf: cpf });

      if (!userOk) {
        return res.status(200).json({ message: false });
      }

      let p = await bcrypt.hash(newPassword, 8);

      await User.findOneAndUpdate({ cpf: cpf }, { password: p });

      return res.status(200).json({ message: 'Senha recuperada' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
