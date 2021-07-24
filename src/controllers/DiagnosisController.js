const Diagnosis = require('../models/Diagnosis');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    try {
      // Diagnostico
      const who_created = req.headers.id;
      const patient_id = req.body.patient_id;
      const comment = req.body.comment;
      const pqm = req.body.pqm;
      const type = req.body.type;

      await Diagnosis.create({
        who_created: who_created,
        patient_id: patient_id,
        comment: comment,
        type: type,
        pqm: pqm,
      });

      if (pqm !== '') {
        await User.findOneAndUpdate(
          { _id: patient_id },
          { index_patient: true, diagnosed: true, diagnosed_with_leprosy: true }
        );
      }

      if (pqm === '') {
        await User.findOneAndUpdate(
          { _id: patient_id },
          {
            index_patient: false,
            diagnosed: true,
            diagnosed_with_leprosy: false,
          }
        );
      }

      return res.status(200).json({
        message: 'Diagnostico criado com sucesso',
      });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar o Diagnostico' });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      await Diagnosis.findOneAndUpdate(
        { _id: id },
        {
          expanded: req.body.expanded,
          months: req.body.months,
          status: req.body.status,
          date_init: req.body.date_init,
          date_end: req.body.date_end,
          comments: req.body.comments,
          type: req.body.type,
          pqm: req.body.pqm,
        }
      );
      return res.status(200).json({ message: 'diagnostico atualizado!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
