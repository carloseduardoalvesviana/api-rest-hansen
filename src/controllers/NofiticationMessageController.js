const NotificationMessage = require('../models/NotificationMessage');

module.exports = {
  async index(req, res) {
    let n = await NotificationMessage.find({ status: true });
    return res.status(200).json(n);
  },
};
