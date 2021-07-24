const Notification = require('../models/Notification');

module.exports = {
  async store(req, res) {
    try {
      req.body.who_created = req.headers.id;
      await Notification.create(req.body);
      return res
        .status(200)
        .json({ message: 'Notificação criada com sucesso!' });
    } catch (error) {
      return res
        .status(200)
        .json({
          message:
            'Tivemos um problema em criar a notificação, tente novamente',
        });
    }
  },
};
