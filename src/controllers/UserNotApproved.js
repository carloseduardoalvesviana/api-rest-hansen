const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find({ approved: false, patient: false });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
