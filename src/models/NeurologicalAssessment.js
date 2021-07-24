const mongoose = require('mongoose');

// Model Avaliação Neurológica
const NeurologicalAssessmentSchema = new mongoose.Schema({
  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  left_hand: [],
  right_hand: [],
  left_foot: [],
  right_foot: [],

  // Face
  // Olhos
  // Queixa principal
  face_eyes_main_complaint: { type: String, required: true },
  // fechar os olhos sem força esquerdo
  face_eyes_close_eyes_without_force_left: { type: Number, required: true },
  // fechar os olhos sem força direito
  face_eyes_close_eyes_without_force_right: { type: Number, required: true },
  // fechar os olhos com força esquerdo
  face_eyes_close_your_eyes_tightly_left: { type: Number, required: true },
  // fechar os olhos com força direito
  face_eyes_close_your_eyes_tightly_right: { type: Number, required: true },
  // ######################################################################

  // Triquíase esquerdo
  face_eyes_trichiasis_left: { type: Boolean, required: true },
  // Triquíase direito
  face_eyes_trichiasis_right: { type: Boolean, required: true },
  // Dimin. sensib. córnea esquerdo
  face_eyes_decrease_sensib_cornea_left: { type: Boolean, required: true },
  // Dimin. sensib. córnea direito
  face_eyes_decrease_sensib_cornea_right: { type: Boolean, required: true },
  // Catarata esquerdo
  face_eyes_cataract_left: { type: Boolean, required: true },
  // Catarata direito
  face_eyes_cataract_right: { type: Boolean, required: true },
  // Opacidade da córnea esquerdo
  face_eyes_corneal_opacity_left: { type: Boolean, required: true },
  // Opacidade da córnea direito
  face_eyes_corneal_opacity_right: { type: Boolean, required: true },
  // Acuidade visual esquerdo
  face_eyes_visual_acuity_left: { type: Boolean, required: true },
  // Acuidade visual direito
  face_eyes_visual_acuity_right: { type: Boolean, required: true },
  // ######################################################################

  // Face

  // Nariz

  // Queixa principal
  face_nose_main_complaint: { type: String, required: true },
  // Ressecamento esquerdo
  face_nose_dryness_left: { type: Boolean, required: true },
  // Ressecamento direito
  face_nose_dryness_right: { type: Boolean, required: true },
  // Ferida esquerdo
  face_nose_wound_left: { type: Boolean, required: true },
  // Ferida direito
  face_nose_wound_right: { type: Boolean, required: true },
  // Perfuração no Septo esquerdo
  face_nose_septum_piercing_left: { type: Boolean, required: true },
  // Perfuração no Septo direito
  face_nose_septum_piercing_right: { type: Boolean, required: true },
  // ######################################################################

  // Membros superiores

  // Palpação de nervos

  // Queixa principal
  upper_limbs_palpation_of_nerves_main_complaint: {
    type: String,
    required: true,
  },
  // Ulnar esquerdo
  upper_limbs_palpation_of_nerves_ulnar_left: {
    type: String,
    required: true,
  },
  // Ulnar direito
  upper_limbs_palpation_of_nerves_ulnar_right: {
    type: String,
    required: true,
  },
  // Mediano esquerdo
  upper_limbs_palpation_of_nerves_median_left: {
    type: String,
    required: true,
  },
  // Mediano direito
  upper_limbs_palpation_of_nerves_median_right: {
    type: String,
    required: true,
  },
  // Radial esquerdo
  upper_limbs_palpation_of_nerves_radial_left: {
    type: String,
    required: true,
  },
  // Radial direito
  upper_limbs_palpation_of_nerves_radial_right: {
    type: String,
    required: true,
  },
  // #######################################################################

  // Membros superiores

  // Avaliação da força

  // Queixa principal
  upper_limbs_strength_assessment_main_complaint: {
    type: String,
    required: true,
  },
  // Abrir dedo mínimo Abdução do 5º dedo (nervo ulnar) esquerdo
  upper_limbs_strength_assessment_open_little_finger_abduction_of_the_5th_finger_ulnar_nerve_left:
    {
      type: String,
      required: true,
    },
  // Abrir dedo mínimo Abdução do 5º dedo (nervo ulnar) direita
  upper_limbs_strength_assessment_open_little_finger_abduction_of_the_5th_finger_ulnar_nerve_right:
    {
      type: String,
      required: true,
    },
  // Elevar o polegar Abdução do polegar (nervo mediano) esquerdo
  upper_limbs_strength_assessment_raising_the_thumb_thumb_abduction_median_nerve_left:
    {
      type: String,
      required: true,
    },
  // Elevar o polegar Abdução do polegar (nervo mediano) direito
  upper_limbs_strength_assessment_raising_the_thumb_thumb_abduction_median_nerve_right:
    {
      type: String,
      required: true,
    },
  // Elevar o punho Extensão de punho (nervo radial) esquerdo
  upper_limbs_strength_assessment_raising_the_wrist_fist_extension_radial_nerve_left:
    {
      type: String,
      required: true,
    },
  // Elevar o punho Extensão de punho (nervo radial) esquerdo
  upper_limbs_strength_assessment_raising_the_wrist_fist_extension_radial_nerve_right:
    {
      type: String,
      required: true,
    },
  // Membros superiores

  // Membros Inferiores
  // Palpação de nervos

  // Queixa principal
  lower_members_palpation_of_nerves_main_complaint: {
    type: String,
    required: true,
  },
  // Fibular esquerdo
  lower_members_palpation_of_nerves_fibular_left: {
    type: String,
    required: true,
  },
  // Fibular direito
  lower_members_palpation_of_nerves_fibular_right: {
    type: String,
    required: true,
  },
  // Tibial posterior esquerdo
  lower_members_palpation_of_nerves_tibial_posterior_left: {
    type: String,
    required: true,
  },
  // Tibial posterior direito
  lower_members_palpation_of_nerves_tibial_posterior_right: {
    type: String,
    required: true,
  },

  // Membros Inferiores
  // Avaliação da força

  // Queixa principal
  lower_members_strength_assessment_main_complaint: {
    type: String,
    required: true,
  },
  // Elevar o hálux Extensão de hálux (nervo fibular) esquerdo
  lower_members_strength_assessment_raising_the_hallux_hallux_fibular_nerve_extension_left:
    {
      type: String,
      required: true,
    },
  // Elevar o hálux Extensão de hálux (nervo fibular) direito
  lower_members_strength_assessment_raising_the_hallux_hallux_fibular_nerve_extension_right:
    {
      type: String,
      required: true,
    },
  // Elevar o pé Dorsiflexão de pé nervo fibular esquerdo
  lower_members_strength_assessment_elevate_the_foot_dorsiflexion_of_the_foot_fibular_nerve_left:
    {
      type: String,
      required: true,
    },
  // Elevar o pé Dorsiflexão de pé nervo fibular direito
  lower_members_strength_assessment_elevate_the_foot_dorsiflexion_of_the_foot_fibular_nerve_right:
    {
      type: String,
      required: true,
    },

  // CLASSIFICAÇÃO DO GRAU DE INCAPACIDADE (OMS)

  // olhos Esquerdo
  classification_of_the_deadline_of_disability_eyes_left: {
    type: String,
    required: true,
  },
  // olhos Direito
  classification_of_the_deadline_of_disability_eyes_right: {
    type: String,
    required: true,
  },

  // maos Esquerdo
  classification_of_the_deadline_of_disability_hands_left: {
    type: String,
    required: true,
  },
  // maos Direito
  classification_of_the_deadline_of_disability_hands_right: {
    type: String,
    required: true,
  },

  // pes Esquerdo
  classification_of_the_deadline_of_disability_foot_left: {
    type: String,
    required: true,
  },
  // pes Direito
  classification_of_the_deadline_of_disability_foot_right: {
    type: String,
    required: true,
  },
  // Maior Grau
  classification_of_the_deadline_of_disability_highest_degree: {
    type: String,
    required: true,
  },

  // Comentário
  comment: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  'NeurologicalAssessment',
  NeurologicalAssessmentSchema
);
