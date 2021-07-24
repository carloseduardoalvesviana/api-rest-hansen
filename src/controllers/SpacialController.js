const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      // Retorna todos os pacientes index
      const patients_indexes = await User.find({ index_patient: true });

      // retorna os pacientes contatos que nao tem diagnostico
      const patients_contact_no_diagnosed = await User.find({
        patient_contact: true,
        diagnosed: false,
      });

      // Retorna todos os pacientes contatos com diagnostico sem hanseniase
      const patients_contact_diagnosed_no_leprosy = await User.find({
        patient_contact: true,
        diagnosed: true,
        diagnosed_with_leprosy: false,
      });

      return res.status(200).json({
        // Todos os pacientes indexes
        patients_index: patients_indexes,

        // Todos os pacientes contatos com diagnostico sem hanseniase
        patients_contacts_hanseniase_not: patients_contact_diagnosed_no_leprosy,

        // Todos os pacientes contatos sem diagnostico
        patient_contact_diagnosis_not: patients_contact_no_diagnosed,
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
