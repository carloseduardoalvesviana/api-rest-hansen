const User = require('../models/User');

module.exports = {
  async store(req, res) {
    try {
      const { permissions } = req.body;
      const user = await User.findOneAndUpdate({ _id: req.params.id }, {
        permissions: permissions
      }, { new: true });
      return res.status(200).json({ message: `usuario agora é ${user.permissions}` });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
