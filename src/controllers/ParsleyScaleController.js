const ParsleyScale = require('../models/ParsleyScale');

// Controller salsa escala
module.exports = {
  async store(req, res) {
    try {
      req.body.patient_id = req.params.id;
      req.body.who_created = req.headers.id;
      const parsleyscale = await ParsleyScale.create(req.body);
      return res.status(200).json(parsleyscale);
    } catch (error) {
      return res
        .status(400)
        .json({
          message:
            'Tivemos um pequeno problema em criar a escala salsa, tente novamente',
        });
    }
  },
};
