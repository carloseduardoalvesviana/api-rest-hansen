const bcrypt = require('bcrypt');
const User = require('../models/User');
const { isValidCPF } = require('../utils/Cpf');

// Doutor controller
module.exports = {
  async index(req, res) {
    const users = await User.find({ patient: false });
    return res.status(200).json(users);
  },


  async store(req, res) {
    try {
      let { email, name, password, cpf } = req.body;

      const userEmail = await User.findOne({ email: email });

      if (userEmail) {
        return res.status(200).json({ message: 'Email já cadastrado!' });
      }

      const userCpf = await User.findOne({ cpf: cpf });

      if (userCpf) {
        return res.status(200).json({ message: 'Cpf já cadastrado!' });
      }

      let data = {
        email,
        name,
        password,
        cpf,
        permissions: 'admin',
        admin: true,
        approved: true,
      };

      const cpfValid = isValidCPF(cpf);

      if (!cpfValid) {
        return res.status(400).json({ message: 'CPF invalido!' });
      }

      data.password = await bcrypt.hash(password, 8);

      await User.create(data);

      return res.status(200).json({ message: 'Admin criado com sucesso!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
