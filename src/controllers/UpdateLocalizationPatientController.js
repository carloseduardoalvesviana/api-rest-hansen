const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      const { id } = req.params;

      const { longitude, latitude } = req.body;

      const patient = await User.findOneAndUpdate(
        {
          _id: id,
        },
        {
          longitude: longitude,
          latitude: latitude,
        },
        {
          new: true,
        }
      );

      if (!patient)
        return res.status(400).json({ message: 'paciente não existe' });

      return res.status(200).json(patient);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
