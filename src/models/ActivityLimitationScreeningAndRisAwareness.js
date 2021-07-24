const mongoose = require('mongoose');

// Model Triagem de Limitação de Atividade e Consciência de Risco
const ActivityLimitationScreeningAndRisAwarenessSchema = new mongoose.Schema({
  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  deficiencies: [],
  contUlcers: [],
  GI: [],

  maximum_gi: String,
  ehf1_score: String,

  additional_notes: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  'ActivityLimitationScreeningAndRisAwareness',
  ActivityLimitationScreeningAndRisAwarenessSchema
);
