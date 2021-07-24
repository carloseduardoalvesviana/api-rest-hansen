const Yup = require('yup');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { isValidCPF } = require('../utils/Cpf');

// Paciente Controller
module.exports = {
  async index(req, res) {
    try {
      const patients = await User.find({ patient: true });
      return res.status(200).json(patients);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Tivemos um pequeno problemas, tente novamente' });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const patient = await User.findOne({ _id: id });

      if (!patient) {
        return res
          .status(400)
          .json({ message: 'nenhum paciente cadastrado no momento' });
      }
      return res.status(200).json(patient);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Tivemos um pequeno problemas, tente novamente' });
    }
  },

  async store(req, res) {
    const { id } = req.headers;

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
    } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Email obrigatorio')
        .email('Informe um email valido'),
      name: Yup.string().required('campo nome obrigatorio'),
      password: Yup.string().required('campo senha obrigatoria'),
      cpf: Yup.string().required('campo cpf obrigatorio'),
      rg: Yup.string().required('campo rg obrigatorio'),
      sex: Yup.string().required('campo sexo obrigatorio'),
      date_of_birth: Yup.string().required('campo obrigatorio'),
      phone_one: Yup.string().required('campo obrigatorio'),
      phone_two: Yup.string(),
      profession: Yup.string().required('campo profissao obrigatorio'),
      postal_code: Yup.string().required('campo cep obrigatorio'),
      public_place: Yup.string().required('campo logradouro obrigatorio'),
      number: Yup.string().required('campo numero obrigatorio'),
      neighborhood: Yup.string().required('campo bairro obrigatorio'),
      complement: Yup.string(),
      state: Yup.string().required('Estado obrigatorio'),
      county: Yup.string().required('campo obrigatorio'),
      longitude: Yup.string().required('campo longitude obrigatorio'),
      latitude: Yup.string().required('campo latitude obrigatorio'),
    });

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
      longitude,
      latitude,
      date_of_birth,
      phone_one,
      phone_two,
      profession,
      postal_code,
      public_place: remover_acentos(public_place),
      number,
      neighborhood: remover_acentos(neighborhood),
      complement,
      state: remover_acentos(state),
      county: remover_acentos(county),
      who_created: id,
      patient: true,
    };

    try {
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      return res.status(400).json(error);
    }

    const cpfValid = isValidCPF(cpf);
    if (!cpfValid) return res.status(400).json({ message: 'CPF invalido!' });

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
      const patient = await User.create(data);
      return res.status(201).json(patient);
    } catch (error) {
      return res
        .status(400)
        .json({
          message:
            'Tivemos um pequeno problema em cadastrar um novo paciente, tente novamente',
        });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const patient = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
      return res.status(200).json({ message: "Paciente criado com sucesso!" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await User.deleteOne({ _id: id });
      return res
        .status(200)
        .json({ message: 'Paciente removido com sucesso!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
