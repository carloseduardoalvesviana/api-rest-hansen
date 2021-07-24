const Yup = require("yup");
const User = require("../models/User");
const Image = require('../models/Image');
const { isValidCPF } = require("../utils/Cpf");

module.exports = {

  async store(req, res) {
    const { id = '' } = req.headers;

    const {
      id_image,
      name,
      cpf,
      postal_code,
      public_place,
      number,
      neighborhood,
      state,
      county,
    } = req.body;

    const schema = Yup.object().shape({
      cpf: Yup.string().required("campo cpf obrigatorio"),
      name: Yup.string().required("campo name obrigatorio"),
      postal_code: Yup.string().required("campo cep obrigatorio"),
      public_place: Yup.string().required("campo logradouro obrigatorio"),
      number: Yup.string().required("campo numero obrigatorio"),
      neighborhood: Yup.string().required("campo bairro obrigatorio"),
      state: Yup.string().required("Estado obrigatorio"),
      county: Yup.string().required("campo obrigatorio"),
    });

    function remover_acentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    let data = {
      name,
      cpf,
      postal_code,
      public_place: remover_acentos(public_place),
      number,
      neighborhood: remover_acentos(neighborhood),
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
    if (!cpfValid) return res.status(400).json({ message: "CPF invalido!" });

    const cpfExists = await User.findOne({ cpf: cpf });
    if (cpfExists)
      return res.status(200).json({ message: "Cpf já cadastrado!" });

    try {
      const patient = await User.create(data);

      const imageExists = await Image.findOne({ _id: id_image });

      if (!imageExists) {
        return res.status(400).json({ message: 'imagem não existe' });
      }

      await Image.findOneAndUpdate({ _id: id_image }, {
        id_user: patient._id
      }, { new: true });

      return res.status(201).json(patient);
    } catch (error) {
      return res.status(400).json({ message: 'Tivemos um pequeno problema em cadastrar um novo paciente, tente novamente' });
    }

  }
};
