const mongoose = require('mongoose');

// Helper para o model de usuarios (location)
const CaseContact = new mongoose.Schema(
  {
    case_contact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    kinship: {
      type: String,
    },
    conduct: {
      type: String,
    },
    bgc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CaseContact', CaseContact);
