const mongoose = require('mongoose');

// Notification Model
const NotificationSchema = new mongoose.Schema({
  who_created: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  general_data: {
    notification_type: { type: String },
    health_or_disease: { type: String },
    code_icd10: { type: String },
    notification_date: { type: String },
    uf: { type: String },
    notification_municipality: { type: String },
    code_ibge: { type: String },
    health_unit: { type: String },
    code: { type: String },
    diagnosis_date: { type: String },
  },

  individual_notification: {
    patient_name: { type: String },
    birth_date: { type: String },
    age: { type: Number },
    sex: { type: String },
    pregnant: { type: String },
    race_or_color: { type: String },
    education: { type: String },
    sus_card_number: { type: String },
    mother_s_name: { type: String },
  },

  residence_information: {
    uf: { type: String },
    municipality_of_Residence: { type: String },
    code_ibge: { type: String },
    district: { type: String },
    Neighborhood: { type: String },
    public_place: { type: String },
    code: { type: String },
    number: { type: Number },
    complement: { type: String },
    geo_field_one: { type: String },
    gep_field_two: { type: String },
    reference_point: { type: String },
    zip_code: { type: String },
    ddd_telephone: { type: Number },
    zone: { type: String },
    country: { type: String },
  },

  occupation: {
    record_number: { type: String },
    occupation: { type: String },
    n_of_skin_lesions: { type: String },
    clinical_form: { type: String },
    operational_classification: { type: String },
    number_of_affected_nerves: { type: String },
  },

  attendance: {
    assessment_of_he_degree_of_physical_disability_in_the_diagnosis: {
      type: String,
    },
    input_mode: { type: String },
    new_case_detection_mode: { type: String },
  },

  lab_contact_info: {
    bacilloscopy: { type: String },
  },

  treatment: {
    number_of_registered_contacts: { type: String },
  },

  additional_notes: { type: String },

  investigator: {
    municipality_health_unit: { type: String },
    code_of_the_unit_of_health: { type: String },
    name: { type: String },
    functionl: { type: String },
  },

  data_init: { type: String },
  schema_teraupt: { type: String },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
