const bcrypt = require('bcrypt');
const User = require('../models/User');
const { isValidCPF } = require('../utils/Cpf');

module.exports = {
  async index(req, res) {
    try {
      const { cpf, password } = req.body;

      const cpfValid = isValidCPF(cpf);
      if (!cpfValid) {
        return res
          .status(400)
          .json({ message: 'Cpf invalido', success: false });
      }

      const patient = await User.findOne({ patient: true, cpf: cpf });
      if (!patient) {
        return res
          .status(400)
          .json({ message: 'Paciente não existe', success: false });
      }

      const valid = bcrypt.compareSync(password, patient.password);
      if (!valid) {
        return res
          .status(400)
          .json({ message: 'Senha errada', success: false });
      }

      return res
        .status(200)
        .json({ message: 'usuario validado!', success: false });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
