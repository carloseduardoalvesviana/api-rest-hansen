const ActivityLimitationScreeningAndRisAwareness = require('../models/ActivityLimitationScreeningAndRisAwareness');

// Controller Triagem de Limitação de Atividade e Consciência de Risco
module.exports = {
  async store(req, res) {
    try {
      req.body.patient_id = req.params.id;
      req.body.who_created = req.headers.id;

      const response = await ActivityLimitationScreeningAndRisAwareness.create(
        req.body
      );
      return res.status(200).json(response);
    } catch (error) {
      return res.status(200).json(error);
    }
  },
};
