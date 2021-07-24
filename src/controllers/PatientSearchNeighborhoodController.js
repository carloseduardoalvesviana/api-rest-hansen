const User = require('../models/User');

module.exports = {
  async index(req, res) {
    try {
      let { neighborhood } = req.body;

      function remover_acentos(neighborhood) {
        return neighborhood.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }

      neighborhood = remover_acentos(neighborhood);

      neighborhood = neighborhood.toLowerCase();

      if (!neighborhood) {
        return res.status(400).json({ message: 'Informe um bairro valido!' });
      }

      const patients = await User.find({
        neighborhood: neighborhood,
        patient: true,
      });

      if (patients === []) {
        return res
          .status(400)
          .json({ message: 'Nenhum Paciente encontrado nesse bairro!' });
      }

      return res.status(200).json(patients);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
