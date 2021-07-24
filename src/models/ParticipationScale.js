const mongoose = require('mongoose');

// Model Escala de Participação
const ParticipationScaleSchema = new mongoose.Schema({
  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  questions: [],

  total_score: { type: Number, default: 0 },
  degree_of_participation_restriction: { type: String },
  additional_notes: { type: String, default: 'sem observações' },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ParticipationScale', ParticipationScaleSchema);
