const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
  {
    imageName: {
      type: String,
      required: true,
    },
    asset_id: {
      type: String,
      default: '',
    },
    public_id: {
      type: String,
      default: '',
    },
    id_user: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Images', ImageSchema);
