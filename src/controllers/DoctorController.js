const bcrypt = require('bcrypt');
const User = require('../models/User');
const { isValidCPF } = require('../utils/Cpf');

module.exports = {
  async store(req, res) {
    try {
      const { email = '', name = '', password = '', cpf = '' } = req.body;

      const userEmail = await User.findOne({ email: email });

      if (userEmail) {
        return res.status(200).json({ message: 'Email já cadastrado!' });
      }

      const userCpf = await User.findOne({ cpf: cpf });

      if (userCpf) {
        return res.status(200).json({ message: 'Cpf já cadastrado!' });
      }

      // function remover_acentos(str) {
      //   return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      // }

      let data = {
        email,
        name,
        password,
        cpf,
        permissions: 'doctor',
        doctor: true,
      };

      const cpfValid = isValidCPF(cpf);

      if (cpfValid === false) {
        return res.status(400).json({ message: 'CPF invalido!' });
      }

      data.password = await bcrypt.hash(password, 8);

      await User.create(data);

      return res
        .status(200)
        .json({ message: 'Doutor(a) cadastrado com sucesso' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
