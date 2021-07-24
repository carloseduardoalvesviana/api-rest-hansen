const mongoose = require('mongoose');

const DiagnosisSchema = new mongoose.Schema(
  {
    who_created: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    expanded: { type: String, default: null },

    months: [],

    status: { type: String, default: 'andamento' },

    date_init: {
      type: Date,
      default: null,
    },

    date_end: {
      type: Date,
      default: null,
    },

    comments: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      default: null,
    },

    pqm: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Diagnosis', DiagnosisSchema);
