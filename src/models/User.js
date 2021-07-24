const mongoose = require('mongoose');

// Model de Usuarios
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
  },

  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  diagnosed: {
    type: Boolean,
    default: false,
  },

  diagnosed_with_leprosy: {
    type: Boolean,
    default: false,
  },

  password: {
    type: String,
  },

  approved: {
    type: Boolean,
    default: false,
  },

  index_patient: {
    type: Boolean,
    default: false,
  },

  patient_contact: {
    type: Boolean,
    default: false,
  },

  // caso contato
  patients_contacts: [],

  kinship: {
    type: String,
  },

  conduct: {
    type: String,
  },

  bgc: {
    type: Date,
  },

  // fim caso contato
  cpf: {
    type: String,
  },

  rg: {
    type: String,
  },

  patient: {
    // Paciente
    type: Boolean,
    default: false,
  },

  doctor: {
    // Doutor
    type: Boolean,
    default: false,
  },

  nurse: {
    // Enfermeiro
    type: Boolean,
    default: false,
  },

  admin: {
    // Adm
    type: Boolean,
    default: false,
  },

  sex: {
    type: String,
    lowercase: true,
  },

  date_of_birth: {
    // Data de nascimento
    type: String,
  },

  phone_one: {
    type: String,
  },

  phone_two: {
    type: String,
  },

  email: {
    type: String,
  },

  profession: {
    type: String,
    lowercase: true,
  },

  postal_code: {
    // Cep
    type: String,
  },

  public_place: {
    // Logradouro
    type: String,
    lowercase: true,
  },

  number: {
    type: String,
  },

  neighborhood: {
    // Bairro
    type: String,
    lowercase: true,
  },

  complement: {
    // Complemento
    type: String,
  },

  county: {
    // Municipio
    type: String,
    lowercase: true,
  },

  state: {
    // Estado
    type: String,
    lowercase: true,
  },

  latitude: {
    type: String,
  },

  longitude: {
    type: String,
  },

  permissions: {
    type: String,
    lowercase: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
