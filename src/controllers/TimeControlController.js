const Diagnosis = require('../models/Diagnosis');

module.exports = {
  async index(req, res) {
    const user_id = req.params.id;

    if (!user_id)
      return res.status(400).json({ message: 'Paciente não existe!' });

    try {
      const diagnosis = await Diagnosis.find({
        patient_id: user_id,
      });

      return res.status(200).json(diagnosis);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
