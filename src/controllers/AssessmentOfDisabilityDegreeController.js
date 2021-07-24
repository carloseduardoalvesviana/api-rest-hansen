const AssessmentOfDisabilityDegree = require('../models/AssessmentOfDisabilityDegree');

// Controller Avaliação do Grau de Incapacidade
module.exports = {
  async store(req, res) {
    try {
      req.body.patient_id = req.params.id || null;
      req.body.who_created = req.headers.id || null;
      const response = await AssessmentOfDisabilityDegree.create(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
