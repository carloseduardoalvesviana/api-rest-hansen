const mongoose = require('mongoose');

// Model Salsa Escala
const ParsleyScaleSchema = new mongoose.Schema({
  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  questions: [],

  salsa_score: {
    type: Number,
  },

  partial_scores: {
    easy: Number,
    a_little_hard: Number,
    very_difficult: Number,
    i_dont_need_to_do_this: Number,
    i_cant_physically: Number,
    i_avoid_because_of_the_risk: Number,
  },

  risk_awareness_score: {
    one: {
      type: Number,
    },
    two: {
      type: Number,
    },
  },

  additional_notes: { type: String },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ParsleyScale', ParsleyScaleSchema);
