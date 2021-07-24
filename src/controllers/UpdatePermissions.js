const User = require('../models/User');

module.exports = {
  async store(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });
      user.approved = true;
      user.save();
      return res.status(200).json({ message: 'Usuário agora é administrador' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
