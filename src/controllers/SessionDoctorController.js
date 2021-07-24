const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email: email, doctor: true });
      if (!user)
        return res.status(401).json({ message: 'Usuario não encontrado!' });

      const passValid = bcrypt.compareSync(password, user.password);
      if (!passValid)
        return res
          .status(400)
          .json({ authorization: null, message: 'Senha Invalida!' });

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 86400,
      });

      const patients = await User.find({ patient: true });

      const data = {
        id: user._id,
        permissions: user.permissions,
        authorization: token,
        patients: patients,
      };

      return res.status(200).json(data);
    } catch (error) {
      return res
        .status(400)
        .json({
          message:
            'Tivemos um pequeno problema em criar uma nova sessao para seu usuario, tente novamente',
        });
    }
  },
};
