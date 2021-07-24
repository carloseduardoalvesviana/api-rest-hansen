const ParticipationScale = require('../models/ParticipationScale');

// Controller Escala de Participação
module.exports = {
  async store(req, res) {
    try {
      req.body.patient_id = req.params.id;
      req.body.who_created = req.headers.id;
      const participation_scale = await ParticipationScale.create(req.body);
      return res.status(200).json(participation_scale);
    } catch (error) {
      return res
        .status(400)
        .json({
          message:
            'TIvemos um pequeno problemas em ciar a escala de participação, tente novamente',
        });
    }
  },
};
