const Image = require('../models/Image');
const fs = require('fs');
const cloudinary = require('../config/cloudinary');

module.exports = {
  async store(req, res) {
    try {
      let { filename } = req.file;

      const file = req.file.path;

      const uploadResponse = await cloudinary.uploader.upload(file, {
        upload_preset: 'hansen',
      });

      if (!uploadResponse) {
        return res.json({ message: 'error on upload image to cloudinary' });
      }

      const image = await Image.create({
        imageName: filename,
        imageUrl: uploadResponse.url,
        asset_id: uploadResponse.asset_id,
        public_id: uploadResponse.public_id,
      });

      if (!image) {
        return res.json({ message: 'error on save image to mongo' });
      }

      const path = '/usr/src/app/temp/' + filename;

      fs.unlink(path, err => {
        if (err) {
          console.error(err);
          return;
        }
      });

      return res.json(image);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
