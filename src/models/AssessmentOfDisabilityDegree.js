const mongoose = require('mongoose');

// Model Avaliação do Grau de Incapacidade
const AssessmentOfDisabilityDegreeSchema = new mongoose.Schema({
  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  avaliationEye: [],
  avaliationHand: [],
  avaliationFoot: [],

  highest_grade_eye_left: {
    type: String,
  },
  highest_grade_eye_right: {
    type: String,
  },
  highest_grade_hand_left: {
    type: String,
  },
  highest_grade_hand_right: {
    type: String,
  },
  highest_grade_foot_left: {
    type: String,
  },
  highest_grade_foot_right: {
    type: String,
  },

  // Maior grau atribuído início da PQT
  highest_degree_awarded_at_the_beginning_of_mdt: {
    type: String,
  },

  // Escore EHF (olhos, mãos e pés) total
  total_ehf_score_eyes_hands_and_feet_init: {
    type: String,
  },

  // Maior grau atribuído Alta da PQT
  highest_grade_awarded_high_mdt: {
    type: String,
  },

  // Escore EHF (olhos, mãos e pés) total
  total_ehf_score_eyes_hands_and_feet_final: {
    type: String,
  },

  additional_notes: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  'AssessmentOfDisabilityDegree',
  AssessmentOfDisabilityDegreeSchema
);
