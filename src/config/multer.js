const multer = require('multer');
const uuid = require('uuid');
const path = require('path');

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg'
    ) {
      cb(null, path.resolve(__dirname, '..', '..', 'temp'));
    } else {
      cb({ message: 'This file is not an image file' }, false);
    }
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const id = uuid.v4();
    cb(null, `${id}${ext}`);
  },
});

module.exports = {
  imageUpload: multer({ storage: imageStorage }),
};
