const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const id = req.headers.id;
    const patient_id = req.params.id;

    const patient = await User.findOne({ _id: patient_id, patient: true });

    if (!patient)
      return res.status(200).json({ message: 'paciente nao existe' });

    const {
      email,
      name,
      password,
      cpf,
      rg,
      sex,
      longitude,
      latitude,
      date_of_birth,
      phone_one,
      phone_two,
      profession,
      postal_code,
      public_place,
      number,
      neighborhood,
      complement,
      state,
      county,
      kinship,
      conduct,
      bgc,
    } = req.body;

    function remover_acentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    let data = {
      email,
      name,
      password,
      cpf,
      rg,
      sex,
      date_of_birth,
      phone_one,
      phone_two,
      profession,
      postal_code,
      longitude,
      latitude,
      public_place: remover_acentos(public_place),
      number,
      neighborhood: remover_acentos(neighborhood),
      complement,
      state: remover_acentos(state),
      county: remover_acentos(county),
      who_created: id,
      patient: true,
      patient_contact: true,
      kinship,
      conduct,
      bgc,
    };

    const emailExists = await User.findOne({ email: email });
    if (emailExists)
      return res.status(200).json({ message: 'Email já cadastrado!' });

    const cpfExists = await User.findOne({ cpf: cpf });
    if (cpfExists)
      return res.status(200).json({ message: 'Cpf já cadastrado!' });

    const rgExists = await User.findOne({ rg: rg });
    if (rgExists) return res.status(200).json({ message: 'Rg já cadastrado!' });

    data.password = bcrypt.hashSync(password, 8);

    try {
      const patient_contact = await User.create(data);

      await User.findOneAndUpdate(
        { _id: patient_id },
        {
          $push: {
            patients_contacts: patient_contact._id,
          },
        }
      );
      return res.status(200).json({message: 'Paciente contato cadastrado!'});
    } catch (error) {
      return res.status(400).json({
        message:
          'Tivemos um problema na criação do caso contato, tente novamente!',
      });
    }

    // if (postal_code === patient.postal_code) {
      
    // } else {
    //   try {
    //     data.patient_contact = true;
    //     const patient_contact = await User.create(data);
    //     return res.status(200).json(patient_contact);
    //   } catch (error) {
    //     return res.status(400).json({
    //       message:
    //         'Tivemos um problema na criação do caso contato, tente novamente!',
    //     });
    //   }
    // }
  },
};
