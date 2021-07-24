const mongoose = require('mongoose');

// Helper para o model de usuarios (location)
const NotificationMessageSchema = new mongoose.Schema(
  {
    pacient: String,
    cpf: String,
    txt: String,
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'NotificationMessage',
  NotificationMessageSchema
);
