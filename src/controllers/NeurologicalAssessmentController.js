const NeurologicalAssessment = require('../models/NeurologicalAssessment');

// Controlle Avaliação Neurológica
module.exports = {
  async store(req, res) {
    try {
      req.body.patient_id = req.params.id || null;
      req.body.who_created = req.headers.id || null;

      const response = await NeurologicalAssessment.create(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({
        message: 'Tivemos um pequeno problema no cadastro tente novamente!',
      });
    }
  },
};
