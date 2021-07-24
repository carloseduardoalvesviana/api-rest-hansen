const Diagnosis = require('../models/Diagnosis');
const NotificationMessage = require('../models/NotificationMessage');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      let diagnosis = await Diagnosis.find();

      let patients_id = [];

      diagnosis.find(diag => {
        diag.months.find(month => {
          month.treatment_.find(treatment => {
            let dataTratamento = new Date(treatment.date_take);

            if (Date.now() > dataTratamento) {
              if (treatment.compressed !== 'take') {
                patients_id.push(diag.patient_id);
              }
            }
          });
        });
      });

      let messages = [];

      let pacients;

      pacients = await User.find({ _id: patients_id });

      pacients.find(patient => {
        let msg = {
          pacient: patient.name,
          cpf: patient.cpf,
          txt: 'O paciente não informou sobre medicação!',
        };
        messages.push(msg);
      });

      await NotificationMessage.insertMany(messages);

      let resultado = await NotificationMessage.find({ status: true });

      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
